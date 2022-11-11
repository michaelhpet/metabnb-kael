import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import PlaceToStay from './routes/PlaceToStay';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'nft', element: <PlaceToStay /> },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: '#A02279',
    },
  },

  typography: {
    fontFamily: 'Red Rose',
  },
});

const root = document.getElementById('root');
const app = createRoot(root);
app.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
