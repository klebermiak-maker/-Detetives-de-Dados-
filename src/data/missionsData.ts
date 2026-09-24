import { Mission } from '../types';

export const MISSIONS_DATA: Mission[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'O Bilhete do Guardanapo Perdido',
    phase: 'fase1',
    phaseTitle: 'Fase 1: Primeiros Passos do Detetive',
    challengeType: 'classify',
    targetFormat: 'structure',
    scenario: 'O Dr. Zé anotou correndo num papel amassado: "O robô-cachorro Rex tem 4 anos e pesa 12kg e adora brincar no dia 24/09/2026 e é muito dócil sim".',
    objective: 'Identificar a necessidade de organizar dados soltos em uma ficha estruturada.',
    question: 'Por que o computador prefere receber os dados em uma tabela com colunas em vez desse texto solto?',
    problemData: {
      raw: 'Rex tem 4 anos e pesa 12kg dócil 24/09/2026...'
    },
    options: [
      {
        id: 'opt1',
        text: 'Porque em colunas rotuladas o computador acha a idade ou peso em milissegundos sem precisar ler o texto todo.',
        isCorrect: true,
        explanation: 'Exato! Estruturar significa colocar cada dado em sua caixinha específica com nome e tipo.'
      },
      {
        id: 'opt2',
        text: 'Porque computadores só conseguem ler se o papel estiver desenhado em formato de estrela.',
        isCorrect: false,
        explanation: 'Não, o formato não depende de desenhos, e sim da organização em campos lógicos.'
      },
      {
        id: 'opt3',
        text: 'Porque o texto no papel não tem cor.',
        isCorrect: false,
        explanation: 'A cor não importa para o computador; o que importa é saber onde começa e termina cada dado.'
      }
    ],
    didacticTip: 'Dados não-estruturados são como um quarto bagunçado: você gasta muito tempo procurando uma meia. Uma tabela é uma gaveta com divisórias etiquetadas!',
    bnccGoal: 'EF03CO05: Compreender a necessidade de estruturação de dados para processamento eficiente.'
  },
  {
    id: 2,
    numberStr: '02',
    title: 'A Caixinha do Nome (Formato TEXTO)',
    phase: 'fase1',
    phaseTitle: 'Fase 1: Primeiros Passos do Detetive',
    challengeType: 'classify',
    targetFormat: 'text',
    scenario: 'Você foi encarregado de cadastrar a nova mascote da turma do 3º ano C no computador: "Estrelinha Brilhante".',
    objective: 'Reconhecer o formato TEXTO e suas características.',
    question: 'Qual o formato que o computador utiliza para guardar palavras, letras e nomes próprios?',
    options: [
      {
        id: 'opt1',
        text: 'Formato TEXTO (sequência de letras e palavras que formam frases).',
        isCorrect: true,
        explanation: 'Muito bem! No computador chamamos também de "String" ou Texto puro.'
      },
      {
        id: 'opt2',
        text: 'Formato NÚMERO (usado para fazer contas de matemática).',
        isCorrect: false,
        explanation: 'Não podemos fazer conta de somar com as letrinhas do nome "Estrelinha"!'
      },
      {
        id: 'opt3',
        text: 'Formato DATA (usado para calendários).',
        isCorrect: false,
        explanation: 'Nome não é uma data de calendário.'
      }
    ],
    didacticTip: 'O formato Texto guarda qualquer sequência de caracteres: nomes de pessoas, cidades, cores e histórias.',
    bnccGoal: 'EF03CO05: Diferenciar dados textuais de dados quantitativos ou temporais.'
  },
  {
    id: 3,
    numberStr: '03',
    title: 'A Balança do Zoológico (Formato NÚMERO)',
    phase: 'fase1',
    phaseTitle: 'Fase 1: Primeiros Passos do Detetive',
    challengeType: 'classify',
    targetFormat: 'number',
    scenario: 'O filhote de panda espacial subiu na balança e marcou 15. O tratador escreveu no campo de peso: "quinze quilos".',
    objective: 'Compreender por que dados quantitativos devem ser armazenados como NÚMERO puro.',
    question: 'Por que o computador deu uma mensagem de aviso e não conseguiu calcular a média de peso da sala?',
    options: [
      {
        id: 'opt1',
        text: 'Porque "quinze quilos" foi digitado como TEXTO. O computador precisa de um NÚMERO puro (15) para conseguir calcular!',
        isCorrect: true,
        explanation: 'Sensacional! A unidade (kg) deve ficar no título da coluna, e no campo colocamos apenas o número 15.'
      },
      {
        id: 'opt2',
        text: 'Porque pandas espaciais não podem ser pesados às quintas-feiras.',
        isCorrect: false,
        explanation: 'Não há restrição de dia para pesar animais!'
      },
      {
        id: 'opt3',
        text: 'Porque 15 é um número muito alto para o computador.',
        isCorrect: false,
        explanation: 'Computadores lidam facilmente com números de bilhões! O problema foi a palavra misturada.'
      }
    ],
    didacticTip: 'Lembre-se: em uma coluna de NÚMERO, coloque apenas os dígitos (0, 1, 2, 3...) para o computador conseguir somar e ordenar!',
    bnccGoal: 'EF03CO05: Identificar a representação numérica adequada para permitir operações matemáticas.'
  },
  {
    id: 4,
    numberStr: '04',
    title: 'A Máquina do Tempo (Formato DATA)',
    phase: 'fase1',
    phaseTitle: 'Fase 1: Primeiros Passos do Detetive',
    challengeType: 'classify',
    targetFormat: 'date',
    scenario: 'A nossa oficina acontece hoje: 24/09/2026. A professora precisa agendar o próximo laboratório no calendário.',
    objective: 'Reconhecer o formato DATA e sua utilidade cronológica.',
    question: 'Por que o computador prefere a data estruturada (Dia/Mês/Ano) em vez de frases como "daqui a alguns dias"?',
    options: [
      {
        id: 'opt1',
        text: 'Porque com a data precisa (24/09/2026) o computador sabe a ordem dos dias, calcula aniversários e avisa com alarme!',
        isCorrect: true,
        explanation: 'Isso mesmo! O formato de data permite calcular quantos dias faltam para o recreio ou férias!'
      },
      {
        id: 'opt2',
        text: 'Porque "daqui a alguns dias" é uma palavra em inglês.',
        isCorrect: false,
        explanation: 'É português, mas é impreciso no tempo.'
      },
      {
        id: 'opt3',
        text: 'Porque o computador só funciona em anos pares.',
        isCorrect: false,
        explanation: 'O computador funciona em qualquer ano!'
      }
    ],
    didacticTip: 'O formato DATA guarda o dia, o mês e o ano, permitindo organizar a linha do tempo certinho.',
    bnccGoal: 'EF03CO05: Compreender o formato temporal e sua aplicação em cronogramas.'
  },
  {
    id: 5,
    numberStr: '05',
    title: 'O Interruptor Liga/Desliga (Formato BOOLEANO)',
    phase: 'fase1',
    phaseTitle: 'Fase 1: Primeiros Passos do Detetive',
    challengeType: 'classify',
    targetFormat: 'boolean',
    scenario: 'Na ficha de inscrição do 3º ano C para o passeio, há a pergunta: "Trouxe autorização assinada pelos responsáveis?".',
    objective: 'Compreender o formato lógico binário (Sim ou Não / Verdadeiro ou Falso).',
    question: 'Qual o formato ideal para perguntas que só aceitam duas opções: SIM ou NÃO?',
    options: [
      {
        id: 'opt1',
        text: 'SIM / NÃO (Lógico ou Booleano), que funciona exatamente como uma chave de luz: acesa ou apagada!',
        isCorrect: true,
        explanation: 'Perfeito! É o famoso 1 ou 0 do computador, chamado Booleano em homenagem ao matemático George Boole.'
      },
      {
        id: 'opt2',
        text: 'Formato Número Decimal com vírgula.',
        isCorrect: false,
        explanation: 'Não precisamos de números com vírgula para responder se trouxe a autorização!'
      },
      {
        id: 'opt3',
        text: 'Formato de Texto Longo com 10 parágrafos.',
        isCorrect: false,
        explanation: 'Um texto longo complicaria uma pergunta simples de sim ou não.'
      }
    ],
    didacticTip: 'Perguntas com só duas respostas possíveis (Sim/Não, Aberto/Fechado, Verdadeiro/Falso) usam o tipo Booleano!',
    bnccGoal: 'EF03CO05: Reconhecer a lógica binária aplicada a dados de estado.'
  },
  {
    id: 6,
    numberStr: '06',
    title: 'O Alerta Vermelho do Robô (Bug no Campo Numérico)',
    phase: 'fase2',
    phaseTitle: 'Fase 2: Validação & Detecção de Erros',
    challengeType: 'fix_error',
    targetFormat: 'number',
    scenario: 'O estagiário do laboratório preencheu o campo da idade de um robô-gatinho assim: "sete". O robô começou a apitar um erro!',
    objective: 'Detectar e corrigir erros de validação de tipo de dado.',
    question: 'Como o Detetive de Dados deve corrigir este campo para resolver o problema?',
    problemData: {
      raw: 'Campo Idade: "sete"',
      badField: 'Idade',
      badValue: 'sete',
      goodValue: '7'
    },
    options: [
      {
        id: 'opt1',
        text: 'Substituir a palavra escrita "sete" pelo algarismo numérico 7.',
        isCorrect: true,
        explanation: 'Correto! 7 é um número que o computador consegue comparar para saber quem é mais velho.'
      },
      {
        id: 'opt2',
        text: 'Pintar a palavra "sete" de cor de rosa.',
        isCorrect: false,
        explanation: 'Mudar a cor não transforma texto em número.'
      },
      {
        id: 'opt3',
        text: 'Escrever "sete anos e 3 meses com dente mole".',
        isCorrect: false,
        explanation: 'Isso tornaria o texto ainda mais confuso para o cálculo.'
      }
    ],
    didacticTip: 'Validação de dados é como o fiscal na porta do cinema: só deixa entrar o tipo de bilhete certo!',
    bnccGoal: 'EF03CO05: Identificar incongruências entre o dado armazenado e o tipo esperado.'
  },
  {
    id: 7,
    numberStr: '07',
    title: 'O Mistério da Data Sem Ano',
    phase: 'fase2',
    phaseTitle: 'Fase 2: Validação & Detecção de Erros',
    challengeType: 'fix_error',
    targetFormat: 'date',
    scenario: 'Um aluno do 3º ano C preencheu na ficha de biblioteca: "Devolver o livro no dia 15 de Outubro". O computador perguntou: "De qual ano?".',
    objective: 'Perceber a importância da completude do formato de data.',
    question: 'Qual formato evita a confusão e garante que o computador saiba a data exata da devolução?',
    options: [
      {
        id: 'opt1',
        text: 'O formato completo com dia, mês e ano: "15/10/2026".',
        isCorrect: true,
        explanation: 'Excelente! Sem o ano, o computador não sabe se é 2026, 2027 ou até 2010!'
      },
      {
        id: 'opt2',
        text: 'Escrever apenas "na hora do almoço".',
        isCorrect: false,
        explanation: 'Não resolve a dúvida do dia e ano.'
      },
      {
        id: 'opt3',
        text: 'Deixar o campo em branco.',
        isCorrect: false,
        explanation: 'Se deixar em branco, ninguém sabe quando devolver o livro!'
      }
    ],
    didacticTip: 'Datas completas garantem que sistemas escolares nunca cobrem tarefas atrasadas por engano!',
    bnccGoal: 'EF03CO05: Reconhecer a estrutura canônica de datas em sistemas de informação.'
  },
  {
    id: 8,
    numberStr: '08',
    title: 'A Resposta Misteriosa ("Mais ou Menos?")',
    phase: 'fase2',
    phaseTitle: 'Fase 2: Validação & Detecção de Erros',
    challengeType: 'fix_error',
    targetFormat: 'boolean',
    scenario: 'No campo "Animal é amigável? (Sim/Não)", uma pessoa digitou: "Mais ou menos, só quando está com sono". O sistema travou!',
    objective: 'Compreender a restrição dos campos booleanos em formulários digitais.',
    question: 'Por que o computador travou e como resolver?',
    options: [
      {
        id: 'opt1',
        text: 'O campo é do tipo Sim/Não. O usuário deve escolher obrigatoriamente [Sim] ou [Não], e detalhes vão no campo de observações.',
        isCorrect: true,
        explanation: 'Muito bem! Para a segurança dos tratadores, o sistema precisa de uma decisão clara: Sim ou Não.'
      },
      {
        id: 'opt2',
        text: 'O computador travou porque não gosta de animais que dormem.',
        isCorrect: false,
        explanation: 'O computador não tem sentimentos; ele segue regras de tipos de dados.'
      },
      {
        id: 'opt3',
        text: 'O computador travou porque faltou colocar um ponto final.',
        isCorrect: false,
        explanation: 'O problema é que o campo só aceita o formato binário verdadeiro ou falso.'
      }
    ],
    didacticTip: 'Em computação, se um campo é Booleano, só há duas opções. Se quiser contar história, usamos um campo Texto!',
    bnccGoal: 'EF03CO05: Compreender regras de consistência em campos de formulários.'
  },
  {
    id: 9,
    numberStr: '09',
    title: 'A Ficha Cadastral da Mascote (Montagem 4 em 1)',
    phase: 'fase2',
    phaseTitle: 'Fase 2: Validação & Detecção de Erros',
    challengeType: 'classify',
    targetFormat: 'structure',
    scenario: 'Temos 4 informações sobre a tartaruga Titanela: "Titanela" | 85 anos | 20/11/2025 | Dócil: Sim.',
    objective: 'Associar simultaneamente os 4 tipos fundamentais aos seus respectivos campos.',
    question: 'Qual a ordem correta dos tipos de dados para esses 4 valores?',
    options: [
      {
        id: 'opt1',
        text: '1º Texto ("Titanela") · 2º Número (85) · 3º Data (20/11/2025) · 4º Sim/Não (Sim).',
        isCorrect: true,
        explanation: 'Perfeito! Cada informação encontrou sua caixinha perfeita com seu formato exato.'
      },
      {
        id: 'opt2',
        text: '1º Número · 2º Data · 3º Texto · 4º Imagem.',
        isCorrect: false,
        explanation: '"Titanela" não é número, é texto!'
      },
      {
        id: 'opt3',
        text: 'Todos os 4 valores devem ser guardados como Data.',
        isCorrect: false,
        explanation: 'Nome e Sim não são datas de calendário.'
      }
    ],
    didacticTip: 'Uma ficha de cadastro completa combina diferentes tipos de dados organizados em harmonia.',
    bnccGoal: 'EF03CO05: Construir registros compostos por múltiplos tipos de dados estruturados.'
  },
  {
    id: 10,
    numberStr: '10',
    title: 'O Mistério do Crachá & Avatar (Formato IMAGEM)',
    phase: 'fase2',
    phaseTitle: 'Fase 2: Validação & Detecção de Erros',
    challengeType: 'classify',
    targetFormat: 'image',
    scenario: 'Para o crachá do 3º ano C, queremos incluir a fotinho ou desenho de cada mascote.',
    objective: 'Reconhecer dados visuais e de mídia (imagens) em cadastros.',
    question: 'Como o computador armazena o rostinho de uma mascote no cadastro?',
    options: [
      {
        id: 'opt1',
        text: 'Em formato de IMAGEM (arquivo de foto ou desenho composto por pontinhos coloridos chamados pixels).',
        isCorrect: true,
        explanation: 'Isso! Fotos e avatares são dados de imagem (.png, .jpg ou emojis).'
      },
      {
        id: 'opt2',
        text: 'Escrevendo uma carta para a impressora.',
        isCorrect: false,
        explanation: 'A imagem é armazenada digitalmente em arquivo gráfico.'
      },
      {
        id: 'opt3',
        text: 'Em formato de data de aniversário.',
        isCorrect: false,
        explanation: 'Data guarda tempo, não imagem visual.'
      }
    ],
    didacticTip: 'Cada foto no celular ou tablet é uma matriz de milhares de pixels coloridos guardados pelo computador!',
    bnccGoal: 'EF03CO05: Reconhecer a imagem como um tipo de dado digital não-numérico.'
  },
  {
    id: 11,
    numberStr: '11',
    title: 'Quem é o Mais Velho da Sala? (Ordenação Numérica)',
    phase: 'fase3',
    phaseTitle: 'Fase 3: Tabelas, Ordenação & Filtros',
    challengeType: 'interactive_action',
    targetFormat: 'number',
    scenario: 'Na tabela do 3º ano C, temos a coluna "Idade (anos)". A professora clica na setinha de ordenar do menor para o maior.',
    objective: 'Entender como o formato NÚMERO viabiliza ordenação automática por grandezas.',
    question: 'Por que o computador consegue ordenar idades de 8 e 9 anos instantaneamente?',
    options: [
      {
        id: 'opt1',
        text: 'Porque como estão em formato NÚMERO, o computador compara os valores matemáticos (8 é menor que 9).',
        isCorrect: true,
        explanation: 'Exatamente! Se estivessem como texto "oito", o computador tentaria ordenar por ordem alfabética da letra O!'
      },
      {
        id: 'opt2',
        text: 'Porque o computador tem olhos que olham para a foto do aluno.',
        isCorrect: false,
        explanation: 'O computador compara os valores matemáticos da coluna, não fotos.'
      },
      {
        id: 'opt3',
        text: 'Porque foi sorteado na roleta.',
        isCorrect: false,
        explanation: 'Não é sorteio; é ordenação matemática rigorosa.'
      }
    ],
    didacticTip: 'Se você quiser ordenar do mais leve para o mais pesado ou do mais novo para o mais velho, use NÚMEROS!',
    bnccGoal: 'EF03CO05: Compreender que formatos determinam as operações possíveis sobre os dados (ordenação).'
  },
  {
    id: 12,
    numberStr: '12',
    title: 'A Operação do Filtro Secreto (Filtragem Rápida)',
    phase: 'fase3',
    phaseTitle: 'Fase 3: Tabelas, Ordenação & Filtros',
    challengeType: 'interactive_action',
    targetFormat: 'boolean',
    scenario: 'Em uma tabela com 100 animais do zoológico, a tratadora precisa achar APENAS os animais que são "Dóceis: Sim".',
    objective: 'Compreender o poder de filtragem em dados estruturados.',
    question: 'Como a coluna Booleana (Sim/Não) ajuda a tratadora a não perder tempo?',
    options: [
      {
        id: 'opt1',
        text: 'O computador esconde em um clique todos os que são "Não" e mostra na tela apenas os que são "Sim".',
        isCorrect: true,
        explanation: 'Sensacional! Isso se chama FILTRO. Em um banco de dados com 1 milhão de linhas, o filtro acha tudo em 1 segundo!'
      },
      {
        id: 'opt2',
        text: 'Ela precisa imprimir tudo e apagar os outros com borracha.',
        isCorrect: false,
        explanation: 'Não precisa apagar no papel; o computador filtra na tela!'
      },
      {
        id: 'opt3',
        text: 'O computador não ajuda em nada nessa tarefa.',
        isCorrect: false,
        explanation: 'A grande utilidade do computador é justamente essa agilidade de busca!'
      }
    ],
    didacticTip: 'Filtros são como peneiras digitais: só deixam passar o que você pediu!',
    bnccGoal: 'EF03CO05: Experimentar a busca e recuperação eficiente de informações a partir de dados estruturados.'
  },
  {
    id: 13,
    numberStr: '13',
    title: 'Criando a Nova Coluna da Turma 3º C',
    phase: 'fase3',
    phaseTitle: 'Fase 3: Tabelas, Ordenação & Filtros',
    challengeType: 'logic_puzzle',
    targetFormat: 'number',
    scenario: 'A professora quer adicionar uma nova coluna na tabela da chamada para marcar: "Quantidade de livros lidos no mês".',
    objective: 'Decidir a tipagem adequada para novas colunas em um banco de dados.',
    question: 'Qual formato a turma deve escolher para essa coluna nova?',
    options: [
      {
        id: 'opt1',
        text: 'Formato NÚMERO, pois no final do ano a professora poderá SOMAR todos os livros lidos pela turma!',
        isCorrect: true,
        explanation: 'Brilhante! Se escolher número, a planilha pode somar automaticamente e mostrar o total de livros lidos!'
      },
      {
        id: 'opt2',
        text: 'Formato de Data do calendário.',
        isCorrect: false,
        explanation: 'Quantidade de livros é uma contagem, não um dia no calendário.'
      },
      {
        id: 'opt3',
        text: 'Formato Sim/Não.',
        isCorrect: false,
        explanation: 'Sim/Não não diz quantos livros foram (1, 2, 5 ou 10).'
      }
    ],
    didacticTip: 'Sempre pense antes de criar uma coluna: "Eu vou querer somar ou contar isso?". Se sim, o formato é NÚMERO!',
    bnccGoal: 'EF03CO05: Planejar a criação de estruturas de dados coerentes com o objetivo pretendido.'
  },
  {
    id: 14,
    numberStr: '14',
    title: 'Visão Raio-X (Por Dentro do Videogame)',
    phase: 'fase4',
    phaseTitle: 'Fase 4: Mestre dos Dados & Código Real',
    challengeType: 'logic_puzzle',
    targetFormat: 'structure',
    scenario: 'Você abriu o arquivo de salvamento de um videogame de aventura: { "heroi": "Guerreiro da Luz", "pontos_de_vida": 100, "tem_escudo": true }.',
    objective: 'Reconhecer formatos de dados em estruturas de código de jogos digitais.',
    question: 'Qual é o tipo de dado do valor 100 no "pontos_de_vida" e do "true" no "tem_escudo"?',
    options: [
      {
        id: 'opt1',
        text: '100 é NÚMERO (para diminuir quando leva dano) e "true" é BOOLEANO (indica se tem ou não o escudo).',
        isCorrect: true,
        explanation: 'Uau, você é um verdadeiro programador! É exatamente assim que todos os videogames funcionam.'
      },
      {
        id: 'opt2',
        text: 'Ambos são do tipo Data de aniversário.',
        isCorrect: false,
        explanation: 'Pontos de vida e escudo não são datas.'
      },
      {
        id: 'opt3',
        text: 'Ambos são textos sem sentido.',
        isCorrect: false,
        explanation: 'Eles têm muito sentido: determinam as regras do jogo no computador!'
      }
    ],
    didacticTip: 'Jogos de videogame são construídos com milhares desses dados estruturados trocando mensagens o tempo todo!',
    bnccGoal: 'EF03CO05: Articular a estrutura de dados com aplicações no mundo digital e entretenimento (videogames).'
  },
  {
    id: 15,
    numberStr: '15',
    title: 'O Grande Desafio do Mestre dos Dados (Distintivo de Ouro)',
    phase: 'fase4',
    phaseTitle: 'Fase 4: Mestre dos Dados & Código Real',
    challengeType: 'logic_puzzle',
    targetFormat: 'structure',
    scenario: 'Parabéns Detetive! Você chegou à última missão da oficina da 4ª aula do dia 24/09/2026.',
    objective: 'Consolidar a habilidade EF03CO05 como competência para a vida digital.',
    question: 'Qual a grande conclusão que você aprendeu hoje sobre os formatos de dados?',
    options: [
      {
        id: 'opt1',
        text: 'Os dados precisam ser estruturados em formatos específicos (Texto, Número, Data e Sim/Não) para que computadores possam guardar, buscar, calcular e mostrar informações com segurança e velocidade!',
        isCorrect: true,
        explanation: 'PARABÉNS! Você dominou completamente a habilidade EF03CO05 da BNCC e conquistou o Distintivo Dourado de Mestre dos Dados!'
      },
      {
        id: 'opt2',
        text: 'Tanto faz o formato, o computador adivinha tudo sozinho por mágica.',
        isCorrect: false,
        explanation: 'Computadores não têm bola de cristal nem mágica: eles dependem da estrutura lógica que nós definimos!'
      },
      {
        id: 'opt3',
        text: 'Os dados só servem para gastar a bateria do celular.',
        isCorrect: false,
        explanation: 'Os dados estruturados são a base de toda a tecnologia moderna: da chamada escolar aos foguetes espaciais!'
      }
    ],
    didacticTip: 'Você concluiu todas as 15 missões! Agora você está pronto para receber seu Certificado Oficial de Honra ao Mérito do 3º Ano C!',
    bnccGoal: 'EF03CO05: Síntese e apropriação conceitual plena da organização e estruturação de dados.'
  }
];
