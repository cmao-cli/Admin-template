import * as React from 'react';
import { Modal } from 'antd';
import { ModalFuncProps } from 'antd/lib/modal/index';
import './index.scss';

const { confirm } = Modal;

export interface IOperateProps {
  disabled?:boolean;
  name:string;
  onClick?:(params?:any) => void;
  needConfirm?:boolean; // 是否需要确认弹窗
  confirmConfig?:ModalFuncProps; // 确认弹窗的配置
  color?:string;
}

export function Operate (props:IOperateProps) {
  const { disabled, name, onClick, needConfirm, confirmConfig } = props;
  const colorStyle = disabled ? { color: 'rgba(0,0,0,0.25)' } : {};
  const handleClick = () => {
    if (disabled) {
      return;
    }
    if (needConfirm) {
      confirm(confirmConfig!);
    } else {
      onClick && onClick();
    }
  };
  return (
    <span
      styleName={'operate_btn'}
      style={colorStyle}
      onClick={handleClick}
    >
      {name}
    </span>
  );
}
