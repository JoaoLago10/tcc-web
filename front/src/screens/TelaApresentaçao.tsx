import react from 'react';
import HeaderApresentaçao from '../layout/TelaApresentação/HeaderApresentaçao';
import MainSectionApresentaçao from '../layout/TelaApresentação/MainSectionApresentaçao';


const TelaApresentaçoes: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-600">
      <HeaderApresentaçao />
      <div className="flex flex-1 items-center w-full">
        <div className="ml-14">
          <MainSectionApresentaçao />
        </div>
      </div>
    </div>
  );
};
  
  export default TelaApresentaçoes;