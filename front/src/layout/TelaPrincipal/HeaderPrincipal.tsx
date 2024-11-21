import React from 'react';
import { Botao2, Botao3, Botao4 } from '../../components/Buttons';

const HeaderPrincipal: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-black mt-2">
        MAPEAMENTO E PREVISÃO DE CINTILAÇÃO IONOSFÉRICA
      </h1>
      <div className="w-full bg-white h-12 mt-4 flex items-center justify-center">
        <div className="flex space-x-4">
          <Botao2 />
          <Botao3 />
          <Botao4 />
        </div>
      </div>
    </>
  );
};

export default HeaderPrincipal;