import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { useNavigate } from "react-router-dom";
import EveryButton from "../components/EveryButton";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <EveryButton/>

      <div>
        <h1>무엇을 할까요?</h1>
        <button
          onClick={function () {
            navigate("/form");
          }}
        >
          할 일 기록하기
        </button>
        <button onClick={()=>{
            navigate("/list")
        }}>TODO LIST</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
