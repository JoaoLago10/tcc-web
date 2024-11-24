// Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TelaPrincipal from './screens/TelaPrincipal';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';

function AppRoutes()  {
  return (
    <Routes>
      <Route path="/" element={<TelaPrincipal />} />
      <Route path="/tela2" element={<Tela2 />} />
      <Route path="/tela3" element={<Tela3 />} />
    </Routes>
  );
};

export default AppRoutes;