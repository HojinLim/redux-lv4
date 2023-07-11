import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { useNavigate } from "react-router-dom";
import EveryButton from "../components/EveryButton";
import { Button, Container } from "@mui/material";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    console.log(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  return (
    <>
      <Header />
      <EveryButton />
      <Container maxWidth="sm">
        
        <h1>무엇을 할까요?</h1>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/form");
          }}
        >
          할 일 기록하기
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/list");
          }}
        >
          TODO LIST
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Home;