import React from 'react';
import AppRoutes from './Routes';
import { BrowserRouter  } from 'react-router-dom';

const App: React.FC = () => {
  return (
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>  
 
  );
};

export default App;