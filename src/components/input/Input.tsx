import { useData } from '../DataProvider/DataProvider';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';


export const Input = () =>{
    const { setNumberOfRows,numberOfRows } = useData();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setNumberOfRows(parseInt(e.target.value));
    }
    return (
        <Box sx={{
            width:'95%',
            margin:'2vh auto'
        }}>
        <TextField 
        sx={{
            width:'60%'
        }}
        value={numberOfRows}
        onChange={handleChange}
        label= 'Podaj liczbe wierszy'
        type='number'
        inputProps={{
            min: 0
        }}
        />
        </Box>

    )
}

