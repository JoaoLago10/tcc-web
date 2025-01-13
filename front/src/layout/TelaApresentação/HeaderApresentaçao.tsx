import React from 'react';
import { BotaoInstrucoes,  BotaoDados, BotaoMapeamento } from '../../components/Buttons';

const HeaderApresentaçao: React.FC = () => {
  return (
     <>
      <h1 className="text-center text-black mt-8 text-4xl">
        APRESENTAÇÃO
      </h1>
      <div className="w-full bg-white h-12 mt-5 flex items-center justify-center">
        <div className="flex space-x-4">
           <BotaoMapeamento/>
           < BotaoInstrucoes />
           <BotaoDados />
           
         </div>
       </div>
     </>
   );
 };

export default HeaderApresentaçao;
