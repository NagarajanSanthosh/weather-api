import React from "react";
import Weather from "./components/Weather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
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
        <Weather />
      </ThemeProvider>
    </div>
  )
}
export default App;