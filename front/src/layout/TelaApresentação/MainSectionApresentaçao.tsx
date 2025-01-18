import React from 'react';

const MainSectionApresentaçao: React.FC = () => {
  return (
    <div className="bg-gray-400 text-justify rounded-lg w-[1300px] h-[550px] p-10 text-2xl overflow-auto fixed bottom-10 left-1/2 transform -translate-x-1/2 space-y-6">
  
      <p className="indent-20">
        A cintilação ionosférica é um fenômeno natural caracterizado por variações rápidas na intensidade e na fase de sinais eletromagnéticos que atravessam a ionosfera, a camada superior da atmosfera terrestre. Essas variações são causadas por irregularidades na densidade de elétrons na ionosfera, que ocorrem devido a processos geofísicos, como a atividade solar e fenômenos climáticos espaciais. O impacto desse fenômeno é significativo, especialmente em sistemas que dependem de sinais de rádio, como comunicações por satélite, navegação global (GPS) e redes de telecomunicação. A cintilação pode reduzir a precisão dos sinais, gerar perda de dados e comprometer a operação de serviços críticos, como transporte aéreo, operações militares e monitoramento ambiental.
      </p>
      <p className="indent-20">
        Dada a relevância desse tema, nosso projeto propõe o desenvolvimento de um sistema web para o mapeamento e previsão da ocorrência de cintilação ionosférica no Brasil. Esse sistema combina técnicas avançadas de aprendizado de máquina para analisar dados históricos e realizar predições precisas sobre a ocorrência do fenômeno.
      </p>
      <p className="indent-20">
        Os principais algoritmos utilizados são:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Random Forest:</strong> Um modelo baseado em árvores de decisão que opera por meio de ensembles, combinando múltiplas árvores para aumentar a precisão e reduzir o risco de overfitting. Ele é especialmente útil para identificar padrões em grandes volumes de dados atmosféricos.
        </li>
        <li>
          <strong>LSTM (Long Short-Term Memory):</strong> Uma variação das redes neurais recorrentes (RNNs), projetada para capturar dependências de longo prazo em séries temporais. Esse algoritmo é essencial para modelar fenômenos com características dinâmicas ao longo do tempo, como a cintilação ionosférica.
        </li>
        <li>
          <strong>Gradient Boosting:</strong> Um método iterativo de aprendizado supervisionado que constrói modelos preditivos otimizados ao combinar uma sequência de modelos simples. Sua capacidade de refinar predições torna-o ideal para lidar com dados complexos e desbalanceados.
        </li>
      </ul>
      <p className="indent-20">
        A arquitetura do sistema foi desenvolvida para integrar dados geoespaciais, históricos e atmosféricos, utilizando uma interface intuitiva que facilita o acesso às informações geradas. O objetivo é não apenas fornecer um mapeamento detalhado da ocorrência de cintilação ionosférica em todo o Brasil, mas também prever com maior precisão onde e quando o fenômeno pode ocorrer. Essa previsão é crucial para que operadores e usuários de sistemas dependentes de sinais de rádio possam tomar medidas preventivas e mitigar os impactos do fenômeno.
      </p>
      <p className="indent-20">
        O projeto foi realizado pelos alunos Lucas Matos, João Guilherme e Antônio Lucas, sob a orientação do Prof. Dr. Alex Oliveira Barradas Filho, e reflete um esforço colaborativo para aplicar tecnologias modernas na solução de problemas científicos e tecnológicos relevantes. Além de contribuir para o avanço da pesquisa na área de geociências, o sistema desenvolvido busca ser uma ferramenta prática para pesquisadores, operadores de sistemas de navegação e comunicação e formuladores de políticas públicas que necessitam de dados confiáveis sobre a ionosfera.
      </p>
      <p className="indent-20">
        Com este trabalho, esperamos não apenas ampliar o conhecimento sobre a cintilação ionosférica, mas também fortalecer a infraestrutura tecnológica para lidar com seus efeitos, promovendo maior segurança e eficiência em aplicações que dependem de sinais de rádio.
      </p>
    </div>
  );
};

export default MainSectionApresentaçao;