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
      <TextField
      sx={{
        width:"35%"
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

  );
};
