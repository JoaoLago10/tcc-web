import React from 'react';
import HeaderInstruçoes from '../layout/TelaInstruções/HeaderInstruçoes';
import MainSectionInstruçoes from '../layout/TelaInstruções/MainSectionInstruçoes';

const Tela2: React.FC = () => {
  return (
    <div className="pt-20">
      <HeaderInstruçoes />
      <MainSectionInstruçoes />
    </div>
  );
};

export default Tela2;