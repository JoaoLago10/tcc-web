import React from 'react';
import HeaderMapeamento from '../layout/TelaMapeamento/HeaderMapeamento';
import MainSectionMapeamento from '../layout/TelaMapeamento/MainSectionMapeamento';

const TelaMapeamento: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <HeaderMapeamento />
      <div className="flex flex-1 items-center w-full">
        <div className="ml-14">
          <MainSectionMapeamento />
        </div>
      </div>
    </div>
  );
};

export default TelaMapeamento;