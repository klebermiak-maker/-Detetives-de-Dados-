import { DataTypeCategory, FieldDefinition, QuizQuestion, CreatureRecord } from '../types';

export const LESSON_METADATA = {
  date: '2026-09-24',
  dateFormatted: 'Quinta-feira, 24 de Setembro de 2026',
  period: '4ª Aula (10h10 às 11h00)',
  grade: '3º ano C',
  schoolCycle: 'Ensino Fundamental I',
  subject: 'Computação',
  skillCode: 'EF03CO05',
  skillDescription: 'Compreender que os dados são estruturados em formatos específicos, dependendo da informação armazenada.',
  topic: 'Organização e Tipos de Dados: Texto, Número, Data e Sim/Não na Construção de Informações',
  axis: 'Pensamento Computacional / Mundo Digital (BNCC Computação)',
  durationMinutes: 50,
  targetAge: '8 a 9 anos'
};

export const DATA_TYPES_INFO: Record<DataTypeCategory, {
  name: string;
  badge: string;
  iconName: string;
  color: string;
  bgLight: string;
  borderColor: string;
  childExplanation: string;
  examples: string[];
  computerRule: string;
  forbiddenExample: string;
}> = {
  text: {
    name: 'Texto (Letras & Palavras)',
    badge: 'TEXTO',
    iconName: 'Type',
    color: 'text-amber-700',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    childExplanation: 'Serve para escrever nomes, histórias, cores e palavras. Não dá para fazer continha de mais ou de menos com texto!',
    examples: ['"Pipoca"', '"Planeta Marte"', '"Azul Celeste"', '"Cachorrinho"'],
    computerRule: 'O computador guarda entre aspas ("...") como uma sequência de letrinhas.',
    forbiddenExample: 'Se você tentar somar "Gato" + "Cachorro", o computador não entende o número!'
  },
  number: {
    name: 'Número (Contagens & Medidas)',
    badge: 'NÚMERO',
    iconName: 'Hash',
    color: 'text-sky-700',
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-200',
    childExplanation: 'Serve para quantidades, idades, quilos, altura e notas. O computador pode somar, diminuir e ordenar do menor para o maior!',
    examples: ['8 (idade)', '25 (quilos)', '150 (centímetros)', '3 (irmãos)'],
    computerRule: 'O computador guarda o valor numérico puro sem letras para poder calcular.',
    forbiddenExample: 'Se você escrever "oito anos" em vez de 8, o computador não consegue calcular a média!'
  },
  date: {
    name: 'Data (Calendário & Tempo)',
    badge: 'DATA',
    iconName: 'Calendar',
    color: 'text-emerald-700',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    childExplanation: 'Serve para marcar um dia exato no calendário (dia, mês e ano). Ajuda a saber quem nasceu primeiro ou quando vai ser o recreio!',
    examples: ['24/09/2026', '12/10/2017', '01/01/2026'],
    computerRule: 'Guarda ano, mês e dia com precisão para calcular aniversários e cronogramas.',
    forbiddenExample: 'Escrever "semana que vem" confunde o computador porque muda a cada dia!'
  },
  boolean: {
    name: 'Sim ou Não (Lógico / Booleano)',
    badge: 'SIM / NÃO',
    iconName: 'ToggleRight',
    color: 'text-purple-700',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-200',
    childExplanation: 'Só tem duas respostas possíveis: SIM ou NÃO (Verdadeiro ou Falso). Como uma chavinha de luz: acesa ou apagada!',
    examples: ['Tomou vacina? Sim', 'Sabe voar? Não', 'Tem asas? Sim'],
    computerRule: 'É o famoso 1 ou 0 do computador (True / False). Super rápido de processar!',
    forbiddenExample: 'Colocar "Talvez" ou "Às vezes" quebra a regra da chavinha!'
  },
  image: {
    name: 'Imagem / Foto (Visual)',
    badge: 'IMAGEM',
    iconName: 'Image',
    color: 'text-rose-700',
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-200',
    childExplanation: 'Guarda o desenho, foto ou avatar da criatura usando pontinhos coloridos chamados pixels.',
    examples: ['Foto do mascote', 'Desenho da espécie', 'Ícone do animal'],
    computerRule: 'Guarda um arquivo de imagem (.png ou .jpg) ou código de pixels.',
    forbiddenExample: 'Tentar escrever uma receita inteira dentro da foto do animal!'
  }
};

