import {GetAPI} from '../libs/Lib_API';

const GetReviewList = async (
  hospitalId: number,
  page: number,
  size: number,
  search_query?: string,
) => {
  return await GetAPI(
    `https://recruit.modoodoc.com/hospitals/${hospitalId}/reviews/?page=${page}&size=${size}&` +
      (search_query ? `search_query=${search_query}` : ''),
  );
};

const GetReviewDetail = async (hospitalId: number, reviewId: string) => {
  return await GetAPI(
    `https://recruit.modoodoc.com/hospitals/${hospitalId}/reviews/${reviewId}/`,
  );
};
export {GetReviewList, GetReviewDetail};
