import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton, Tooltip } from "@mui/material";

const EveryButton = () => {
  const navigate = useNavigate();
  return (
    <Container>


      <Tooltip title="Home">
        <IconButton
          onClick={function () {
            navigate("/");
          }}
        >
          <HomeIcon fontSize="large"   />
        </IconButton>
      </Tooltip>
    </Container>
  );
};
const Container = styled.div`
  background-color: #35c98e;
`;

export default EveryButton;
