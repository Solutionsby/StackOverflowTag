
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

export const Input = () =>{
    return (
        <Box sx={{
            width:'95%',
            margin:'2vh auto'
        }}>
        <TextField 
        sx={{
            width:'60%'
        }}
        label= 'Podaj liczbe wierszy'
        type='number'
        />
        </Box>

    )
}

