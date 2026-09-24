export type TabType = 'lab' | 'missions' | 'game' | 'builder' | 'lesson-plan' | 'printables' | 'certificate';

export type DataTypeCategory = 'text' | 'number' | 'date' | 'boolean' | 'image';

export interface FieldDefinition {
  id: string;
  label: string;
  type: DataTypeCategory;
  description: string;
  example: string;
  computerFormat: string;
  color: string;
}

export interface CreatureRecord {
  id: string;
  name: string;
  species: string;
  ageYears: number;
  weightKg: number;
  arrivalDate: string;
  isFriendly: boolean;
  avatar: string;
  diet: string;
}

export interface QuizQuestion {
  id: number;
  dataValue: string;
  context: string;
  correctType: DataTypeCategory;
  explanation: string;
  whyNotOther: string;
}

export type MissionPhase = 'fase1' | 'fase2' | 'fase3' | 'fase4';

export interface Mission {
  id: number;
  numberStr: string; // "01", "02", ... "15"
  title: string;
  phase: MissionPhase;
  phaseTitle: string;
  challengeType: 'classify' | 'fix_error' | 'interactive_action' | 'logic_puzzle';
  scenario: string;
  objective: string;
  targetFormat: DataTypeCategory | 'structure';
  question: string;
  problemData?: {
    raw: string;
    badField?: string;
    badValue?: string;
    goodValue?: string;
  };
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  didacticTip: string;
  bnccGoal: string;
}
