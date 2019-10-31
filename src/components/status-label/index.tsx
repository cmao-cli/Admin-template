import * as React from 'react';
import styles from './index.scss';

const ColorMap = {
  'blue': ['#E6F7FF', '#1890FF'],
  'yellow': ['#FFFBE6', '#FAAD14'],
  'green': ['#F6FFED', '#52C41A'],
  'red': ['#FFF1F0', '#F5222D' ],
  'gray': ['#F6F6F6', 'rgba(0,0,0,0.25)'],
};

export enum EColor {
  blue = 'blue',
  yellow = 'yellow',
  green = 'green',
  red = 'red',
  gray = 'gray',
}

// 添加颜色类型限制
type ColorType = keyof typeof ColorMap;

interface IStatusColorMap {
  [index:string]:ColorType;
}

interface IStatusLabel {
  statusNameMap:IObject; //状态名称map表
  statusColorMap:IStatusColorMap; //状态颜色map表
  status:string;
}
const StatusLabel:React.FC<IStatusLabel> = (props) => {
  const { statusColorMap, statusNameMap, status } = props;
  const currentColor = statusColorMap[status] ? ColorMap[statusColorMap[status]][1] : EColor.red;
  return (
    <span className={styles.label_wrap} style={{ backgroundColor: statusColorMap[status] ? ColorMap[statusColorMap[status]][0] : 'red' }}>
      <i style={{ backgroundColor: currentColor }}></i>
      <span style={{ color: currentColor }}>{statusNameMap[status]}</span>
    </span>
  );
};

export default StatusLabel;