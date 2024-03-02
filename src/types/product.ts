import { DefaultResponse } from ".";

/*******************  HTTP REQUESTS  *********************/
export interface IProductListRequest {
  size: number;
  page: number;
}
export interface IProductCreateRequest extends IProduct {}
/*******************  HTTP RESPONSE  *********************/
export interface IProductListResponse extends DefaultResponse {
  value: IProduct[];
}

export interface IProductDetailInfoResponse extends DefaultResponse {
  value: IProduct;
}

/*******************       DTO       *********************/
export interface IProduct {
  title: string;
  code: string;
  content: string;
  brand: string;
}
