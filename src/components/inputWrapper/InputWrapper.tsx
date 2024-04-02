import { Input } from "../input/Input"
import { useData } from '../DataProvider/DataProvider';


export const InputWrapper = ()=>{
    const { setNumberOfRows,numberOfRows} = useData();
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const parsedValuue = parseInt(e.target.value);
        if(!isNaN(parsedValuue) && setNumberOfRows){
            if(parsedValuue <= 100){
                setNumberOfRows(parsedValuue)
            }else{
                alert('Wartość nie moze przekraczć 100 wierszy na stronę ')
            } 
        }
    }


    return(
        <>   
        <Input value={numberOfRows} label={"Podaj liczbe wierszy"} type={'number'} handle={handleChange}/>
        
        </>
    )
}