import { useState } from "react";

import BoxAndButton from "../components/BoxAndButton";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const CreateNotice = () => {
  const [text, setText] = useState("");

  return (
    
    <BoxAndButton
      text={text}
      setText={setText}
      icon={faUpload}
      btnText="Publish notice"
    />
    
  );
};

export default CreateNotice;
