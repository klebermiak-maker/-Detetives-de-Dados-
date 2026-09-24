import React, { useState } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { PresentationBanner } from './components/PresentationBanner';
import { StudentLab } from './components/StudentLab';
import { FormatGame } from './components/FormatGame';
import { TableBuilder } from './components/TableBuilder';
import { TeacherLessonPlan } from './components/TeacherLessonPlan';
import { PrintableWorksheets } from './components/PrintableWorksheets';
import { DetectiveCertificate } from './components/DetectiveCertificate';
import { LESSON_METADATA } from './data/lessonData';
import { BookOpen, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { sounds } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('lab');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);

  const handleTabChange = (tab: TabType) => {
    sounds.playGentleBeep();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTogglePresentation = () => {
    sounds.playGentleBeep();
    setIsPresentationMode(prev => !prev);
  };

  const handlePrintDirect = () => {
    sounds.playGentleBeep();
    setActiveTab('printables');
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col ${isPresentationMode ? 'text-lg' : ''}`}>
      {/* Header following Top Bar Contract */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        isPresentationMode={isPresentationMode}
        onTogglePresentation={handleTogglePresentation}
        onPrintDirect={handlePrintDirect}
      />

      {/* Classroom Context Banner (24/09/2026 · 4ª Aula · 3º Ano C · EF03CO05) */}
      <PresentationBanner isPresentationMode={isPresentationMode} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {activeTab === 'lab' && (
          <StudentLab
            isPresentationMode={isPresentationMode}
            onOpenGame={() => handleTabChange('game')}
          />
        )}

        {activeTab === 'game' && (
          <FormatGame
            isPresentationMode={isPresentationMode}
            onGoToCertificate={() => handleTabChange('certificate')}
          />
        )}

        {activeTab === 'builder' && (
          <TableBuilder isPresentationMode={isPresentationMode} />
        )}

        {activeTab === 'lesson-plan' && (
          <TeacherLessonPlan />
        )}

        {activeTab === 'printables' && (
          <PrintableWorksheets />
        )}

        {activeTab === 'certificate' && (
          <DetectiveCertificate />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span className="font-semibold text-slate-700">
              Oficina de Computação na Educação Básica
            </span>
            <span aria-hidden="true">·</span>
            <span>{LESSON_METADATA.dateFormatted} ({LESSON_METADATA.period})</span>
            <span aria-hidden="true">·</span>
            <span>Turma {LESSON_METADATA.grade}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
              BNCC {LESSON_METADATA.skillCode}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
