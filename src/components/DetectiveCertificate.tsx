import React, { useState } from 'react';
import { LESSON_METADATA } from '../data/lessonData';
import { Award, Printer, Sparkles, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/audio';

export const DetectiveCertificate: React.FC = () => {
  const [studentName, setStudentName] = useState<string>('Aluno(a) do 3º C');
  const [teacherName, setTeacherName] = useState<string>('Professor(a) de Computação');

  const handlePrint = () => {
    sounds.playSuccess();
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Reconhecimento & Conquista Pedagógica
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
              Certificado Oficial de Detetive de Dados
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Personalize com o nome do aluno da turma do 3º ano C para imprimir ou salvar em PDF.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-98 rounded-xl shadow-xs transition-all shrink-0"
          >
            <Printer className="w-4 h-4" />
            Imprimir Certificado (A4)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nome do Aluno(a):
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Digite o nome da criança..."
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nome do Professor(a):
            </label>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="Nome do professor..."
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* The Certificate Frame */}
      <div className="bg-white rounded-3xl border-8 border-amber-500/80 p-8 sm:p-12 shadow-md relative overflow-hidden text-center space-y-6 print:border-4 print:border-black print:p-8 print:shadow-none">
        {/* Decorative corner borders */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600"></div>
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600"></div>
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600"></div>
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600"></div>

        {/* Certificate Emblem */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 border-2 border-amber-400 text-amber-700 mx-auto shadow-inner">
          <Award className="w-10 h-10" />
        </div>

        {/* Main Headings */}
        <div className="space-y-1">
          <div className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Escola & Laboratório de Computação
          </div>
          <h1 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-slate-900">
            CERTIFICADO DE CONQUISTA
          </h1>
          <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Detetive Oficial de Dados Estruturados
          </div>
        </div>

        {/* Student Name */}
        <div className="py-2">
          <div className="text-xs text-slate-500 uppercase font-medium">
            Certificamos com louvor que
          </div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-sky-900 border-b-2 border-amber-400 inline-block px-8 py-1 mt-1">
            {studentName || 'Nome do Aluno'}
          </div>
          <div className="text-xs text-slate-600 mt-2 font-medium">
            Turma: <strong>{LESSON_METADATA.grade}</strong> · {LESSON_METADATA.period}
          </div>
        </div>

        {/* Competency Statement */}
        <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
          Completou com sucesso a oficina prática de Computação e dominou a habilidade{' '}
          <strong className="text-slate-900 font-mono">BNCC {LESSON_METADATA.skillCode}</strong>,
          compreendendo que os dados são estruturados em formatos específicos (Texto, Número, Data e Sim/Não)
          para que computadores e seres humanos possam organizar informações com exatidão e velocidade.
        </p>

        {/* Formats Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] font-mono">
          <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded border border-amber-200">
            TEXTO ✓
          </span>
          <span className="bg-sky-50 text-sky-800 px-2.5 py-1 rounded border border-sky-200">
            NÚMERO ✓
          </span>
          <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded border border-emerald-200">
            DATA ✓
          </span>
          <span className="bg-purple-50 text-purple-800 px-2.5 py-1 rounded border border-purple-200">
            SIM / NÃO ✓
          </span>
        </div>

        {/* Signatures and Date */}
        <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs text-slate-700">
          <div>
            <div className="font-semibold text-slate-900">
              {teacherName || 'Professor(a)'}
            </div>
            <div className="text-[11px] text-slate-500">
              Professor(a) de Computação
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-900">
              24 de Setembro de 2026
            </div>
            <div className="text-[11px] text-slate-500">
              Data da Conquista
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
