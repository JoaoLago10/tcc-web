// src/layout/TelaApresentação/MainSectionApresentaçao.tsx
import React from 'react';
import LogoUFMA from '../../assets/images/LogoUFMA.png'; 

const MainSectionApresentaçao: React.FC = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <img src={LogoUFMA} alt="Logo UFMA" className="w-44" />
      {/* Outros conteúdos podem ser adicionados aqui */}
    </div>
  );
};

export default MainSectionApresentaçao;