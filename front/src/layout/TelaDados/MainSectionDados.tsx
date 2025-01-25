import React from 'react';

const MainSectionDados: React.FC = () => {
  return (
    <div className="bg-gray-400 text-justify rounded-lg w-[1300px] h-[550px] p-10 text-2xl overflow-auto fixed bottom-10 left-1/2 transform -translate-x-1/2 space-y-6">
      
      <h1 className="text-xl font-bold">Fontes de Dados Utilizadas no Projeto e Sua Relevância para o Estudo da Cintilação Ionosférica</h1>
  
  <p className="indent-10">
    Para realizar o mapeamento da ocorrência de cintilação ionosférica no Brasil, utilizamos um conjunto robusto de fontes de dados provenientes de ferramentas e redes científicas especializadas no monitoramento ionosférico. Essas fontes fornecem informações essenciais sobre os fenômenos que ocorrem na ionosfera, possibilitando análises preditivas precisas. A seguir, detalhamos cada fonte de dados e sua contribuição ao projeto.
  </p>
  
  <h2 className="text-lg font-bold">ISMR Query Tool</h2>
  <p className="indent-10">
    A ISMR Query Tool é uma ferramenta desenvolvida para facilitar o acesso a dados de monitoramento da ionosfera. Ela permite a obtenção de informações detalhadas sobre parâmetros ionosféricos, como:
  </p>
  <ul className="list-disc pl-14">
    <li>S4 e Sigma-φ: Indicadores que medem a intensidade da cintilação do sinal GNSS.</li>
    <li>TEC (Conteúdo Eletrônico Total): Quantidade de elétrons na ionosfera, que influencia a propagação dos sinais.</li>
    <li>Rotações de fase e amplitude do sinal GNSS: Dados que ajudam a identificar perturbações na ionosfera.</li>
  </ul>
  <p className="indent-10">
    Essa ferramenta é crucial para centralizar e organizar os dados necessários para entender e prever os efeitos da cintilação em diferentes regiões.
  </p>
  
  <h2 className="text-lg font-bold">Redes de Monitoramento</h2>
  
  <h3 className="text-md font-bold">INCT GNSS NavAer</h3>
  <p className="indent-10">
    A rede INCT GNSS NavAer (Navegação Aérea e GNSS) é uma iniciativa brasileira que visa monitorar e estudar o comportamento da ionosfera. Estações dessa rede fornecem dados de:
  </p>
  <ul className="list-disc pl-14">
    <li>TEC e S4: Indicadores fundamentais para detectar a presença de cintilação.</li>
    <li>Dados geoespaciais: Localização precisa das estações e informações regionais.</li>
  </ul>
  <p className="indent-10">
    A contribuição do GNSS NavAer é essencial para estudar a ionosfera em território brasileiro, especialmente em regiões onde a cintilação ocorre com mais intensidade, como nas proximidades da linha do equador magnético.
  </p>
  
  <h3 className="text-md font-bold">ICEA (Instituto de Controle do Espaço Aéreo)</h3>
  <p className="indent-10">
    O ICEA disponibiliza dados sobre os efeitos da cintilação ionosférica em aplicações aeronáuticas e de navegação. Ele fornece:
  </p>
  <ul className="list-disc pl-14">
    <li>Informações sobre interrupções de sinal GNSS.</li>
    <li>Análises de impacto em comunicações aeronáuticas.</li>
  </ul>
  <p className="indent-10">
    Esse banco de dados complementa os estudos ao oferecer uma visão prática dos efeitos da cintilação em sistemas de navegação.
  </p>
  
  <h3 className="text-md font-bold">LISN (Low-Latitude Ionospheric Sensor Network)</h3>
  <p className="indent-10">
    A rede LISN é composta por sensores localizados em regiões de baixa latitude, cobrindo boa parte da América Latina. Essa rede fornece:
  </p>
  <ul className="list-disc pl-14">
    <li>Dados detalhados de ionossondas: Informações sobre camadas ionosféricas.</li>
    <li>Monitoramento da densidade eletrônica: Crucial para prever áreas de maior instabilidade.</li>
  </ul>
  <p className="indent-10">
    A LISN é essencial para compreender a cintilação em áreas equatoriais, uma das mais afetadas por esse fenômeno.
  </p>
  
  <h2 className="text-lg font-bold">Contribuição dos Projetos CIGALA e CALIBRA</h2>
  
  <h3 className="text-md font-bold">Projeto CIGALA</h3>
  <p className="indent-10">
    O CIGALA (Concept for Ionospheric Scintillation Mitigation for Professional GNSS in Latin America) foi um projeto europeu em colaboração com instituições brasileiras, focado no estudo da cintilação ionosférica em regiões tropicais. Suas contribuições incluem:
  </p>
  <ul className="list-disc pl-14">
    <li>Desenvolvimento de ferramentas de mitigação: Para minimizar os impactos da cintilação em aplicações GNSS.</li>
    <li>Análises detalhadas da dinâmica ionosférica: Especialmente na América do Sul.</li>
  </ul>
  
  <h3 className="text-md font-bold">Projeto CALIBRA</h3>
  <p className="indent-10">
    Complementar ao CIGALA, o CALIBRA (Countering GNSS High Accuracy Applications Limitations due to Ionospheric Disturbances in Brazil) busca aumentar a precisão do GNSS em ambientes com alta incidência de cintilação. Suas contribuições são:
  </p>
  <ul className="list-disc pl-14">
    <li>Aprimoramento de algoritmos para correção de erros GNSS.</li>
    <li>Criação de bancos de dados de alta precisão para estudos ionosféricos.</li>
  </ul>
  
  <h2 className="text-lg font-bold">Importância das Fontes e Projetos para o Tema</h2>
  <p className="indent-10">
    A combinação dessas fontes e projetos fornece uma visão abrangente do fenômeno da cintilação ionosférica. Os dados obtidos são fundamentais para:
  </p>
  <ul className="list-disc pl-14">
    <li>Identificar padrões de ocorrência de cintilação.</li>
    <li>Entender os impactos desse fenômeno em sistemas de comunicação e navegação.</li>
    <li>Desenvolver ferramentas preditivas e de mitigação, como as utilizadas no nosso sistema de mapeamento.</li>
  </ul>
  <p className="indent-10">
    A integração desses dados em nosso projeto possibilita a criação de um sistema preditivo robusto, capaz de mapear as regiões mais propensas à cintilação ionosférica, contribuindo para avanços científicos e tecnológicos em diversas áreas, como telecomunicações, navegação aérea e segurança.
  </p>
<br></br>

<h1 className="text-xl font-bold">Referências Importantes: Otávio Carvalho e Jennifer Caroline da Silva Barraza</h1>
  
  <p className="indent-10">
    Para o desenvolvimento do nosso projeto de mapeamento da ocorrência de cintilação ionosférica no Brasil, tivemos como referências fundamentais os trabalhos de Otávio Carvalho e Jennifer Caroline da Silva Barraza, ambos com contribuições significativas no estudo da ionosfera, especialmente na região do Maranhão. Seus projetos trouxeram insights e abordagens que influenciaram diretamente a estruturação de nossas metodologias e no uso de bases de dados.
  </p>
  
  <h2 className="text-lg font-bold">Contribuições de Otávio Carvalho</h2>
  
  <h3 className="text-md font-bold">Formação Acadêmica</h3>
  <p className="indent-10">
    Otávio possui uma trajetória acadêmica sólida, com graduação em Engenharia Mecânica (2022) e Ciência e Tecnologia (2019), além de mestrado em Engenharia Aeroespacial (2021), todos pela Universidade Federal do Maranhão (UFMA).
  </p>
  
  <h3 className="text-md font-bold">Projeto de Pesquisa</h3>
  <p className="indent-10">
    "Predição da cintilação ionosférica de amplitude pela aplicação de métodos de aprendizagem de máquina". Nesse trabalho, Otávio utilizou técnicas avançadas de machine learning para prever a ocorrência de cintilação ionosférica com base em dados históricos e fatores regionais.
  </p>
  
  <h4 className="text-sm font-bold">Base de Dados Utilizada:</h4>
  <ul className="list-disc pl-14">
    <li>Redes de monitoramento GNSS: Para obter indicadores como S4 (índice de cintilação de amplitude) e TEC (conteúdo eletrônico total).</li>
    <li>Dados climáticos e solares: Incluindo informações sobre atividade solar, que influencia diretamente a formação da cintilação.</li>
  </ul>
  
  <h4 className="text-sm font-bold">Relevância para o Nosso Projeto:</h4>
  <ul className="list-disc pl-14">
    <li>A aplicação de métodos de aprendizado de máquina por Otávio forneceu um modelo eficiente para explorar algoritmos como Random Forest, LSTM e Gradient Boosting, utilizados no nosso sistema preditivo.</li>
    <li>O uso de múltiplas variáveis (ionosféricas, climáticas e solares) em seu trabalho nos inspirou a incluir diferentes fontes de dados para aumentar a precisão do mapeamento.</li>
  </ul>
  
  <h2 className="text-lg font-bold">Contribuições de Jennifer Caroline da Silva Barraza</h2>
  
  <h3 className="text-md font-bold">Formação Acadêmica</h3>
  <p className="indent-10">
    Jennifer é graduanda em Engenharia Aeroespacial pela UFMA, com Bacharelado em Ciência e Tecnologia (BICT) pela mesma instituição e Bacharelado em Administração pela UniCeuma. Além disso, atua como pesquisadora voluntária do programa PIBIC.
  </p>
  
  <h3 className="text-md font-bold">Projeto de Pesquisa</h3>
  <p className="indent-10">
    "Passado e Futuro: Identificação e Mapeamento da Ocorrência de Cintilação Ionosférica no Estado do Maranhão". Jennifer realizou uma análise detalhada sobre a distribuição espacial e temporal da cintilação ionosférica no Maranhão, utilizando ferramentas de georreferenciamento e análise histórica.
  </p>
  
  <h4 className="text-sm font-bold">Base de Dados Utilizada:</h4>
  <ul className="list-disc pl-14">
    <li>LISN (Low-Latitude Ionospheric Sensor Network): Para monitorar eventos ionosféricos em baixa latitude.</li>
    <li>Dados locais do Maranhão: Incluindo informações específicas de estações GNSS na região.</li>
    <li>Mapas de densidade eletrônica: Para identificar áreas críticas de ocorrência de cintilação.</li>
  </ul>
  
  <h4 className="text-sm font-bold">Relevância para o Nosso Projeto:</h4>
  <ul className="list-disc pl-14">
    <li>O foco de Jennifer em identificação e mapeamento ajudou a delinear nossa abordagem para criar mapas preditivos, integrando dados históricos e projeções futuras.</li>
    <li>Sua ênfase na utilização de redes como LISN e dados regionais reforçou a importância de bases específicas para caracterizar fenômenos locais.</li>
  </ul>
  
  <h2 className="text-lg font-bold">Impacto no Nosso Projeto</h2>
  <p className="indent-10">
    As contribuições de Otávio e Jennifer foram cruciais para a formulação e execução do nosso sistema de mapeamento. A partir de seus trabalhos:
  </p>
  <ul className="list-disc pl-14">
    <li>Incorporamos métodos de aprendizado de máquina avançados, ajustando-os para prever a cintilação em nível nacional.</li>
    <li>Adotamos a integração de dados regionais e globais, como redes GNSS, LISN e dados solares, garantindo maior abrangência e precisão.</li>
    <li>Exploramos a visualização de dados por meio de mapas interativos, baseando-nos nas análises geoespaciais feitas por Jennifer.</li>
  </ul>
  <p className="indent-10">
    Essas referências reforçam a importância de estudos regionais e específicos na compreensão da cintilação ionosférica, um fenômeno que afeta diretamente sistemas de navegação, telecomunicações e segurança em várias partes do Brasil.
  </p>
    </div>
  );
};

export default MainSectionDados;