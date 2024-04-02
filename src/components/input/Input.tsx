
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

interface InputProps{
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value:number | string;
    label:string;
    type:string;
}



export const Input:React.FC<InputProps>= ({value,label,type,handle}) =>{

    return (
        <Box sx={{
            width:'45%',
            margin:'2vh auto'
        }}>
        <TextField 
        sx={{
            width:'60%'
        }}
        value={value}
        onChange={handle}
        label= {label}
        type={type}
        inputProps={{
            min: 0,
            max:100
        }}
        />
        </Box>

    )
}

