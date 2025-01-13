import React from 'react';
import HeaderInstruçoes from '../layout/TelaInstruções/HeaderInstruçoes';
import MainSectionInstruçoes from '../layout/TelaInstruções/MainSectionInstruçoes';

const TelaInstruçoes: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <HeaderInstruçoes />
      <div className="flex flex-1 items-center w-full">
        <div className="ml-14">
          <MainSectionInstruçoes />
        </div>
      </div>
    </div>
  );
};

export default TelaInstruçoes;