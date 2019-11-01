export interface IMenuDataItem {
  name?:string;
  path?:string;
  component?:any;
  children?:IMenuDataItem[];
  icon?:string;
}
