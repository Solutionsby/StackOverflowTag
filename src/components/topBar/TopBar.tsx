import Box from '@mui/material/Box';
import {theme} from '../../theme/theme'
import { ButtonAction } from '../button/Button';
import { useData } from '../DataProvider/DataProvider';
import { SelectFetch } from '../select/SelectFetch';


export const  TopBar = () =>{
  const { fetchData,order,setOrder,sort,setSort,fetchFlag} = useData();
  const handleFetchData = () => {
      fetchData();
    };
    const orderSelect = [
      {label:'Rosnąco',value:"asc"},
      {label:'Malejąco',value:"desc"},
    ]
    const sortSelect = [
      {label:'Popularne',value:"popular"},
      {label:'Ostanio aktywne',value:"activity"},
      {label:'Nazwie',value:"name"}
    ]

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
          border:"2px solid ",
          fontFamily:'sans-serif',
          color:theme.palette.primary.main,
          fontSize:'2.5vh'
         }}>
        Przeglądarka Tag-ów StackOverflow
        <Box sx={{
          display:'flex',
          justifyContent:'space-around',
          width:'80%'

        }}>
        <SelectFetch label={'Uporządkuj'} selectList={orderSelect} value={order} set={setOrder} />
        <SelectFetch label={'Sortowanie'} selectList={sortSelect} value={sort} set={setSort} />
        <ButtonAction handleFetchData={handleFetchData} fetchFlag={fetchFlag}>Pobierz Dane</ButtonAction>
        </Box>
      </Box>
    )
}
