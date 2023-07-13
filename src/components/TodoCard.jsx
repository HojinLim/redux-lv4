import { Checkbox, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import axios from "axios";

const TodoCard = ({ data, isDone }) => {
  const [checked, setChecked] = useState(isDone);

  const handleChange = async (event, todoId) => {
    setChecked(event.target.checked);

    await axios.patch(`http://localhost:3001/todos/${todoId}`, {
      isDone: !isDone,
    });
    window.location.reload();
  };

  return (
    <>
      <Typography variant="h2" component="h4">
        {isDone ? "DONE." : "Not YET."}
      </Typography>

      {data
        .filter((work) => {
          return work.isDone === isDone;
        })
        .map((todo) => (
          <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: "1rem", margin: "15px" }}>
              <div key={todo.id}>
                <h3>제목: {todo.title}</h3>
                <p>작성일시: {todo.timer}</p>
                <p>작성자: {todo.writer}</p>
                <p>내용: {todo.contents}</p>
                <p>
                  완료 여부:
                  <Checkbox
                    checked={checked}
                    // onChange={handleChange(todo)}
                    color="success"
                    onClick={(event) => handleChange(event, todo.id)}
                  />
                </p>

                <div>
                  <PasswordInput todo={todo} />
                  <br />
                  <br />
                </div>
              </div>
            </Paper>
          </Container>
        ))}
    </>
  );
};

export default TodoCard;
