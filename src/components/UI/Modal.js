import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.BackDrop} />;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portals = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portals)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portals
      )}
    </React.Fragment>
  );
};

export default Modal;
