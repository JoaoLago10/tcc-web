import React from 'react';
import HeaderPrincipal from '../layout/TelaPrincipal/HeaderPrincipal';

const TelaPrincipal: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <HeaderPrincipal />
      {/* Conteúdo adicional da Tela Principal */}
    </div>
  );
};

export default TelaPrincipal;