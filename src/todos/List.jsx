import React from "react";
import EveryButton from "../components/EveryButton";
import { removeTodo } from "../redux/modules/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  
 
  return (
    <>
      <EveryButton />
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>제목: {todo.title}</h3>
          <p>id: {todo.id}</p>
          <p>작성자: {todo.writer}</p>
          <p>내용: {todo.contents}</p>
          <button onClick={()=>{dispatch(removeTodo(todo.id))}}>삭제</button>
        </div>
      ))}
    </>
  );
};

export default List;
