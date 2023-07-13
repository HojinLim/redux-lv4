import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "1000px" }}>
      <Container maxWidth="sm">
        <h1>무엇을 할까요?</h1>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/form");
          }}
        >
          할 일 기록하기
        </Button>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/list");
          }}
        >
          TODO LIST
        </Button>
      </Container>
    </div>
  );
};

export default Main;
