import { useNavigate } from 'react-router-dom';

export function BotaoInstrucoes() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tela2');
  };

  return (
    <button onClick={handleClick} className="bg-gray-700 text-white py-2 px-4 rounded-md">
      INSTRUÇÕES
    </button>
  );
}

export function BotaoDados() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tela3');
  };

  return (
    <button onClick={handleClick} className="bg-gray-700 text-white py-2 px-4 rounded-md">
      DADOS
    </button>
  );
}

export function Botao4() {
  return (
    <button className="bg-gray-700 text-white py-2 px-4 rounded-md">OUTROS</button>
  );
}