import React, { useState } from 'react';
import { LESSON_METADATA } from '../data/lessonData';
import { Printer, CheckCircle2, Scissors, HelpCircle } from 'lucide-react';

export const PrintableWorksheets: React.FC = () => {
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner Control */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">
            Material Didático de Computação Desplugada
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            Ficha de Atividades: Detetive de Dados (Pronta para Imprimir)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Ideal para realizar a aula sem depender de computadores individuais para cada aluno.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {showAnswerKey ? 'Ocultar Gabarito' : 'Exibir Gabarito do Professor'}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" />
            Imprimir Folha A4
          </button>
        </div>
      </div>

      {/* The Printable A4 Sheet Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs text-slate-900 print:p-0 print:border-none print:shadow-none space-y-6">
        {/* School Header Fill-in */}
        <div className="border-2 border-slate-800 p-4 rounded-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-300 pb-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Escola: __________________________________________________________________
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Componente: <strong>Computação</strong> · Habilidade BNCC: <strong>EF03CO05</strong>
              </div>
            </div>
            <div className="text-right text-xs font-mono font-bold text-slate-700">
              Data: 24/09/2026 · 4ª Aula
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="sm:col-span-2">
              <strong>Nome do Aluno(a):</strong> ____________________________________________________
            </div>
            <div>
              <strong>Turma:</strong> <span className="underline font-bold">3º Ano C</span>
            </div>
          </div>
        </div>

        {/* Title of Worksheet */}
        <div className="text-center py-2">
          <h1 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-slate-900">
            Missão dos Detetives: Caça aos Formatos de Dados
          </h1>
          <p className="text-xs text-slate-600 italic">
            "Os computadores precisam de formatos específicos para cada tipo de informação!"
          </p>
        </div>

        {/* ATIVIDADE 1: Ligar Colunas */}
        <div className="border border-slate-300 rounded-xl p-4 space-y-3 print-break-inside-avoid">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 uppercase">
              Atividade 1: Ligue cada informação à sua caixinha de formato correta
            </h3>
            <span className="text-[10px] text-slate-500 font-mono">[Use régua ou lápis]</span>
          </div>

          <div className="grid grid-cols-2 gap-8 text-xs py-2">
            {/* Left Items */}
            <div className="space-y-4">
              <span className="font-bold text-slate-700 block border-b pb-1">Informações:</span>
              <div className="p-2 border border-slate-400 rounded bg-slate-50 flex items-center justify-between">
                <span>A) <strong>"Rex, o Cãozinho"</strong></span>
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
              </div>
              <div className="p-2 border border-slate-400 rounded bg-slate-50 flex items-center justify-between">
                <span>B) <strong>8 anos</strong></span>
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
              </div>
              <div className="p-2 border border-slate-400 rounded bg-slate-50 flex items-center justify-between">
                <span>C) <strong>24/09/2026</strong></span>
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
              </div>
              <div className="p-2 border border-slate-400 rounded bg-slate-50 flex items-center justify-between">
                <span>D) <strong>Está vacinado? [Sim]</strong></span>
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
              </div>
            </div>

            {/* Right Formats */}
            <div className="space-y-4">
              <span className="font-bold text-slate-700 block border-b pb-1">Caixinha do Computador:</span>
              <div className="p-2 border-2 border-dashed border-emerald-500 rounded bg-emerald-50/50 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
                <span>( 1 ) <strong>DATA (Calendário)</strong></span>
              </div>
              <div className="p-2 border-2 border-dashed border-purple-500 rounded bg-purple-50/50 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
                <span>( 2 ) <strong>SIM / NÃO (Booleano)</strong></span>
              </div>
              <div className="p-2 border-2 border-dashed border-amber-500 rounded bg-amber-50/50 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
                <span>( 3 ) <strong>TEXTO (Letras & Palavras)</strong></span>
              </div>
              <div className="p-2 border-2 border-dashed border-sky-500 rounded bg-sky-50/50 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-slate-600"></span>
                <span>( 4 ) <strong>NÚMERO (Contagens & Medidas)</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* ATIVIDADE 2: Ficha Cadastral Desplugada */}
        <div className="border border-slate-300 rounded-xl p-4 space-y-3 print-break-inside-avoid">
          <h3 className="font-bold text-sm text-slate-900 uppercase">
            Atividade 2: Ficha Cadastral do seu Animal Favorito ou Mascote
          </h3>
          <p className="text-xs text-slate-600">
            Preencha cada campo respeitando rigorosamente o tipo de dado indicado!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-3 border border-slate-300 rounded-lg">
              <label className="block font-bold text-slate-800 mb-1">
                Nome do Animal <span className="text-[10px] text-amber-700 font-mono">[TIPO TEXTO]</span>
              </label>
              <div className="h-8 border-b-2 border-dotted border-slate-400"></div>
            </div>

            <div className="p-3 border border-slate-300 rounded-lg">
              <label className="block font-bold text-slate-800 mb-1">
                Idade em Anos <span className="text-[10px] text-sky-700 font-mono">[TIPO NÚMERO]</span>
              </label>
              <div className="h-8 border-b-2 border-dotted border-slate-400"></div>
            </div>

            <div className="p-3 border border-slate-300 rounded-lg">
              <label className="block font-bold text-slate-800 mb-1">
                Data do Aniversário ou Chegada <span className="text-[10px] text-emerald-700 font-mono">[TIPO DATA: __/__/____]</span>
              </label>
              <div className="h-8 border-b-2 border-dotted border-slate-400"></div>
            </div>

            <div className="p-3 border border-slate-300 rounded-lg">
              <label className="block font-bold text-slate-800 mb-1">
                Sabe fazer truques ou é dócil? <span className="text-[10px] text-purple-700 font-mono">[SIM / NÃO]</span>
              </label>
              <div className="flex items-center gap-6 pt-2 font-bold">
                <label className="flex items-center gap-1.5">
                  <span className="w-4 h-4 border-2 border-slate-600 rounded inline-block"></span> [ ] SIM
                </label>
                <label className="flex items-center gap-1.5">
                  <span className="w-4 h-4 border-2 border-slate-600 rounded inline-block"></span> [ ] NÃO
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* ATIVIDADE 3: Desafio do Pensamento Computacional */}
        <div className="border border-slate-300 rounded-xl p-4 space-y-2 print-break-inside-avoid">
          <h3 className="font-bold text-sm text-slate-900 uppercase">
            Atividade 3: Pergunta de Pensamento Computacional
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            Se a professora pedir para o computador calcular quem é o aluno mais velho da turma do 3º ano C, por que ela não pode guardar as idades escritas como texto ("oito anos e meio", "nove"), mas sim como <strong>números puros</strong> (8, 9)?
          </p>
          <div className="space-y-2 pt-2">
            <div className="h-5 border-b border-slate-400"></div>
            <div className="h-5 border-b border-slate-400"></div>
          </div>
        </div>

        {/* Teacher's Answer Key (Toggleable or prints when enabled) */}
        {showAnswerKey && (
          <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-xs text-amber-950 space-y-2 print-break-inside-avoid">
            <div className="font-bold text-sm text-amber-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-700" />
              Gabarito Exclusivo do Professor (BNCC EF03CO05):
            </div>
            <p>
              • <strong>Atividade 1:</strong> A com (3) Texto; B com (4) Número; C com (1) Data; D com (2) Sim/Não.
            </p>
            <p>
              • <strong>Atividade 3 (Resposta esperada):</strong> O computador só sabe fazer operações matemáticas e comparações de grandeza (maior que, menor que) com dados do tipo NÚMERO. Letras e palavras são tratadas como texto comum e não podem ser calculadas.
            </p>
          </div>
        )}

        {/* Footer Score and Signature */}
        <div className="pt-4 border-t border-slate-300 flex items-center justify-between text-xs text-slate-600">
          <div>
            Nota / Carimbo do Professor: ________________________
          </div>
          <div>
            Oficina de Computação · 3º Ano C · 24/09/2026
          </div>
        </div>
      </div>
    </div>
  );
};
