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

export { lightTheme, darkTheme };
