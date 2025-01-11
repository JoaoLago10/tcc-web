import React from 'react';
import {  Botao4, BotaoDados } from '../../components/Buttons';

const Header2: React.FC = () => {
  return (
    <><h1 className="fixed top-0 w-full bg-gray-400 text-center py-5 shadow-md text-3xl">
      PAGINA DE INSTRUÇÕES
    </h1><div className="w-full bg-white h-12 mt-5 flex items-center justify-center">
        <div className="flex space-x-4">
          <BotaoDados />
          <Botao4 />
        </div>
      </div></>
  );
};

export default Header2;