import * as React from "react";
import { useState } from "react";
import WDButton from "./WDButton";

interface WDInfoPanelButtonProps {
  name: "Cancel" | "Draw" | "Pause";
}

const WDInfoPanelButton: React.FC<WDInfoPanelButtonProps> = function ({
  name,
}): React.ReactElement {
  const [selected, setSelected] = useState(false);

  const setSelection = (event) => {
    event.preventDefault();
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  return (
    <WDButton
      color={selected ? "secondary" : "primary"}
      onClick={setSelection}
      checkMark={selected}
    >
      {name}
    </WDButton>
  );
};

export default WDInfoPanelButton;
