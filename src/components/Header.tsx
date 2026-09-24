import React from 'react';
import { TabType } from '../types';
import { Printer, Sparkles, MonitorPlay } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  isPresentationMode: boolean;
  onTogglePresentation: () => void;
  onPrintDirect: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  isPresentationMode,
  onTogglePresentation,
  onPrintDirect
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onTabChange('lab')}
          className="text-left group flex items-baseline gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
        >
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
            Detetives de Dados
          </span>
          <span className="text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded">
            3º C
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs sm:text-sm font-medium text-slate-600">
          <button
            onClick={() => onTabChange('lab')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'lab'
                ? 'text-sky-700 font-semibold bg-sky-50'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Laboratório Interativo
          </button>
          <button
            onClick={() => onTabChange('game')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'game'
                ? 'text-sky-700 font-semibold bg-sky-50'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Jogo dos Formatos
          </button>
          <button
            onClick={() => onTabChange('builder')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'builder'
                ? 'text-sky-700 font-semibold bg-sky-50'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Construtor de Tabela
          </button>
          <button
            onClick={() => onTabChange('lesson-plan')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'lesson-plan'
                ? 'text-sky-700 font-semibold bg-sky-50'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Plano de Aula (BNCC)
          </button>
          <button
            onClick={() => onTabChange('printables')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'printables'
                ? 'text-sky-700 font-semibold bg-sky-50'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Fichas Impressas
          </button>
          <button
            onClick={() => onTabChange('certificate')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'certificate'
                ? 'text-sky-700 font-semibold bg-sky-50'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Certificado
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePresentation}
            title={isPresentationMode ? 'Sair do Modo Projetor' : 'Ativar Modo Projetor (Letras Maiores para a Turma)'}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
              isPresentationMode
                ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">Modo</span> Projetor
          </button>

          <button
            onClick={onPrintDirect}
            title="Imprimir materiais para a turma"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Imprimir</span> Fichas
          </button>
        </div>
      </div>

      {/* Mobile navigation tab scroll */}
      <div className="lg:hidden border-t border-slate-100 px-3 py-2 overflow-x-auto flex items-center gap-1.5 no-scrollbar text-xs">
        <button
          onClick={() => onTabChange('lab')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'lab' ? 'bg-sky-100 text-sky-900 font-semibold' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Laboratório
        </button>
        <button
          onClick={() => onTabChange('game')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'game' ? 'bg-sky-100 text-sky-900 font-semibold' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Jogo dos Formatos
        </button>
        <button
          onClick={() => onTabChange('builder')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'builder' ? 'bg-sky-100 text-sky-900 font-semibold' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Construtor
        </button>
        <button
          onClick={() => onTabChange('lesson-plan')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'lesson-plan' ? 'bg-sky-100 text-sky-900 font-semibold' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Plano de Aula
        </button>
        <button
          onClick={() => onTabChange('printables')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'printables' ? 'bg-sky-100 text-sky-900 font-semibold' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Fichas
        </button>
        <button
          onClick={() => onTabChange('certificate')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'certificate' ? 'bg-sky-100 text-sky-900 font-semibold' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Certificado
        </button>
      </div>
    </header>
  );
};
