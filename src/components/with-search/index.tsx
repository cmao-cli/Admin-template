import * as React from 'react';
import { Select, Form, Row, Col, Button, Input, DatePicker } from 'antd';
import { OptionProps } from 'antd/lib/select/index';
import { FormComponentProps } from 'antd/lib/form/index';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import styles from './index.scss';
import * as moment from 'moment';
const { Option } = Select;

export interface IFormItem {
  label:string;
  type?:string;
  key:string;
  enums?:OptionProps[]; // select选择框的option数组
  placeholder?:string;
  initialValue?:string;
}

export interface IWithSearchProps extends FormComponentProps {
  formItem:IFormItem[];
  onSearch?:(formValues:{ [field:string]:any }) => void; // 搜索的请求函数
  onReset?:() => void;
}

function WithSearch(props:IWithSearchProps) {
  const { getFieldDecorator } = props.form;
  const getComponent = (item:IFormItem) : React.ReactNode => {
    const { type = 'input', enums = [], placeholder } = item;
    switch (type) {
      case 'input':
        return <Input placeholder={placeholder || '请输入'} />;
      case 'select':
        return (
          <Select
            placeholder={placeholder || '请选择'}
          >
            {enums.map(({ value, title }:OptionProps) => <Option key={value} value={value}>{title}</Option>)}
          </Select>
        );
      case 'datePicker':
        return (
          <DatePicker.RangePicker
            style={{ width: '100%' }}
            locale={locale}
            showTime={{
              defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
            } as any}
          />
        );
      default:
        return <Input placeholder={placeholder || '请输入'} />;
    }
  };
  const renderFormItem = () : React.ReactNode => {
    const { formItem } = props;
    return (
      <Form layout="inline">
        <Row gutter={48}>
          {
            formItem.map((item) => (
              <Col span={8} key={item.key}>
                <Form.Item label={item.label}>
                  {
                    getFieldDecorator(item.key, {
                      initialValue: item.initialValue,
                    })(getComponent(item))
                  }
                </Form.Item>
              </Col>
            ))
          }
        </Row>
      </Form>
    );
  };
  const handleSearch = () => {
    const fields = props.form.getFieldsValue();
    const trimedFields = Object.keys(fields).reduce((prev:IObject, current) => {
      // 只有string类型参数时才可以trim，如果是数字或对象则不允许
      prev[current] = (fields[current] && (typeof(fields[current]) === 'string')) ? fields[current].trim() : fields[current];
      return prev;
    }, {});
    props.onSearch && props.onSearch(trimedFields);
  };
  const handleReset = () => {
    props.form.resetFields();
    props.onReset && props.onReset();
    // 重置之后要重新请求一次列表
    props.onSearch && props.onSearch({});
  };
  return (
    <Row className={styles.with_search}>
      <Col span={20}>
        {renderFormItem()}
      </Col>
      <Col span={4}>
        <Button type="primary" onClick={handleSearch} style={{ marginLeft: 40, marginRight: 16 }}>查询</Button>
        <Button type="default" onClick={handleReset}>重置</Button>
      </Col>
    </Row>
  );
}

export const WithSearchForm = Form.create<IWithSearchProps>()(WithSearch);
