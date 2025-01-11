// Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TelaMapeamento from './screens/TelaMapeamento';
import TelaInstruçoes from './screens/TelaInstruçoes';
import TelaDados from './screens/TelaDados';
import TelaApresentaçao from './screens/TelaApresentaçao';

function AppRoutes()  {
  return (
    <Routes>
      <Route path="/" element={<TelaApresentaçao />} />
      <Route path="/telaMapeamento" element={<TelaMapeamento />} />
      <Route path="/telaInstrucoes" element={<TelaInstruçoes />} />
      <Route path="/telaDados" element={<TelaDados />} />
    </Routes>
  );
};

export default AppRoutes;