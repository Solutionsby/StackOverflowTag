import Button from '@mui/material/Button';



interface ButtonActionProps {
    children:React.ReactNode;
    handleFetchData:() => void;
}


export const ButtonAction: React.FC<ButtonActionProps> =({children,handleFetchData})=>{
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