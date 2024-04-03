import React from "react";
import Button from "@mui/material/Button";

export interface ButtonActionProps {
  children: React.ReactNode;
  handleFetchData: () => void;
  color?:"success" | "error" | "primary"
  size?: "small" | "medium" | "large";
  variant?:"text" | "outlined" | "contained";
  fetchFlag?: boolean | null ;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  fetchFlag,
  size = "medium",
  variant="contained",
  color=(fetchFlag === null ? 'primary': (fetchFlag ? "success" : "error")),
  handleFetchData,
}) => {



  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      onClick={handleFetchData}
    >
      {children}
    </Button>
  );
};
