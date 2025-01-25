import React from 'react';
import Cintilacao from '../../components/Cintilacao.png'; 

const MainSectionMapeamento: React.FC = () => {
  return (
    <>
      {/* Original Mapa */}
      <div className="bg-gray-400 rounded-lg w-1/4 h-1/2 flex items-center justify-center text-xl overflow-hidden fixed right-20 top-1/2 transform -translate-y-1/2">
        <img src={Cintilacao} alt="Cintilação" className="w-full h-full object-cover" />
      </div>
      
      {/* Original Content */}
      <div className="bg-gray-400 rounded-lg w-72 h- flex items-center justify-center text-xl overflow-auto fixed left-10 top-1/2 transform -translate-y-1/2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora asperiores fugiat voluptates iure harum tempore minima ipsa exercitationem, modi eligendi
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore consectetur unde blanditiis, quia quisquam facere. Id dicta reiciendis explicabo nemo commodi! Expedita harum minus odit facere suscipit quae, fugit doloremque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse, minus rerum id voluptates sed in laudantium nemo at iusto culpa animi earum magni labore asperiores. Delectus veniam unde voluptate! fugit animi at alias accusantium nam iusto a soluta perspiciatis!
      </div>
   
      
    
    </>
  );
};

export default MainSectionMapeamento;