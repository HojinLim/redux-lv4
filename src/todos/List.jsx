import React, { useEffect, useState } from "react";
import EveryButton from "../components/EveryButton";
import { removeTodo } from "../redux/modules/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../components/PasswordInput";
import { Container, Paper } from "@mui/material";
import axios from "axios";
import Footer from "../components/ui/Footer";
import { useQuery } from "react-query";
import { getTodos } from "../api/todos";

const List = ({ isActive }) => {
  const [res, setRes] = useState();

  const SERVER_URI = process.env.REACT_APP_SERVER_URI;

  const [todos, setTodos] = useState([{}]);

  const { data, isLoading, error } = useQuery("todos", async () => {
    const response = await axios.get(SERVER_URI);
    return response.data;
  });

  // useQuery 관련
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <EveryButton />
      {data.map((todo) => (
        <Container maxWidth="sm">
          <Paper elevation={3} style={{ padding: "1rem", margin: "15px" }}>
            <div key={todo.id}>
              <h3>제목: {todo.title}</h3>
              {/* <p>id: {todo.id}</p> */}
              <p>작성일시: {todo.timer}</p>
              <p>작성자: {todo.writer}</p>
              <p>내용: {todo.contents}</p>
              <div>
                <PasswordInput todo={todo} />
                <br />
                <br />
              </div>
            </div>
          </Paper>
        </Container>
      ))}

      <Footer />
    </>
  );
};

export default List;

// {todos.map((todo) => (
//   <Container maxWidth="sm">
//     <Paper elevation={3} style={{ padding: "1rem", margin: "15px" }}>
//       <div key={todo.id}>
//         <h3>제목: {todo.title}</h3>
//         {/* <p>id: {todo.id}</p> */}
//         <p>작성일시: {todo.timer}</p>
//         <p>작성자: {todo.writer}</p>
//         <p>내용: {todo.contents}</p>
//         <div>
//           <PasswordInput todo={todo} />
//           <br />
//           <br />
//         </div>
//       </div>
//     </Paper>
//   </Container>
// ))}

// const todos = useSelector((state) => state.todo);
// const getTodos = async () => {
//   const response = await axios.get(SERVER_URI);
//   //  const response = await fetch('/api/todos');

//   return response;
// };
