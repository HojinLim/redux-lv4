import React, { useState } from "react";
import EveryButton from "../components/EveryButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import todoSlice from "../redux/modules/todoSlice";

const Form = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWriteButtonClick = () => {
    navigate("/");
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
          <h2>내용</h2>
          <input
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
            placeholder="내용을 입력해주세요. (200자 이내)"
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
