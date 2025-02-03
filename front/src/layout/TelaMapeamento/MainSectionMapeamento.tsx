import React from 'react';
import { BotaoGerarMapa } from '../../components/Buttons';
import Cintilacao from '../../components/Cintilacao.png'; 

const MainSectionMapeamento: React.FC = () => {
  return (
    <>
      {/* Original Mapa */}
     
      {/* Mapa na Lateral Esquerda */}
      {/* Container principal para alinhar os elementos */}
      <div className="relative">
  
        {/* Div com texto e inputs, posicionada acima das imagens */}
        <div className="bg-gray-400 rounded-lg w-1/3 h-auto p-3 flex flex-col gap-4 items-center justify-center overflow-auto fixed left-1/2 top-48 transform -translate-x-1/2">
          <p className="text-center text-lg">
          </p>
          
          <input type="text" placeholder="Nome do mapa" className="w-full p-2 border rounded" />
          <input type="file" className="w-full p-2 border rounded" />
          <BotaoGerarMapa />
        </div>
  
        {/* Mapa na Lateral Esquerda */}
        <div className="bg-gray-400 rounded-lg w-1/4 h-1/2 flex items-center justify-center text-xl overflow-hidden fixed left-60 top-1/2 transform -translate-y-1/5">
          <img src={Cintilacao} alt="Cintilação" className="w-full h-full object-cover" />
        </div>
        
        {/* Mapa na Lateral Direita */}
        <div className="bg-gray-400 rounded-lg w-1/4 h-1/2 flex items-center justify-center text-xl overflow-hidden fixed right-60 top-1/2 transform -translate-y-1/5">
          <img src={Cintilacao} alt="Cintilação" className="w-full h-full object-cover" />
        </div>
  
      </div>
    </>
  );
};

export default MainSectionMapeamento;