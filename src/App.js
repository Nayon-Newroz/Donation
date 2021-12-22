import Navigation from "./pages/Navigation";
// import './App.css';
import Container from "@mui/material/Container";
import { SnackbarProvider } from 'notistack';
import Slide from '@mui/material/Slide';

function App() {
  return (
    <Container maxWidth="md">
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionComponent={Slide}>

      <Navigation />
        </SnackbarProvider>
    </Container>
  );
}

export default App;
