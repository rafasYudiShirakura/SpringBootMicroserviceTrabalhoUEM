
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darkTheme';
import Navbar from './Page/Navbar/Navbar';
import Home from './Page/Home/Home';

function App() {
  return (
    <ThemeProvider  theme={darkTheme}>
    
      <Navbar/>
      <Home/>

    </ThemeProvider>
  );
}

export default App;
