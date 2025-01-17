import React from 'react';
import HeaderDados from '../layout/TelaDados/HeaderDados';  
import MainSectionDados from '../layout/TelaDados/MainSectionDados';

const TelaDados: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <HeaderDados />
      <div>
        <div className="ml-14">
          <MainSectionDados />
        </div>
      </div>
    </div>
  );
};

export default TelaDados;