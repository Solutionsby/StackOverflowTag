import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Option{
    label:string;
    value:string;
}


interface SelectProps{
    label:string;
    value:string;
    set:(arg:string)=>void;
    selectList:Option[];
}

export const SelectFetch:React.FC<SelectProps> =({label,selectList,value,set})=> {

  const handleChange = (event: SelectChangeEvent) => {
    set(event.target.value as string);
  };

  console.log(value)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
            {selectList.map(({label,value})=>(
                <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}