import { Input } from "../input/Input"
import { useData } from '../DataProvider/DataProvider';
import { Box } from '@mui/material';


export const InputWrapper = ()=>{
    const { setNumberOfRows,numberOfRows,setFiterValue,filterValue } = useData();
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const parsedValuue = (e.target.value ? Number(e.target.value) : '');
        if(!isNaN(parsedValuue) && setNumberOfRows){
            if(parsedValuue <= 100){
                setNumberOfRows(parsedValuue)
            }else{
                alert('Wartość nie moze przekraczć 100 wierszy na stronę ')
            } 
        }
    }
    const handleFilterValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const filterValue = e.target.value;
        setFiterValue(filterValue)
    }


    return(
        <Box >
        <Input value={numberOfRows} label={"Podaj liczbe wierszy"} type={'string'} handle={handleChange}/>
        <Input value={filterValue} label={"Szukaj"}  type={'string'}  handle={handleFilterValue}/>
        </Box>
    )
}


