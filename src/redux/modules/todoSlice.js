import { createSlice } from "@reduxjs/toolkit";

import shortid from "shortid";

// counterSlice.js의 Slice 구조
const initialState = [
  {
    id: shortid.generate(),
    writer: "김철수",
    title: "리액트1",
    contents: "리액트 공부하기1",
    password: "1234",
    isDone: false
  },
  {
    id: shortid.generate(),
    writer: "김나은",
    title: "운동하기",
    contents: "러닝",
    password: "4321",
    isDone: true
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: shortid.generate(),
        writer: action.payload.writer,
        title: action.payload.title,
        contents: action.payload.contents,
        password: action.payload.password,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const { id, title, contents } = action.payload;

      return state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
            contents: contents,
          };
        }
        return todo;
      });
    },
    switchTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    },
  },
});
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {  removeTodo, editTodo } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
