import axios from "axios";

// 모든 todos를 가져오는 api
const SERVER_URI = process.env.REACT_APP_SERVER_URI;

const getTodos = async () => {
  
  const response = await axios.get(SERVER_URI);
  return response;
};

export { getTodos };
