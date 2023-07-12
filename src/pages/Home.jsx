import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";



import axios from "axios";
import Main from "../components/ui/Main";

const Home = () => {


  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    console.log(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  return (
    <>
      <Header />
      <Main />
     
      <Footer />
    </>
  );
};

export default Home;
