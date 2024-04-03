import { Input } from "../input/Input"
import { useData } from '../DataProvider/DataProvider';
import { useState } from "react";


export const InputWrapper = ()=>{
    const { setNumberOfRows,numberOfRows} = useData();
    const [status , setStatus]=useState<string>('Podaj liczbe wierszy');
    const [errorMSG, setErrorMsg]= useState<string>('');
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const parsedValuue = parseInt(e.target.value);
        if(!isNaN(parsedValuue) && setNumberOfRows){
            checkValue(parsedValuue,setNumberOfRows)
        }
    }

    const checkValue = (value,set)=>{
        if(value <= 100){
            set(value)
        }else{
            setStatus('Error');
            setErrorMsg('Max 100');
            setNumberOfRows(100);
        } 
    }

    return(
        <>   
        <Input value={numberOfRows} label={status}type={'number'} handle={handleChange} error={errorMSG}/>
        
        </>
    )
}