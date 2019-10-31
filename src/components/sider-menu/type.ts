export interface MenuDataItem {
  name?:string;
  path?:string;
  component?:any;
  children?:MenuDataItem[];
  icon?:string;
}
