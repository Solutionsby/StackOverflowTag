import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";



export interface InputProps {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  status: boolean;
  label: string;
  type: string;
  helperText: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  label,
  type,
  handle,
  helperText,
  status,

}) => {
  return (
    <Box
      sx={{
        width: "45%",
        margin: "2vh auto",
      }}
    >
      <TextField
        sx={{
          
width: "60%",
        }}
        error={status}
        value={value}
        onChange={handle}
        label={label}
        type={type}
        helperText={helperText}
        inputProps={{
          min: 0,
          max: 100,
        }}
      />
    </Box>
  );
};
