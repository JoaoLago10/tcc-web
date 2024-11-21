import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import TelaPrincipal from './screens/TelaPrincipal';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TelaPrincipal />} />
      <Route path="/tela2" element={<Tela2 />} />
      <Route path="/tela3" element={<Tela3 />} />
    </Routes>
  );
}

export default AppRoutes;