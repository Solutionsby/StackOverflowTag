import { useState } from "react";
import Tag from "../DataProvider/DataProvider";
import { useData } from "../DataProvider/DataProvider";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box} from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Tag",
    type: "string",
    width: 200,
    editable: true,
  },
  {
    field: "count",
    headerName: "Liczba wątków",
    type: "number",
    width: 200,
    editable: true,
  },
];

export const DataTable: React.FC = () => {
  const { tags, numberOfRows, setNumberOfRows } = useData();
  const [currentPage, setCurrentPage] = useState(0);

  const getPageData = (): Tag[] => {
    const startIndex = currentPage * numberOfRows;
    const endIndex = startIndex + numberOfRows;
    return !isNaN(numberOfRows) ? tags.slice(startIndex, endIndex) : tags;
  };

  const valPageSize = () => {
    return !isNaN(numberOfRows) ? numberOfRows : 0;
  };

  const onPaginationModelChange = (params: {
    page: number;
    pageSize: number;
  }) => {
    setCurrentPage(params.page);
    setNumberOfRows(params.pageSize);
  };



  return (
   
    <Box sx={{ height: "60vh", width: "95%", margin: "1vh auto",}}>
      <DataGrid
        rows={getPageData()}
        columns={columns}
        rowCount={tags.length}
        loading={!tags.length}
        paginationMode="server"
        paginationModel={{
          page: currentPage,
          pageSize: valPageSize(),
        }}
        onPaginationModelChange={onPaginationModelChange}
      />
    </Box>

  );
};
