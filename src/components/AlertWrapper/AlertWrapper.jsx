import React from "react";
// import styles from "./AlertWrapper.module.css";
import { Alert } from "@mui/material";
import STYLED from "styled-components";

const AlertWrapper = (props) => {
  return (
    <MAIN>
      <Alert severity={props.type}>
        <strong>{props.heading}</strong>
        {props.desc}
      </Alert>
    </MAIN>
  );
};

const MAIN = STYLED.div`
margin: 1em auto;
width: 80%;
`;

export default AlertWrapper;