import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const EveryButton = () => {
  const navigate = useNavigate();
  return (
    
    <Container>
      <span class="material-symbols-outlined">home</span>
     
      <ToHome
        onClick={function(){
          navigate("/");
        }}
      >
      
        HOME
      </ToHome>
    </Container>
  );
};
const Container= styled.div `
    background-color: #35c98e;
`

const ToHome = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

export default EveryButton;
