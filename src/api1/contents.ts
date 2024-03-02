import { IContentsCreateRequest, IContentsListRequest, IContentsListResponse } from "@/types/contents";
import { requests } from ".";

const CONTENTS_URL = (url?: string) => `/contents${url}`;

export const getContentsList = ({ size, page }: IContentsListRequest) =>
  requests.get<IContentsListResponse>(CONTENTS_URL(`?=size=${size}&page=${page}`));

export const createContents = (body: IContentsCreateRequest) =>
  requests.post(CONTENTS_URL(), body);
