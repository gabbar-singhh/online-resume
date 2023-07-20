import React from "react";
import styles from "./AlertWrapper.module.css";
import { Alert } from "@mui/material";

const AlertWrapper = (props) => {
  return (
    <div className={styles.Main}>
      <Alert severity={props.type}>
        <strong>{props.heading}</strong>
        {props.desc}
      </Alert>
    </div>
  );
};

export default AlertWrapper;
