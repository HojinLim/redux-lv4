import React, { useState } from "react";
import EveryButton from "../components/EveryButton";
import { removeTodo } from "../redux/modules/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../components/PasswordInput";

const List = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <>
      <EveryButton />
      {todos.map((todo) => (
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
      ))}
    </>
  );
};

export default List;
