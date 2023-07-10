import React, { Children, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../redux/modules/todoSlice";
import axios from "axios";
import { Button, TextField } from "@mui/material";

const PasswordInput = ({ todo }) => {
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    // 비밀번호 확인 로직을 구현합니다.
    if (password === todo.password) {
      setEditMode(true);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleEditTodo = () => {
    // dispatch(
    //   editTodo({
    //     id: todo.id,
    //     writer: todo.writer,
    //     title: title,
    //     contents: contents,
    //     password: todo.password,
    //   })
    // );

    axios.patch(`http://localhost:3001/todos/${todo.id}`, {
      id: todo.id,
      writer: todo.writer,
      title: title,
      contents: contents,
      password: todo.password,
    });
  };
  const handleRemoveTodo = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      // dispatch(removeTodo(todo.id));
      axios.delete(`http://localhost:3001/todos/${todo.id}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handlePasswordSubmit();
    setPassword("");
  };

  return (
    <>
      {!editMode && (
        <div>
          <TextField
            id="outlined-basic"
            placeholder="비밀번호"
            variant="outlined"
            type="password"
            label="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />

          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="success"
          >
            확인
          </Button>
        </div>
      )}
      {editMode && (
        <div>
          <Button type="submit" variant="contained" onClick={handleRemoveTodo}>
            삭제
          </Button>
          <Button type="submit" variant="contained" onClick={handleEditTodo}>
            수정
          </Button>
          <br />

          <br />
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            variant="outlined"
            label="제목"
          />
          <TextField
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            placeholder="내용"
            variant="outlined"
            label="내용"
          />
        </div>
      )}
    </>
  );
};

export default PasswordInput;
