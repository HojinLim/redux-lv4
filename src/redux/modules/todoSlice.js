import { createSlice } from "@reduxjs/toolkit";

import shortid from "shortid";

// counterSlice.js의 Slice 구조
const initialState = [
  {
    id: shortid.generate(),
    writer: "김철수",
    title: "리액트1",
    contents: "리액트 공부하기1",
  },
  {
    id: shortid.generate(),
    writer: "김나은",
    title: "리액트2",
    contents: "데이트룩 입기",
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(
        {
          id: shortid.generate(),
          writer: action.payload.writer,
          title: action.payload.title,
          contents: action.payload.contents,
        }
      )
    },
    removeTodo: (state, action) => {
      return state.filter((todo)=> todo.id !== action.payload)
    }
  },
});
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addTodo, removeTodo } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
