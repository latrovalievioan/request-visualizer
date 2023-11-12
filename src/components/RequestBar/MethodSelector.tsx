import * as React from "react";
import { RequestMethods } from "../../constants";
import { Context } from "./index";

export const MethodSelector = () => {
  const context = React.useContext(Context);

  if (!context) return null;

  const { dispatch } = context;

  return (
    <select
      onChange={(e) =>
        dispatch({
          type: "SET_METHOD",
          payload: e.target.value as RequestMethods,
        })
      }
    >
      {(Object.keys(RequestMethods) as (keyof typeof RequestMethods)[]).map(
        (m) => (
          <option key={m} value={RequestMethods[m]}>
            {RequestMethods[m]}
          </option>
        ),
      )}
    </select>
  );
};
