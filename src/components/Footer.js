import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {

  const history = useHistory();

  const goBack = () => {
    return history.goBack();
  }

  const goForward = () => {
    return history.goForward();
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
