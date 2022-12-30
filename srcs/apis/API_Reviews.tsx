import {GetAPI} from '../libs/Lib_API';

const GetReviewList = async (
  hospitalId: number,
  page?: number,
  size?: number,
  search_query?: string,
) => {
  const opt = [];
  if (page) {
    opt.push(`page=${page}`);
  }
  if (size) {
    opt.push(`size=${size}`);
  }
  if (search_query) {
    opt.push(`search_query=${search_query}`);
  }
  return await GetAPI(
    `https://recruit.modoodoc.com/hospitals/${hospitalId}/reviews/?${opt.join(
      '&',
    )}`,
  );
};

const GetReviewDetail = async (hospitalId: number, reviewId: string) => {
  return await GetAPI(
    `https://recruit.modoodoc.com/hospitals/${hospitalId}/reviews/${reviewId}/`,
  );
};
export {GetReviewList, GetReviewDetail};
