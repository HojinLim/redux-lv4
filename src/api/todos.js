import axios from "axios";
import { useQuery } from "react-query";

// 모든 todos를 가져오는 api
const SERVER_URI = process.env.REACT_APP_SERVER_URI;

/**
 * todo 리스트를 가져옵니다.
 * @param {number} 이건 어떤 변수 가져오는거다 
 * 
 */
const getTodos = async () => {
  const response = await axios.get(`${SERVER_URI}/todos`);
  return response.data;
};

/**
 * 새로운 todo를 추가시켜줍니다.
 */

const addTodo = async (newTodo) => {
  await axios.post(`${SERVER_URI}/todos`, newTodo);
};

/**
 * todo를 삭제시켜줍니다.
 */
const deleteTodo = async (id) => {
  await axios.delete(`${SERVER_URI}/todos/${id}`);
};

/**
 *  todo를 수정시켜줍니다.
 */
const editTodo = async (updatedTodo) => {
  await axios.patch(`${SERVER_URI}/todos/${updatedTodo.id}`, updatedTodo);
};

export { getTodos, addTodo, deleteTodo, editTodo };
