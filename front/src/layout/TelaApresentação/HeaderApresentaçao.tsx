import React from 'react';
import { BotaoInstrucoes, Botao4, BotaoDados } from '../../components/Buttons';

const HeaderPrincipal: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-black mt-8 text-4xl">
       APRESENTAÇÃO DO PROJETO 
      </h1>
      <div className="w-full bg-white h-12 mt-5 flex items-center justify-center">
        <div className="flex space-x-4">
          < BotaoInstrucoes />
          <BotaoDados />
          <Botao4 />
        </div>
      </div>
    </>
  );
};
