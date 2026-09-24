import React, { useState } from 'react';
import { QUIZ_QUESTIONS, DATA_TYPES_INFO } from '../data/lessonData';
import { DataTypeCategory } from '../types';
import { sounds } from '../utils/audio';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

interface FormatGameProps {
  isPresentationMode: boolean;
  onGoToCertificate: () => void;
}

export const FormatGame: React.FC<FormatGameProps> = ({ isPresentationMode, onGoToCertificate }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<DataTypeCategory | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (type: DataTypeCategory) => {
    if (isAnswered) return;
    setSelectedType(type);
    setIsAnswered(true);

    if (type === currentQ.correctType) {
      sounds.playSuccess();
      setScore(prev => prev + 1);
    } else {
      sounds.playError();
    }
  };

  const handleNext = () => {
    sounds.playGentleBeep();
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedType(null);
      setIsAnswered(false);
    } else {
      setGameFinished(true);
      sounds.playSuccess();
    }
  };

  const restartGame = () => {
    sounds.playGentleBeep();
    setCurrentIdx(0);
    setSelectedType(null);
    setIsAnswered(false);
    setScore(0);
    setGameFinished(false);
  };

  const options: DataTypeCategory[] = ['text', 'number', 'date', 'boolean'];

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Game Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
          <div>
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">
              Desafio dos Detetives de Dados
            </span>
            <h2 className={`${isPresentationMode ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-display font-bold text-slate-900`}>
              Qual é o Formato Correto?
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block font-medium">Pontuação</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-sky-700 tabular-nums">
              {score} / {QUIZ_QUESTIONS.length} ★
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 mb-6">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Pergunta {currentIdx + 1} de {QUIZ_QUESTIONS.length}</span>
            <span>Progresso da Turma</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-600 transition-all duration-300 rounded-full"
              style={{ width: `${((currentIdx + (gameFinished ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {!gameFinished ? (
          <div className="space-y-6">
            {/* Question Card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                Situação do Problema:
              </div>
              <p className={`${isPresentationMode ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} font-semibold text-slate-900 mb-4`}>
                {currentQ.context}
              </p>

              {/* Highlighted Value */}
              <div className="text-center p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Dado a ser guardado no computador:
                </span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-sky-900">
                  {currentQ.dataValue}
                </span>
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Escolha a caixinha certa para este dado:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {options.map((type) => {
                  const info = DATA_TYPES_INFO[type];
                  const isChosen = selectedType === type;
                  const isCorrect = type === currentQ.correctType;

                  let btnStyle = 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 text-slate-800';
                  if (isAnswered) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold shadow-xs';
                    } else if (isChosen && !isCorrect) {
                      btnStyle = 'bg-rose-100 border-rose-400 text-rose-950';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={type}
                      onClick={() => handleSelect(type)}
                      disabled={isAnswered}
                      className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${btnStyle}`}
                    >
                      <div>
                        <div className="font-mono text-xs font-bold uppercase tracking-wider opacity-75">
                          {info.badge}
                        </div>
                        <div className="text-sm font-bold mt-0.5">
                          {info.name.split(' ')[0]}
                        </div>
                      </div>

                      {isAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                      )}
                      {isAnswered && isChosen && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-700 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation Feedback Box */}
            {isAnswered && (
              <div className={`p-4 rounded-xl border animate-in fade-in duration-200 ${
                selectedType === currentQ.correctType
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-amber-50 border-amber-300 text-amber-900'
              }`}>
                <div className="font-bold text-sm mb-1 flex items-center gap-1.5">
                  {selectedType === currentQ.correctType ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      Excelente Detetive! Você acertou em cheio.
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-amber-700" />
                      Quase lá! Vamos entender o porquê:
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-2">
                  {currentQ.explanation}
                </p>
                <div className="text-xs font-medium text-slate-600 border-t border-slate-200/60 pt-2">
                  💡 <em>{currentQ.whyNotOther}</em>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
                  >
                    <span>{currentIdx + 1 < QUIZ_QUESTIONS.length ? 'Próxima Pergunta' : 'Ver Resultado Final'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished State */
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shadow-xs">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Parabéns ao 3º Ano C!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Você completou o desafio dos formatos de dados com <strong className="text-sky-700 font-mono">{score} de {QUIZ_QUESTIONS.length}</strong> pontos!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-900 max-w-md mx-auto">
              🎖️ <strong>Habilidade BNCC EF03CO05 Conquistada:</strong>
              <p className="mt-1 text-xs text-sky-800">
                Agora você já sabe que o computador precisa de formatos específicos para guardar nomes (Texto), idades (Número), datas (Calendário) e confirmações (Sim/Não).
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                onClick={restartGame}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Jogar Novamente
              </button>

              <button
                onClick={() => {
                  sounds.playSuccess();
                  onGoToCertificate();
                }}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors"
              >
                <Sparkles className="w-4 h-4 text-sky-200" />
                Gerar Meu Certificado de Detetive
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
