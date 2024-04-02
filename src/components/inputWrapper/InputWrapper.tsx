import { Input } from "../input/Input"
import { useData } from '../DataProvider/DataProvider';


export const InputWrapper = ()=>{
    const { setNumberOfRows,numberOfRows,setFiterValue,filterValue } = useData();
    
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
    const handleFilterValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const filterValue = e.target.value;
        setFiterValue(filterValue)
    }


    return(
        <>   
        <Input value={numberOfRows} label={"Podaj liczbe wierszy"} type={'number'} handle={handleChange}/>
        <Input value={filterValue} label={"Szukaj"}  type={'string'}  handle={handleFilterValue}/>
        </>
    )
}