import React from "react";
import Button from "@mui/material/Button";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export interface ButtonActionProps {
  children: React.ReactNode;
  handleFetchData: () => void;
  color?:"success" | "error" | "primary"
  size?: "small" | "medium" | "large";
  variant?:"text" | "outlined" | "contained";
  fetchFlag?: boolean | null ;
  icon?: "cloudDownload" | "checkCircle" | "error";

}

export const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  fetchFlag,
  size = "medium",
  variant="outlined",
  color=(fetchFlag === null ? 'primary': (fetchFlag ? "success" : "error")),
  handleFetchData,
}) => {
    const Mesage={
      success:"Dane Pobrane",
      error: "Błąd"
    }
  return (
    <Button
      sx={{
        display:"flex",
        justifyContent:"space-around",
        width:"30%"
      }}
      color={color}
      size={size}
      variant={variant}
      onClick={handleFetchData}
    >
      {fetchFlag === null ? <CloudDownloadIcon />:(fetchFlag ? <CheckCircleIcon /> : <ErrorIcon/>)}
      {fetchFlag === null ? children:(fetchFlag ? Mesage.success  : Mesage.error)}
     
    </Button>
  );
};
