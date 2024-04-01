import './App.css'
import {MainView } from './components/mainView/MainView'
import { DataProvider } from './components/DataProvider/DataProvider';

function App() {


  return (
    <DataProvider>
      <MainView />
    </DataProvider>
  )
}

export default App
