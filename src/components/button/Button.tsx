import Button from '@mui/material/Button';


interface ButtonActionProps {
    children:React.ReactNode;
}


export const ButtonAction: React.FC<ButtonActionProps> =({children})=>{
   return(
    <Button
    variant="contained"
    sx={{
        width:"40%",
        bgcolor:'white',
        color:'black',
    }}
    >{children}</Button>
   )
}