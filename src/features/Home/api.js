import axios from 'axios';

export const fetchHome = async() => {

  const { data } = await axios.get(
      `${process.env.REACT_APP_USERS_URL_LINK}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      },
    );
  return data;
}
