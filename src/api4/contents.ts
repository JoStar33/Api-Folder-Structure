import { IContentsCreateRequest, IContentsDetailInfoResponse, IContentsListResponse } from "@/types/contents"
import { requests } from "."

const CONTENTS_URL = (url?: string | number) => `/contents${url}`;

export const Contents = {
  Get: {
    getContentsList: () => requests.get<IContentsListResponse>(CONTENTS_URL()),
    getContentsDetailInfo: (contentsId: number) => requests.get<IContentsDetailInfoResponse>(CONTENTS_URL(contentsId)),
  },
  Post: {
    createContents: (body: IContentsCreateRequest) => requests.post(CONTENTS_URL(), body)
  },
  Patch: {},
  Delete: {},
  Put: {},
};
