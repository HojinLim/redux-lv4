import React, { useState } from "react";
import EveryButton from "../components/EveryButton";
import { removeTodo } from "../redux/modules/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../components/PasswordInput";
import { Container } from "@mui/material";
import axios from "axios";

const List = () => {
  // const todos = useSelector((state) => state.todo);

  const [todos, setTodos] = useState([{}]);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");

    setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
    //return {data}
  };
  // const todos2= fetchTodos()
  fetchTodos();

  return (
    <>
      <EveryButton />
      {todos.map((todo) => (
        <Container maxWidth="sm">
          <div key={todo.id}>
            <h3>제목: {todo.title}</h3>
            <p>id: {todo.id}</p>
            <p>작성자: {todo.writer}</p>
            <p>내용: {todo.contents}</p>
            <div>
              <PasswordInput todo={todo} />
              <br />
              <br />
            </div>
          </div>
        </Container>
      ))}
    </>
  );
};

export default List;
