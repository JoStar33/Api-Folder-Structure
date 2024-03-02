import { IProductCreateRequest, IProductListResponse } from "@/types/product";
import { requests } from ".";

const PRODUCT_URL = (url?: string) => `/product${url}`;

export const getProductList = () => requests.get<IProductListResponse>(PRODUCT_URL());

export const createProduct = (body: IProductCreateRequest) => requests.post(PRODUCT_URL(), body);