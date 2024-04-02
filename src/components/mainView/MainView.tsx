import { DataTable } from "../dataTable/DataTable"
import { InputWrapper } from "../inputWrapper/InputWrapper"

import { TopBar } from "../topBar/TopBar"


export const  MainView = () =>{
    return(
       <>
       <TopBar />
        <InputWrapper />
       <DataTable />
       </>
    )
}
