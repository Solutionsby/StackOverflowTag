
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'tag',
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

const rows = [
  { id: 1, tag: 'JavaScript', count: 22},
];

export const DataTable =()=>  {
  return (
    <Box sx={{ height: 400, width: '95%',margin:"1vh auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}