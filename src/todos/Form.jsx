import React, { useState } from "react";
import EveryButton from "../components/EveryButton";
import { useDispatch, useSelector } from "react-redux";

import  { addTodo } from "../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");

  const navigate= useNavigate();
  
  const dispatch= useDispatch();
  //const todos = useSelector((state) => state.todo);

  const handleWriteButtonClick = (e) => {
    e.preventDefault();

    try{
      dispatch(addTodo({writer, title, contents}))

      //리스트로 넘어가기
      navigate("/list")
      alert("완료")
    }catch{
      alert("실패")
    }
    

    setContents("")
    setTitle("")
    setWriter("")
    setPassword("")
  };

  return (
    <>
      <EveryButton />

      <form onSubmit={handleWriteButtonClick}>
        <div>
          <h2>작성자</h2>
          <input
            value={writer}
            onChange={(e) => {
              setWriter(e.target.value);
            }}
            placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          ></input>
        </div>
        <div>
          <h2>제목</h2>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="제목을 입력해주세요. (50자 이내)"
          ></input>
        </div>
        <div>
          <h2>
            내용</h2>
          <input
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
            placeholder="내용을 입력해주세요. (200자 이내)"
          ></input>
        </div>
        <div>
          <h2>
            비밀번호</h2>
          <input type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="비밀번호를 입력해주세요. (4자)"
          ></input>
        </div>
        <br />
        <br />
        <button>제출 완료</button>
      </form>
    </>
  );
};

export default Form;
