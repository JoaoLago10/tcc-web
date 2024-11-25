import React from 'react';
import HeaderPrincipal from '../layout/TelaPrincipal/HeaderPrincipal';
import MainSectionPrincipal from '../layout/TelaPrincipal/MainSectionPrincipal';

const TelaPrincipal: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <HeaderPrincipal />
      <div className="flex flex-1 items-center w-full">
        <div className="ml-14">
          <MainSectionPrincipal />
        </div>
      </div>
    </div>
  );
};

export default TelaPrincipal;