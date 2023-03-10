import {GetAPI} from '../libs/Lib_API';

const GetReviewList = async (
  hospitalId: number,
  page: number,
  search_query?: string,
  size?: number,
) => {
  const opt = [];
  if (page) {
    opt.push(`page=${page}`);
  }
  if (search_query && search_query !== '') {
    opt.push(`search_query=${search_query}`);
  }
  if (size) {
    opt.push(`size=${size}`);
  }
  console.log(opt);
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
