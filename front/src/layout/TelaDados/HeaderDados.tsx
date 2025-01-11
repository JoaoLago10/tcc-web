import React from 'react';
import { BotaoInstrucoes,  BotaoApresentaçao, BotaoMapeamento } from '../../components/Buttons';

const Header3: React.FC = () => {
  return (
    <><h1 className="fixed top-0 w-full bg-gray-400 text-center py-5 shadow-md text-3xl">PÁGINA DE DADOS</h1>
    <div className="w-full bg-white h-12 mt-5 flex items-center justify-center">
      <div className="flex space-x-4">
        <BotaoInstrucoes />
        <BotaoApresentaçao/>
        <BotaoMapeamento/>
      </div>
    </div></>
  );
};

export default Header3;