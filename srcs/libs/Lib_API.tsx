import {API_KEY} from '@env';

const GetAPI = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  const result = await response.json();
  if (response.status !== 200) {
    return {success: false, error: result};
  }
  return {success: true, result: result};
};

export {GetAPI};
