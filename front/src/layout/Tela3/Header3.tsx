import React from 'react';
import { Botao2, Botao3, Botao4 } from '../../components/Buttons';

const Header3: React.FC = () => {
  return (
    <><h1 className="fixed top-0 w-full bg-gray-400 text-center py-5 shadow-md text-3xl">PÁGINA DE DADOS</h1><div className="w-full bg-white h-12 mt-5 flex items-center justify-center">
      <div className="flex space-x-4">
        <Botao2 />
        <Botao3 />
        <Botao4 />
      </div>
    </div></>
  );
};

export default Header3;