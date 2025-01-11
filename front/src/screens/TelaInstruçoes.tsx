import React from 'react';
import HeaderInstruçoes from '../layout/TelaInstruções/HeaderInstruçoes';
import MainSectionInstruçoes from '../layout/TelaInstruções/MainSectionInstruçoes';

const TelaInstruçoes: React.FC = () => {
  return (
    <div className="pt-Instruçoes0">
      <HeaderInstruçoes />
      <MainSectionInstruçoes />
    </div>
  );
};

export default TelaInstruçoes;