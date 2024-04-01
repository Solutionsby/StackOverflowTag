import Button from '@mui/material/Button';
import { useData } from '../DataProvider/DataProvider';



interface ButtonActionProps {
    children:React.ReactNode;
}


export const ButtonAction: React.FC<ButtonActionProps> =({children})=>{
    const { fetchData } = useData();
    const handleFetchData = () => {
        fetchData();
      };
   return(
    <Button
    variant="contained"
    onClick={handleFetchData}
    sx={{
        width:"40%",
        bgcolor:'white',
        color:'black',
    }}
    >{children}</Button>
   )
}