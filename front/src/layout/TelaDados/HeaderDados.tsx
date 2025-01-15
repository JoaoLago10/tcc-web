// src/layout/TelaDados/HeaderDados.tsx
import React from 'react';
import { BotaoInstrucoes, BotaoApresentaçao, BotaoMapeamento } from '../../components/Buttons';

const HeaderDados: React.FC = () => {
  return (
  <>
       <h1 className="text-center text-white mt-8 text-4xl">
         PÁGINA DE DADOS
       </h1>
       <div className="w-full bg-gray-400 h-12 mt-5 flex items-center justify-center">
         <div className="flex space-x-4">
           <BotaoApresentaçao/>
           < BotaoInstrucoes />
           <BotaoMapeamento />
           
         </div>
       </div>
     </>
  );
};

export default HeaderDados;