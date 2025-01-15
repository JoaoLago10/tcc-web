import React from 'react';
import {BotaoApresentaçao, BotaoDados, BotaoMapeamento } from '../../components/Buttons';

const HeaderInstruçoes: React.FC = () => {
  return (
     <> 
       <h1 className="text-center text-white mt-8 text-4xl">
       INSTRUÇÕES
      </h1>
      <div className="w-full  bg-gray-400 h-12 mt-5 flex items-center justify-center">
        <div className="flex space-x-4">
           <BotaoMapeamento/>
           < BotaoApresentaçao />
           <BotaoDados />
           
         </div>
       </div>
     </>
   );
 };

export default HeaderInstruçoes;