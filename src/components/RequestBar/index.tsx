import * as React from "react";
import { MethodSelector } from "./MethodSelector";
import { SendButton } from "./SendButton";
import { UrlInput } from "./UrlInput";
import { ActionTypes, State, initialState, reducer } from "./reducer";

type ContextType = {
  state: State;
  dispatch: React.Dispatch<ActionTypes>;
};
export const Context = React.createContext<ContextType | undefined>(undefined);

export const RequestBar = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => console.log(state), [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <MethodSelector />
        <UrlInput />
        <SendButton />
      </div>
    </Context.Provider>
  );
};
