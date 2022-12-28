import {GetAPI} from '../libs/Lib_API';

const GetHospitalList = async () => {
  return await GetAPI('https://recruit.modoodoc.com/hospitals/');
};
export {GetHospitalList};
