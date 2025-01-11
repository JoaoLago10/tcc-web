import { useNavigate } from 'react-router-dom';

export function BotaoInstrucoes() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/telaInstrucoes');
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
    navigate('/telaDados');
  };

  return (
    <button onClick={handleClick} className="bg-gray-700 text-white py-2 px-4 rounded-md">
      DADOS
    </button>
  );
}

export function BotaoMapeamento() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/telaMapeamento');
  };

  return (
    <button onClick={handleClick} className="bg-gray-700 text-white py-2 px-4 rounded-md">
    MAPEAMENTO
    </button>
  );
}

export function BotaoApresentaçao() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button onClick={handleClick} className="bg-gray-700 text-white py-2 px-4 rounded-md">
     APRESENTAÇAO
    </button>
  );
}