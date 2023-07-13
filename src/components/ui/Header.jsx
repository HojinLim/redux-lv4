import React from "react";
import EveryButton from "../EveryButton";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#36c540" }}>
      <Typography style={{ margin: "15px", padding:"15px" }} textAlign="center" variant="h3" component="h4">
        😎 TODO LIST 😎
      </Typography>
      <EveryButton />
    </div>
  );
};

export default Header;
