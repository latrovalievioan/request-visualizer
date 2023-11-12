import { MethodSelector } from "./MethodSelector";
import { SendButton } from "./SendButton";
import { UrlInput } from "./UrlInput";

export const RequestBar = () => {
  return (
    <div>
      <MethodSelector />
      <UrlInput />
      <SendButton />
    </div>
  );
};
