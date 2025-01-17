import React from 'react';
import {BotaoApresentaçao, BotaoDados, BotaoMapeamento } from '../../components/Buttons';
import LogoUFMA from '../../components/LogoUFMA.png';

const HeaderInstruçoes: React.FC = () => {
  return (
    <header className="bg-gray-800 fixed w-full top-0 left-0 flex flex-col">
      
      {/* Container para Logo e Título com Padding */}
      <div className="w-full p-4 flex items-center">
        <img src={LogoUFMA} alt="UFMA Logo" className="w-20 h-20" />
        <h1 className="text-white justify-center text-4xl ml-4">INSTRUÇÕES</h1>
      </div>
      
      {/* Container para os Botões ocupando toda a largura */}
      <div className="w-full bg-gray-400 h-12 flex items-center justify-center">
        <div className="flex space-x-4">
        <BotaoMapeamento/>
        <BotaoApresentaçao />
        <BotaoDados />
        </div>
      </div>
    </header>
  );
 };

export default HeaderInstruçoes;
