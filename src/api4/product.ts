import { IProductCreateRequest, IProductDetailInfoResponse, IProductListResponse } from "@/types/product";
import { requests } from "."

const PRODUCT_URL = (url?: string | number) => `/product${url}`;

export const Product = {
  Get: {
    getProductList: () => requests.get<IProductListResponse>(PRODUCT_URL()),
    getProductDetailInfo: (productId: number) => requests.get<IProductDetailInfoResponse>(PRODUCT_URL(productId))
  },
  Post: {
    createProduct:(body: IProductCreateRequest) => requests.post(PRODUCT_URL(), body)
  },
  Put: {},
  Patch: {},
  Delete: {},
}
