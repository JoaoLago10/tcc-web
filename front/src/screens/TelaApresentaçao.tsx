import react from 'react';
import HeaderApresentaçao from '../layout/TelaApresentação/HeaderApresentaçao';
import MainSectionApresentaçao from '../layout/TelaApresentação/MainSectionApresentaçao';


const TelaApresentaçoes: React.FC = () => {
    return (
      <div className="bg-blue-500">
        <HeaderApresentaçao/>
        <MainSectionApresentaçao/>
      </div>
    );
  };
  
  export default TelaApresentaçoes;