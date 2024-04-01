import { DataTable } from "../dataTable/DataTable"
import { Input } from "../input/Input"
import { TopBar } from "../topBar/TopBar"


export const  MainView = () =>{
    return(
       <>
       <TopBar />
       <Input />
       <DataTable />
       </>
    )
}