export const INITIAL_CREATURES: CreatureRecord[] = [
  {
    id: 'c1',
    name: 'Astronópio',
    species: 'Lêmure Galáctico',
    ageYears: 4,
    weightKg: 6,
    arrivalDate: '2026-03-15',
    isFriendly: true,
    avatar: '🐒',
    diet: 'Frutas Estelares'
  },
  {
    id: 'c2',
    name: 'Sparky',
    species: 'Dragãozinho Faísca',
    ageYears: 2,
    weightKg: 18,
    arrivalDate: '2026-06-10',
    isFriendly: true,
    avatar: '🐲',
    diet: 'Cristais de Fogo'
  },
  {
    id: 'c3',
    name: 'Glub-Glub',
    species: 'Peixe-Nuvem Voador',
    ageYears: 1,
    weightKg: 3,
    arrivalDate: '2026-08-01',
    isFriendly: false,
    avatar: '🐡',
    diet: 'Algas Nebulosas'
  },
  {
    id: 'c4',
    name: 'Titanela',
    species: 'Tartaruga Cósmica',
    ageYears: 85,
    weightKg: 340,
    arrivalDate: '2025-11-20',
    isFriendly: true,
    avatar: '🐢',
    diet: 'Musgo Lunar'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    dataValue: '12 quilos',
    context: 'Qual o formato correto para guardar o peso de um animal em uma tabela para calcularmos o peso total?',
    correctType: 'number',
    explanation: 'Para que o computador consiga somar o peso de todos os animais, devemos guardar apenas o NÚMERO (12) e indicar na coluna que a unidade é em quilogramas!',
    whyNotOther: 'Se colocarmos como texto com a palavra "quilos", o computador não consegue somar automaticamente.'
  },
  {
    id: 2,
    dataValue: '"Lili da Silva"',
    context: 'Em uma chamada da turma do 3º ano C, onde guardamos o nome do aluno?',
    correctType: 'text',
    explanation: 'O nome é formado por letras e palavras, portanto seu formato no computador é do tipo TEXTO.',
    whyNotOther: 'Nenhum número ou data pode substituir as letras do nome de alguém!'
  },
  {
    id: 3,
    dataValue: '24/09/2026',
    context: 'A data de hoje da nossa oficina no calendário da escola.',
    correctType: 'date',
    explanation: 'É uma DATA! Ela possui dia, mês e ano, permitindo saber a ordem dos acontecimentos no tempo.',
    whyNotOther: 'Se guardássemos apenas como texto simples, o computador não saberia qual dia vem antes ou depois.'
  },
  {
    id: 4,
    dataValue: 'Tem autorização para o passeio? [X] Sim  [ ] Não',
    context: 'Uma pergunta da ficha de matrícula que só pode ter duas respostas: Sim ou Não.',
    correctType: 'boolean',
    explanation: 'Este é o tipo LÓGICO / BOOLEANO (Sim/Não). É como uma chave que só tem duas posições: ligado ou desligado!',
    whyNotOther: 'Não precisamos de números nem textos longos quando a resposta é apenas Sim ou Não.'
  },
  {
    id: 5,
    dataValue: '7 anos',
    context: 'A idade de um coleguinha que acabou de entrar no 3º ano.',
    correctType: 'number',
    explanation: 'Idade é uma contagem de anos, logo seu formato ideal é NÚMERO (7). Com números podemos descobrir quem é o mais velho ou calcular a média da sala!',
    whyNotOther: 'Guardando como número, o computador pode colocar a lista da turma em ordem crescente de idade!'
  },
  {
    id: 6,
    dataValue: '"Rua das Palmeiras, nº 140, Bairro Sol"',
    context: 'O endereço de residência de uma família.',
    correctType: 'text',
    explanation: 'Endereço combina letras, números e pontuações, mas é lido como um TEXTO com a descrição do local.',
    whyNotOther: 'Não fazemos contas de matemática com o endereço, logo ele é tratado como texto.'
  }
];

export const UNSTRUCTURED_VS_STRUCTURED = {
  messyText: `O Dr. Zé veterinário do zoo anotou num guardanapo: ontem chegou um bicho chamado Faísca que tem 2 anos e pesa uns 18 kg ele é um dragãozinho e come cristais de fogo e é muito dócil sim e a data foi 10 de junho de 2026. Também tem o peixe glub que tem 1 ano e pesa 3kg não é dócil não e come algas. E a tartaruga Titanela tem 85 anos e 340 quilos come musgo lunar é muito amiga e chegou em novembro de 2025.`,
  challenges: [
    'Qual dos bichos pesa mais? (Difícil achar no meio do texto corrido!)',
    'Quantos bichos são dóceis? (Precisa ler e reler palavra por palavra)',
    'Qual bicho chegou primeiro? (As datas estão misturadas em formatos diferentes)'
  ],
  structuredBenefits: [
    'Campos bem definidos: Nome, Idade, Peso, Data de Chegada e É Dócil?',
    'O computador consegue ordenar do mais pesado para o mais leve em 1 segundo!',
    'Filtra rapidamente apenas os que são dóceis (Sim/Não).'
  ]
};
