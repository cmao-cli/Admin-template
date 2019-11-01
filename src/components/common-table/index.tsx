// 封装目的：
// 1. 重复的limit切换和page切换管理
// 2. render函数重复，可以定义为对应的type
import * as React from 'react';
import { PaginationProps } from 'antd/lib/pagination';
import { Table } from 'antd';
import { ColumnProps, TableProps } from 'antd/lib/table/interface';
import { transformColumns } from './field-types';

export interface ICommonColumn<T> extends ColumnProps<T> {
  type?:string;  // type代替render函数，减少重复render的编写
  enums?:any;
  path?:string;
}
export interface ICommonTableProps<T> extends Partial<TableProps<T>> {
  data:any[];
  columns:ICommonColumn<T>[];
  noPage?:boolean; // 是否需要分页逻辑
  total?:number;
  pageSize?:number;
  current?:number;
  loading?:boolean;
  rowKey?:string;
  onPageChange?:(page:{current:number, limit:number}) => void;
}

export const CommonTable = (props:ICommonTableProps<any>) => {
  const handlePageChange = (page:number, limit:number) => {
    console.log('handlePageChange');
    console.log({ current: page, limit });
    props.onPageChange && props.onPageChange({ current: page, limit });
  };
  const { data, total, pageSize, current, loading = false, columns, noPage, rowKey = 'id', ...others } = props;
  const transformedColumns = transformColumns(columns);
  const paginationConfig:PaginationProps | boolean = noPage ? false : {
    current,
    total,
    pageSize,
    showQuickJumper: true,
    showSizeChanger: true,
    onShowSizeChange: handlePageChange,
    onChange: handlePageChange,
  };
  return (
    <Table
      rowKey={rowKey}
      columns={transformedColumns}
      dataSource={data}
      pagination={paginationConfig}
      loading={loading}
      {...others}
    />
  );
};
