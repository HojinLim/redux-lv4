// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "../modules/todoSlice";



// 
const store = configureStore({
  reducer: { todo: todoSlice },
});

export default store;
