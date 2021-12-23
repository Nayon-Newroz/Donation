import Navigation from "./pages/Navigation";
// import './App.css';
import Container from "@mui/material/Container";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";
import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// axios.defaults.headers.common["Content-Type"] = "application/json";
function App() {
  return (
    <Container maxWidth="md">
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={Slide}
      >
        <Navigation />
      </SnackbarProvider>
    </Container>
  );
}

export default App;
