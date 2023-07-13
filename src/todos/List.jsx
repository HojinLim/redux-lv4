import React, { useEffect, useState } from "react";
import EveryButton from "../components/EveryButton";
import { removeTodo } from "../redux/modules/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../components/PasswordInput";
import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Paper,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import axios from "axios";
import Footer from "../components/ui/Footer";
import { useQuery } from "react-query";
import { getTodos } from "../api/todos";
import TodoCard from "../components/TodoCard";

const List = ({ isActive }) => {



  // useQuery로 data와 상태를 가져옵니다.
  const { isLoading, error, isError, data } = useQuery("todos", getTodos);

  // useQuery 관련
  if (isLoading) {
    return (
      <div>
        Loading...
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <EveryButton />
      <TodoCard data={data} isDone={false} />
      <TodoCard data={data} isDone={true} />

      <Footer />
    </>
  );
};

export default List;
