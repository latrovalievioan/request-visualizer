import { RequestMethods } from "../../constants";

export const MethodSelector = () => {
  return (
    <select>
      {(Object.keys(RequestMethods) as (keyof typeof RequestMethods)[]).map(
        (m) => (
          <option value={RequestMethods[m]}>{RequestMethods[m]}</option>
        ),
      )}
    </select>
  );
};
