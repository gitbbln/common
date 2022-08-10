export type TItems = {
  caller: string,
  fn: string,
  path: string,
  file: string,
};
export type TSU = string | undefined;
export type TLevels = {
  [key: number | string]: string;
};
export type TColors = {
  [key: string]: number;
};
export type TLogs = {
  [key: string]: boolean;
}
export type TObj = {
  [key: string]: object;
};

type TTitle = {
  ru: string,
  en: string
}
export type TDates = {
  start: string,
  last: string
}
export type TD = {
  [index: string]: string | number

}
export type TS = {
  [index: string]: string;

}

export type TBTest = (b: boolean) => boolean;
export type ValueOrArray < T > = T | Array < ValueOrArray < T >> ;
export type HypertextNode = string | [string, {
  [key: string]: any
}, ...HypertextNode[]];
export type Json = string | number | boolean | null | Json[] | {
  [key: string]: Json
};
export type TJSON = Json | string | number | boolean | null;