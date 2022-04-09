import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Main from './pages/Main';

import './App.css';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'KumbhSans',
    },
  },
});

const App = () => {
  console.log('App');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
