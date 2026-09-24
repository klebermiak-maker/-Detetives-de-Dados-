import React, { useState, useEffect } from 'react';
import { LESSON_METADATA } from '../data/lessonData';
import { Calendar, Clock, BookOpen, Sparkles, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import { sounds } from '../utils/audio';

interface PresentationBannerProps {
  isPresentationMode: boolean;
}

export const PresentationBanner: React.FC<PresentationBannerProps> = ({ isPresentationMode }) => {
  // 50-minute classroom timer for 4th class
  const [timerSeconds, setTimerSeconds] = useState<number>(50 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isTimerOpen, setIsTimerOpen] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            sounds.playSuccess();
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timerSeconds]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerSeconds(50 * 60);
  };

  return (
    <section className="bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900 text-white border-b border-sky-800/60 transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            {/* Top metadata info row with clean unboxed typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-sky-200 font-medium tracking-wide mb-1.5">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                {LESSON_METADATA.dateFormatted}
              </span>
              <span aria-hidden="true" className="text-sky-400/60">·</span>
              <span className="flex items-center gap-1 text-sky-100">
                <Clock className="w-3.5 h-3.5" />
                {LESSON_METADATA.period}
              </span>
              <span aria-hidden="true" className="text-sky-400/60">·</span>
              <span className="font-bold text-white bg-sky-500/20 px-2 py-0.5 rounded border border-sky-400/30">
                Turma: {LESSON_METADATA.grade}
              </span>
              <span aria-hidden="true" className="text-sky-400/60">·</span>
              <span className="text-sky-200">
                {LESSON_METADATA.subject}
              </span>
            </div>

            <h1 className={`${isPresentationMode ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'} font-display font-bold tracking-tight text-white`}>
              Oficina dos Detetives de Dados: Por Dentro dos Formatos Digitais
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-sky-100/90">
              <span className="font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-700/50">
                BNCC: {LESSON_METADATA.skillCode}
              </span>
              <span className="text-slate-200 max-w-2xl">
                {LESSON_METADATA.skillDescription}
              </span>
            </div>
          </div>

          {/* Quick Classroom Interactive Controls */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-center">
            {/* 50 min session countdown */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-2 flex items-center gap-3">
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Tempo da 4ª Aula
                </div>
                <div className="font-mono text-lg font-bold text-amber-300 tabular-nums">
                  {formatTime(timerSeconds)}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    if (!isRunning) sounds.playGentleBeep();
                    setIsRunning(!isRunning);
                  }}
                  className="p-1.5 rounded bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                  title={isRunning ? 'Pausar aula' : 'Iniciar cronômetro de 50 min'}
                >
                  {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                  title="Reiniciar para 50:00"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
