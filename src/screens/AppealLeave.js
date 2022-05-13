import { useState } from "react";
import BoxAndButton from "../components/BoxAndButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AppealLeave = () => {
  const [text, setText] = useState("");

  return (
    <BoxAndButton
      text={text}
      setText={setText}
      icon={faPaperPlane}
      btnText="Appeal leave"
    />
  );
};

export default AppealLeave;
