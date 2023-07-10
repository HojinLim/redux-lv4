import React, { useState } from "react";
import EveryButton from "../components/EveryButton";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";
import axios from "axios";
import shortid from "shortid";

const Form = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  //const todos = useSelector((state) => state.todo);
  const [todo, setTodo] = useState({});

  
  const onSubmitHandler = async () => {
    const id=shortid.generate()
    await axios.post("http://localhost:3001/todos", {writer, title, contents, password, id});
  };

  const handleWriteButtonClick = (e) => {
    e.preventDefault();

    try {
      onSubmitHandler();
      dispatch(addTodo({ writer, title, contents }));

      if (validation()) {
        alert("성공");
        navigate("/list");
      } else {
        alert("실패");
      }
    } catch {}
  };

  const validation = function () {
    if (writer.length < 2) {
      alert("이름을 2글자 이상 작성해주세요!");
      init();
      return false;
    } else if (title.length < 1) {
      alert("제목을 1글자 이상 작성해주세요!");
      init();
      return false;
    } else if (contents.length < 2) {
      alert("내용을 2글자 이상 작성해주세요!");
      init();
      return false;
    } else if (password.length !== 4) {
      alert("비밀번호를 4자리 작성해주세요!");
      init();
      return false;
    }
    return true;
  };
  function init() {
    setContents("");
    setTitle("");
    setWriter("");
    setPassword("");
  }

  return (
    <>
      <EveryButton />

      <Container maxWidth="sm">
        <form onSubmit={handleWriteButtonClick}>
          <div>
            <h2>작성자</h2>

            <TextField
              id="outlined-basic"
              label="작성자"
              variant="outlined"
              value={writer}
              placeholder="이름 입력 (2자 이상)"
              onChange={(e) => {
                setWriter(e.target.value);
              }}
            ></TextField>
          </div>
          <div>
            <h2>제목</h2>
            <TextField
              id="outlined-basic"
              label="제목"
              variant="outlined"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="제목 입력(1자 이상) "
            ></TextField>
          </div>
          <div>
            <h2>내용</h2>
            <TextField
              id="outlined-basic"
              label="내용"
              variant="outlined"
              value={contents}
              onChange={(e) => {
                setContents(e.target.value);
              }}
              placeholder="내용 입력 (2자 이상)"
            ></TextField>
          </div>
          <div>
            <h2>비밀번호</h2>
            <TextField
              id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
              inputProps={{
                maxLength: 4,
              }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="비밀번호 입력 (4자리)"
            ></TextField>
          </div>
          <br />
          <br />
          <Button type="submit" variant="contained" color="success">
            제출 완료
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Form;
