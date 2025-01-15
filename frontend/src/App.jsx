import React from "react";
import Weather from "./components/Weather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff0000',
    },
    background: {
      default: "#1e293b",
      paper: "#1f2937",
    }
  }
})
function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            html: { height: '100%' },
            body: { height: '100%', margin: 0, padding: 0, backgroundColor: darkTheme.palette.background.default },
            '#root': { height: '100%' },
          }}
        />
        <Weather />
      </ThemeProvider>
    </div>
  )
}
export default App;