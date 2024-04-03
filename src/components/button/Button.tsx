import React from "react";
import Button from "@mui/material/Button";

export interface ButtonActionProps {
  children: React.ReactNode;
  handleFetchData: () => void;
  customColor?: string;
  size?: "small" | "medium" | "large";
}

export const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  handleFetchData,
  customColor,
  size = "medium",
}) => {
  const buttonColor = customColor ? customColor : "white";

  return (
    <Button
      sx={{ bgcolor: buttonColor, color: "black" }}
      size={size}
      variant="contained"
      onClick={handleFetchData}
      className="downloadButton"
    >
      {children}
    </Button>
  );
};
