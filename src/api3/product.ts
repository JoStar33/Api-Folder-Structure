import { IProductCreateRequest, IProductDetailInfoResponse, IProductListResponse } from "@/types/product";
import { requests } from "."

const PRODUCT_URL = (url?: string | number) => `/product${url}`;

export const ProductGet = {
  getProductList: () => requests.get<IProductListResponse>(PRODUCT_URL()),
  getProductDetailInfo: (productId: number) => requests.get<IProductDetailInfoResponse>(PRODUCT_URL(productId))
}

export const ProductPost = {
  createProduct:(body: IProductCreateRequest) => requests.post(PRODUCT_URL(), body)
}

export const ProductPut = {}

export const ProductPatch = {}

export const ProductDelete = {}
