import { useState } from 'react';
import Tag from '../DataProvider/DataProvider';
import { useData } from '../DataProvider/DataProvider';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { Box } from '@mui/material';


const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Tag',
    type:'string',
    width: 200,
    editable: true,
  },
  {
    field: 'count',
    headerName: 'Liczba wątków',
    type:"number",
    width:200,
    editable: true,
  },
];

export const DataTable: React.FC = () => {
    const { tags,numberOfRows,setNumberOfRows,filterValue } = useData();
    const [currentPage, setCurrentPage] = useState(0);


    const getPageData = ():Tag[] => {
      const startIndex = currentPage * numberOfRows;
      const endIndex = startIndex + numberOfRows;
      let filteredTags = filterValue !== ''
      ? tags.filter(tag => tag.name.toLowerCase().includes(filterValue.toLowerCase()))
      : tags
      return filteredTags.slice(startIndex, endIndex)
    };
    const onPaginationModelChange = (params: { page: number; pageSize: number }) => {
        setCurrentPage(params.page);
        setNumberOfRows(params.pageSize);
      };
  
    return (
      <Box style={{ height: 400, width: '95%', margin: '1vh auto' }}>
        <DataGrid
          rows={getPageData()}
          columns={columns}
          rowCount={tags.length}
          paginationMode="server"
          paginationModel={{
            page:currentPage,
            pageSize:numberOfRows
        }} 
        onPaginationModelChange={onPaginationModelChange}
        />
      </Box>
    );
  };