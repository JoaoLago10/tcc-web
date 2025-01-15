import React from 'react';
import { BotaoInstrucoes, BotaoDados, BotaoApresentaçao } from '../../components/Buttons';

const HeaderMapeamento: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-white mt-8 text-4xl">
        MAPEAMENTO 
      </h1>
      <div className="w-full  bg-gray-400 h-12 mt-5 flex items-center justify-center">
        <div className="flex space-x-4">
          <BotaoApresentaçao/>
          < BotaoInstrucoes />
          <BotaoDados />
          
        </div>
      </div>
    </>
  );
};

export default HeaderMapeamento;