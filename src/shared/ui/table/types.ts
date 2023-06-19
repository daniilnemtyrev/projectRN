export type TableItem<T extends object> = T & {id: string};

export type Column<T, K extends keyof T> = {
  acessor: K;
  title: string;
};
