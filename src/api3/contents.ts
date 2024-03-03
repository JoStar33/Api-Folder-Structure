import { IContentsCreateRequest, IContentsDetailInfoResponse, IContentsListResponse } from "@/types/contents"
import { requests } from "."

const CONTENTS_URL = (url?: string | number) => `/contents${url}`;

export const ContentsGet = {
  getContentsList: () => requests.get<IContentsListResponse>(CONTENTS_URL()),
  getContentsDetailInfo: (contentsId: number) => requests.get<IContentsDetailInfoResponse>(CONTENTS_URL(contentsId)),
}

export const ContentsPost = {
  createContents: (body: IContentsCreateRequest) => requests.post(CONTENTS_URL(), body)
}

export const ContentsPatch = {}

export const ContentsDelete = {}

export const ContentsPut = {}