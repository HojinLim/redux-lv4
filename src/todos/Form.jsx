import React, { useEffect, useState } from "react";
import EveryButton from "../components/EveryButton";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import shortid from "shortid";
import { CurrentTimer } from "../components/CurrentTimer";
import Footer from "../components/ui/Footer";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { addTodo } from "../api/todos";
import useInput from "../hooks/useInput";

const Form = () => {
  // 커스텀 훅 사용
  const [writer, onChangeWriterHandler, writerReset] = useInput("");
  const [title, onChangeTitleHandler, titleReset] = useInput("");
  const [contents, onChangeContentsHandler, contentsReset] = useInput("");
  const [password, onChangePasswordHandler, passwordReset] = useInput("");

  const [timer, setTimer] = useState("0");

  const navigate = useNavigate();

  useEffect(() => {
    setTimer(CurrentTimer());
  }, []);

  // 할 일 추가
  const queryClient = useQueryClient();
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleAddButtonClick = (e) => {
    e.preventDefault();

    if (validation()) {
      const id = shortid.generate();
      const newTodo = {
        writer,
        title,
        contents,
        password,
        id,
        timer,
        isDone: false,
      };
      addMutation.mutate(newTodo);

      alert("성공");
      navigate("/list");
    } else {
      alert("실패");
    }
  };

  const validation = function () {
    if (writer.length < 2) {
      alert("이름을 2글자 이상 작성해주세요!");
      init();
      return false;
     } 
     else if (title.length < 1) {
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
    writerReset();
    titleReset();
    contentsReset();
    passwordReset();
    
  }

  return (
    <>
      <EveryButton />

      <Typography style={{ margin: "15px" }} variant="h3" component="h4">
        ✍️ 할 일 적어봐요
      </Typography>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "1rem", margin: "20px" }}>
          <form onSubmit={handleAddButtonClick}>
            <div>
              <h2>작성자</h2>

              <TextField
                id="outlined-basic"
                label="작성자"
                variant="outlined"
                value={writer}
                inputProps={{
                  maxLength: 10,
                }}
                placeholder="이름 입력 (2자 이상)"
                onChange={onChangeWriterHandler}
              ></TextField>
            </div>
            <div>
              <h2>제목</h2>
              <TextField
                inputProps={{
                  maxLength: 15,
                }}
                id="outlined-basic"
                label="제목"
                variant="outlined"
                value={title}
                onChange={onChangeTitleHandler}
                placeholder="제목 입력(1자 이상) "
              ></TextField>
            </div>
            <div>
              <h2>내용</h2>
              <TextField
                label="내용"
                value={contents}
                onChange={onChangeContentsHandler}
                id="outlined-multiline-flexible"
                multiline={true}
                maxRows={4}
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
                onChange={onChangePasswordHandler}
                placeholder="비밀번호 입력 (4자리)"
              ></TextField>
            </div>
            <br />
            <br />
            <Button type="submit" variant="contained" color="success">
              제출 완료
            </Button>
          </form>
        </Paper>
        <Footer />
      </Container>
    </>
  );
};

export default Form;
