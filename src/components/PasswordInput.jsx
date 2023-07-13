import React, { Children, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../redux/modules/todoSlice";
import axios from "axios";
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import { CurrentTimer } from "./CurrentTimer";
import { SvgIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo } from "../api/todos";

const PasswordInput = ({ todo }) => {
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [timer, setTimer] = useState("0");

  const queryClient = useQueryClient();

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

  // Todo 수정
  const editMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const handleEditTodo = () => {
    setTimer(CurrentTimer());

    if (!contents || !title) {
      alert("값이 비었습니다!");
      return;
    }
    if (window.confirm("수정하시겠습니까?")) {
      const updatedTodo = {
        ...todo,
        timer: timer,
        title: title,
        contents: contents,
        isDone: !todo.isDone,
      };
      editMutation.mutate(updatedTodo);
      setTitle("");
      setContents("");
    }
  };

  // Todo 삭제
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const handleDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteMutation.mutate(todo.id);
    }
  };

  if (deleteMutation.isLoading) {
    // 삭제 중일 때 표시할 로딩 상태 처리
  }

  if (deleteMutation.isError) {
    // 오류 발생 시 표시할 오류 상태 처리
  }

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
          <Tooltip title="Delete">
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton onClick={handleEditTodo}>
              <ModeEditIcon />
            </IconButton>
          </Tooltip>

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

// dispatch(
//   editTodo({
//     id: todo.id,
//     writer: todo.writer,
//     title: title,
//     contents: contents,
//     password: todo.password,
//   })
// );
