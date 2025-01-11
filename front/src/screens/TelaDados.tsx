import React from 'react';
import HeaderDados from '../layout/TelaDados/HeaderDados';  
import MainSectionDados from '../layout/TelaDados/MainSectionDados';

const TelaDados: React.FC = () => {
  return (
    <div className="pt-20">
      <HeaderDados />
      <MainSectionDados />
    </div>
  );
};

export default TelaDados;