import React, { Children, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../redux/modules/todoSlice";

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
    dispatch(
      editTodo({
        id: todo.id,
        writer: todo.writer,
        title: title,
        contents: contents,
        password: todo.password,
      })
    );
  };
  const handleRemoveTodo = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(removeTodo(todo.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handlePasswordSubmit(todo);
    setPassword("");
  };

  return (
    <>
      {!editMode && (
        <div>
          <input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handlePasswordSubmit}>확인</button>
        </div>
      )}
      {editMode && (
        <div>
          <button onClick={handleRemoveTodo}>삭제</button>
          <button onClick={handleEditTodo}>수정</button>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
          />
          <input
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            placeholder="내용"
          />
        </div>
      )}
    </>
  );
};

export default PasswordInput;
