import * as React from "react";
import { Context } from ".";

export const UrlInput = () => {
  const context = React.useContext(Context);

  if (!context) return null;

  const { dispatch } = context;

  return (
    <input
      onChange={(e) => dispatch({ type: "SET_URL", payload: e.target.value })}
    />
  );
};
