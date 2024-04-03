import React, { createContext, useContext, useState } from "react";
import axios from "axios";

interface Tag {
  id: number;
  name: string;
  count: number;
}
export default Tag;
interface DataContextType {
  tags: Tag[];
  numberOfRows: number;
  order: string;
  sort: string;
  fetchFlag:boolean | null;
  errorMesage:string;
  setFetchFleg:(flag:boolean) => void;
  setErrorMesege:(msg:string) => void;
  setSort: (sort: string) => void;
  setOrder: (order: string) => void;
  setNumberOfRows: (rows: number) => void;
  fetchData: () => void;
}
interface DataProviderProps {
  children: React.ReactNode;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [numberOfRows, setNumberOfRows] = useState<number>(1);
  const [order, setOrder] = useState<string>("desc");
  const [sort, setSort] = useState<string>("popular");
  const [fetchFlag, setFetchFleg] = useState<boolean | null>(null); 
  const [errorMesage, setErrorMesege]=useState<string>('');

  console.log(fetchFlag)

  const fetchData = async () => {
    let allTags: Tag[] = [];
    for (let page = 1; page <= 2; page++) {
      try {
        const response = await axios.get(
          `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=100&order=${order}&sort=${sort}&site=stackoverflow`
        );
        const selectedData = response.data.items.map(
          ({ name, count }: Tag, index: number) => ({
            id: (page - 1) * 100 + index + 1,
            name,
            count,
          })
        );
        allTags = [...allTags, ...selectedData];
        setTags(allTags);
        setFetchFleg(true)

      } catch (error) {
        setErrorMesege("Wystąpił błąd podczas pobierania");
        setFetchFleg(false)
      }
    }
  };

  const value: DataContextType = {
    tags,
    numberOfRows,
    order,
    sort,
    fetchFlag,
    errorMesage,
    setFetchFleg,
    setErrorMesege,
    setSort,
    setOrder,
    setNumberOfRows,
    fetchData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
