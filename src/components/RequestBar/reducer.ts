import { RequestMethods } from "../../constants";

export type ActionTypes =
  | {
      type: "SET_METHOD";
      payload: RequestMethods;
    }
  | {
      type: "SET_URL";
      payload: string;
    };

export type State = {
  method: RequestMethods;
  url: string;
};

export const initialState: State = {
  method: RequestMethods.get,
  url: "",
};

export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
    case "SET_URL":
      return {
        ...state,
        url: action.payload,
      };
    case "SET_METHOD":
      return {
        ...state,
        method: action.payload,
      };
  }
};
