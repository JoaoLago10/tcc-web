import React from 'react';

const MainSectionInstruçoes: React.FC = () => {
  return (
    <>
        <div className="bg-gray-400 text-justify rounded-lg w-[1000px] h-[550px] p-10 text-2xl overflow-auto fixed bottom-10 left-1/3 transform -translate-x-1/2 space-y-6">
         INSTRUÇÕES

         <table className="w-full border border-black mt-4">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-black px-4 py-2">Header 1</th>
              <th className="border border-black px-4 py-2">Header 2</th>
              <th className="border border-black px-4 py-2">Header 3</th>
              <th className="border border-black px-4 py-2">Header 4</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200">
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
        <p>PASSO 1 
          PASSO 2 PASSO 3 PASSO 4 PASSO 5
        </p>
        </div>
    </>
  );
};

export default MainSectionInstruçoes;

