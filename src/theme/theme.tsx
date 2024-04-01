import { createTheme, PaletteMode } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light' as PaletteMode, // Ustawienie trybu jasnego tematu
    // Inne opcje kolorów i właściwości tematu
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark' as PaletteMode, // Ustawienie trybu ciemnego tematu
    // Inne opcje kolorów i właściwości tematu
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Kolor główny
    },
    secondary: {
      main: '#ff9800', // Kolor dodatkowy
    },
  },
});

export { lightTheme, darkTheme,theme };
