import Box from '@mui/material/Box';
import {theme} from '../../theme/theme'
import { ButtonAction } from '../button/Button';


export const  TopBar = () =>{
    return(
        <Box sx={{ 
          display:'flex',
          flexDirection:'column',
          justifyContent:"space-around",
          alignItems:'center',
          width:'98%',
          height:"15vh",
          borderBottomRightRadius:15,
          borderBottomLeftRadius:15,
          margin:'0 auto',
          bgcolor:theme.palette.primary.main,
          fontFamily:'sans-serif',
          color:'white',
          fontSize:'2.5vh'
         }}>
        Przeglądarka Tag-ów StackOverflow
        <ButtonAction>Pobierz Dane</ButtonAction>
      </Box>
    )
}
