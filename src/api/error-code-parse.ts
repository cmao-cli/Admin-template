/**
 * error code parse
 */

interface ICodeParse {
  [key:string]:string;
}

const codeParse:ICodeParse = {
  'A_0': '未知错误',
};

export const errorParse = (errCode:string) : string => {
  return codeParse[errCode] || '未知错误';
};