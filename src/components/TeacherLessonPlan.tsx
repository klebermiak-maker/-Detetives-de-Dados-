import React from 'react';
import { LESSON_METADATA } from '../data/lessonData';
import { BookOpen, CheckCircle, Clock, Users, Target, Layers, FileSpreadsheet, Printer } from 'lucide-react';

export const TeacherLessonPlan: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header Actions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">
            Documento Pedagógico Oficial
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            Plano de Aula: Oficina de Computação · 3º Ano C
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Elaborado para a 4ª aula de Quinta-feira, 24/09/2026, com foco na habilidade BNCC EF03CO05.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors shrink-0"
        >
          <Printer className="w-4 h-4" />
          Imprimir Plano Completo (PDF)
        </button>
      </div>

      {/* Main Printable Document */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs print:border-none print:shadow-none print:p-0 space-y-8 text-slate-800">
        {/* Institutional Identification */}
        <div className="border-b border-slate-200 pb-6">
          <div className="text-center sm:text-left mb-4">
            <h1 className="text-2xl font-display font-bold text-slate-900">
              Plano de Aula: Dados Estruturados e Formatos de Informação
            </h1>
            <div className="text-xs text-slate-500 mt-1">
              Referencial Curricular Nacional de Computação na Educação Básica (BNCC Computação)
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px]">Data & Horário:</span>
              <span className="font-semibold text-slate-900">24/09/2026 · 4ª Aula</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px]">Turma:</span>
              <span className="font-semibold text-slate-900">3º ano C (Fundamental I)</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px]">Componente:</span>
              <span className="font-semibold text-slate-900">Computação</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px]">Duração:</span>
              <span className="font-semibold text-slate-900">50 minutos</span>
            </div>
          </div>
        </div>

        {/* 1. Habilidade & Objetivos */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Target className="w-4 h-4 text-sky-600" />
            1. Habilidade da BNCC & Objetivos de Aprendizagem
          </h3>

          <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950">
            <strong className="block font-mono text-sky-800 mb-1">
              Habilidade EF03CO05:
            </strong>
            "Compreender que os dados são estruturados em formatos específicos, dependendo da informação armazenada."
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50">
              <strong className="text-slate-900 block mb-1">Objetivo Conceitual:</strong>
              Diferenciar dado isolado de informação e reconhecer os formatos fundamentais: Texto, Número, Data e Booleano (Sim/Não).
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50">
              <strong className="text-slate-900 block mb-1">Objetivo Procedimental:</strong>
              Organizar dados não-estruturados em fichas cadastrais e tabelas, identificando colunas adequadas para cada tipo.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50">
              <strong className="text-slate-900 block mb-1">Objetivo Atitudinal:</strong>
              Trabalhar colaborativamente, valorizando o rigor e a precisão na organização das informações escolares e científicas.
            </div>
          </div>
        </section>

        {/* 2. Cronograma Passo a Passo (50 minutos) */}
        <section className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Clock className="w-4 h-4 text-amber-600" />
            2. Cronograma Minuto a Minuto da 4ª Aula (50 Minutos)
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            {/* Bloco 1 */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/30">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span className="text-amber-800 font-mono">00 a 10 min · Etapa 1</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Acolhida & Problematização</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                <strong>O Bilhete do Veterinário:</strong> O professor projeta ou lê o texto desorganizado anotado em guardanapo. Pergunta aos alunos: <em>"Quem consegue me dizer em 3 segundos quem é o bicho mais pesado?"</em>. As crianças percebem que no texto corrido é difícil encontrar respostas rápidas. Introdução do conceito: o computador precisa de organização.
              </p>
            </div>

            {/* Bloco 2 */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/30">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span className="text-sky-800 font-mono">10 a 25 min · Etapa 2</span>
                <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded">Descoberta Guiada dos 4 Formatos</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Apresentação das "4 Caixinhas Mágicas" da Computação:
                <br />• <strong>Texto:</strong> letrinhas para nomes e palavras.
                <br />• <strong>Número:</strong> dígitos para fazer contas e ordenar.
                <br />• <strong>Data:</strong> calendário para saber o tempo.
                <br />• <strong>Booleano:</strong> a chave liga/desliga (Sim ou Não).
                <br />Demonstração do erro: o que acontece quando tentamos somar "Gato" + 2? Dá erro porque "Gato" é Texto!
              </p>
            </div>

            {/* Bloco 3 */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/30">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span className="text-indigo-800 font-mono">25 a 40 min · Etapa 3</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">Oficina Mão na Massa (Plugada ou Desplugada)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Os alunos em duplas ou individualmente atuam como "Detetives de Dados":
                <br />• <strong>Opção com computadores/tablets:</strong> Uso do simulador "Hospital dos Bichinhos & Robôs" e desafio interativo.
                <br />• <strong>Opção desplugada (sem tela):</strong> Preenchimento da Ficha Impressa com lápis, colando cada informação na caixinha correspondente.
              </p>
            </div>

            {/* Bloco 4 */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/30">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span className="text-purple-800 font-mono">40 a 47 min · Etapa 4</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Socialização & Ordenação na Tabela</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Reunião coletiva no Construtor de Tabela: o professor demonstra o botão de ordenação por idade e o filtro de animais dóceis. As crianças constatam como a estruturação facilitou a vida dos cientistas.
              </p>
            </div>

            {/* Bloco 5 */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/30">
              <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                <span className="text-emerald-800 font-mono">47 a 50 min · Etapa 5</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Sistematização & Certificação</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Fechamento da aula. Validação dos aprendizados com a entrega do selo/certificado oficial de "Detetive de Dados Estruturados do 3º C".
              </p>
            </div>
          </div>
        </section>

        {/* 3. Recursos & Diferenciação */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Layers className="w-4 h-4 text-purple-600" />
            3. Recursos Pedagógicos & Diferenciação
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-bold mb-1">Materiais Necessários:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>Projetor multimídia ou TV conectada ao aplicativo da oficina.</li>
                <li>Fichas impressas de atividade desplugada para os alunos.</li>
                <li>Lápis de cor (Amarelo para Texto, Azul para Número, Verde para Data, Roxo para Sim/Não).</li>
                <li>Computadores ou tablets (se disponíveis na escola).</li>
              </ul>
            </div>

            <div className="p-3 rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-bold mb-1">Apoio a Alunos com Dificuldades:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>Trabalho em duplas produtivas (parceiro leitor com parceiro executor).</li>
                <li>Uso do código de cores nas caixinhas para apoio visual neurodivergente (TDAH/TEA).</li>
                <li>Exemplos concretos do cotidiano das crianças (idade dos colegas, dia do aniversário).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Rúbrica de Avaliação Formativa */}
        <section className="space-y-3 print-break-inside-avoid">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            4. Rúbrica de Avaliação Formativa (EF03CO05)
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">Critério</th>
                  <th className="p-2.5">Abaixo do Básico</th>
                  <th className="p-2.5">Básico</th>
                  <th className="p-2.5">Adequado</th>
                  <th className="p-2.5">Avançado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Identificação de Formatos</td>
                  <td className="p-2.5 text-slate-500">Confunde números e textos frequentemente.</td>
                  <td className="p-2.5 text-slate-600">Reconhece nomes (Texto) e quantidades (Número) com mediação.</td>
                  <td className="p-2.5 text-slate-800 font-medium">Classifica autonomamente Texto, Número, Data e Sim/Não.</td>
                  <td className="p-2.5 text-emerald-900 font-bold">Explica por que cada formato é necessário para o computador.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Organização em Tabelas</td>
                  <td className="p-2.5 text-slate-500">Escreve dados fora das colunas designadas.</td>
                  <td className="p-2.5 text-slate-600">Preenche a tabela mas comete pequenas misturas de tipo.</td>
                  <td className="p-2.5 text-slate-800 font-medium">Preenche a tabela com exatidão no formato de cada coluna.</td>
                  <td className="p-2.5 text-emerald-900 font-bold">Cria novas colunas apropriadas e propõe novas buscas e filtros.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Teacher Signature Footer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>
            <strong>Professor(a) Responsável:</strong> _____________________________________
          </div>
          <div className="mt-4 sm:mt-0">
            <strong>Coordenação Pedagógica:</strong> _____________________________________
          </div>
        </div>
      </div>
    </div>
  );
};
