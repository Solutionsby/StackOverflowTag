import React, { createContext, useContext,useState } from 'react';
import axios from 'axios';

interface Tag {
  id: number;
  name: string;
  count: number;
}
export default Tag;
interface DataContextType {
  tags: Tag[];
  numberOfRows: number;
  setNumberOfRows:(rows:number) => void;
  fetchData: () => void;
}
interface DataProviderProps {
    children: React.ReactNode;
  }

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [numberOfRows,  setNumberOfRows] = useState<number>(5)


  const fetchData = async () => {
    try {
      const response = await axios.get('/mokkedStack.json');
      const selectedData = response.data.items.map(({ name, count }: Tag, index: number) => ({
        id: index + 1,
        name,
        count
      }));
      setTags(selectedData);
    } catch (error) {
      console.log("Wystąpił błąd podczas pobierania", error);
    }
  };

  const value: DataContextType = {
    tags,
    numberOfRows,
    setNumberOfRows,
    fetchData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
