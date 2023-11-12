import * as React from "react";
import { RequestMethods } from "../../constants";
import { Context } from ".";

const sendXHR = (method: RequestMethods, url: string) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };

  switch (method) {
    case RequestMethods.get:
      xhr.open(method, url, true);
      xhr.send("");
      break;
    default:
      alert(`${method} method not implemented yet`);
  }
};

export const SendButton = () => {
  const context = React.useContext(Context);

  if (!context) return null;

  const { state } = context;

  return <button onClick={() => sendXHR(state.method, state.url)}>Send</button>;
};
