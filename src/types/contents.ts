import { ITag } from "@/types//tags";
import { DefaultResponse } from ".";

/*******************  HTTP REQUESTS  *********************/
export interface IContentsListRequest {
  size: number;
  page: number;
}

export interface IContentsCreateRequest extends IContents {}
/*******************  HTTP RESPONSE  *********************/
export interface IContentsListResponse extends DefaultResponse {
  value: IContents[];
}

export interface IContentsDetailInfoResponse extends DefaultResponse {
  value: IContents;
}

/*******************       DTO       *********************/
export interface IContents {
  title: string;
  content: string;
  author: string;
  tag: ITag[];
}
