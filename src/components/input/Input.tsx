import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

interface InputProps {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  status: boolean;
  label: string;
  type: string;
  error: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  label,
  type,
  handle,
  error,
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
        helperText={error}
        inputProps={{
          min: 0,
          max: 100,
        }}
      />
    </Box>
  );
};
