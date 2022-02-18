import * as React from "react";
import Button from "@mui/material/Button";
import WDCheckmarkIcon from "../svgr-components/WDCheckmarkIcon";

interface WDButtonProps {
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "inherit"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  checkMark?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const WDButton: React.FC<WDButtonProps> = function ({
  children,
  color,
  disabled,
  checkMark,
  onClick,
}): React.ReactElement {
  return (
    <Button
      color={color}
      disabled={disabled}
      onClick={onClick}
      startIcon={checkMark && <WDCheckmarkIcon />}
      variant="contained"
    >
      {children}
    </Button>
  );
};

WDButton.defaultProps = {
  color: "primary",
  disabled: false,
  checkMark: false,
  onClick: undefined,
};

export default WDButton;
