export interface IPdf {
  marca: string;
  modelo: string;
  tipo: string;
  documento: string;
}

export interface IPdfs {
  [key: string]: IPdf[];
}
