import axios from 'axios';
const historyUrl = 'http://localhost:8000/history';

export const getHistory = async () => {
  try {
    const { data } = await axios.get(historyUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
