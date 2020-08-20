import React from 'react';
import { Prompt } from 'react-router-dom';
import { Modal } from 'antd';
import { browserHistory } from 'src/App';

interface LeaveConfirmProps {
  isPrompt?:boolean;
  setIsPrompt?:(v:boolean, cb:(v:boolean) => void) => void;
}

/** 变更路由时的确认 */
export const LeaveConfirm:React.FC<LeaveConfirmProps> = (props) => {
  const { isPrompt, setIsPrompt } = props;
  return (
    <Prompt
      when={isPrompt}
      message={(location) => {
        Modal.confirm({
          title: '即将离开页面',
          content: '未保存的信息将丢失，确定离开页面吗？',
          onOk: () => {
            setIsPrompt && setIsPrompt(false, () => browserHistory.push(location));
          },
        });
        return false;
      }}
    />
  );
};

