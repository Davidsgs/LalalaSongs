const axios = require("axios");

export const getAxios = async (url) => {
  try {
    const dataAx = await axios.get(url);
    return dataAx.data;
  } catch (err) {
    let error = err.response;
    return error;
  }
};