import React, { useState } from 'react';
import { DATA_TYPES_INFO, UNSTRUCTURED_VS_STRUCTURED, INITIAL_CREATURES } from '../data/lessonData';
import { CreatureRecord, DataTypeCategory } from '../types';
import { sounds } from '../utils/audio';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Table, 
  FileText, 
  Code2, 
  Plus, 
  Search, 
  Calendar, 
  Hash, 
  Type, 
  ToggleRight, 
  RefreshCw,
  Eye,
  Sliders
} from 'lucide-react';

interface StudentLabProps {
  isPresentationMode: boolean;
  onOpenGame: () => void;
}

export const StudentLab: React.FC<StudentLabProps> = ({ isPresentationMode, onOpenGame }) => {
  // State for Mission 1 (Messy vs Structured)
  const [isStructuredView, setIsStructuredView] = useState<boolean>(false);
  const [activeDataTypeCard, setActiveDataTypeCard] = useState<DataTypeCategory | null>('text');

  // State for Mission 2 (Interactive Doctor Form)
  const [creatures, setCreatures] = useState<CreatureRecord[]>(INITIAL_CREATURES);
  const [nameInput, setNameInput] = useState<string>('Pipoca');
  const [speciesInput, setSpeciesInput] = useState<string>('Robô-Cachorro');
  const [ageInput, setAgeInput] = useState<string>('3');
  const [weightInput, setWeightInput] = useState<string>('8');
  const [dateInput, setDateInput] = useState<string>('2026-09-24');
  const [isFriendlyInput, setIsFriendlyInput] = useState<boolean>(true);
  const [avatarInput, setAvatarInput] = useState<string>('🐶');
  const [dietInput, setDietInput] = useState<string>('Baterias Solares');

  // Real-time type warnings for pedagogical feedback
  const [numberWarning, setNumberWarning] = useState<string | null>(null);
  const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);

  // Perspective viewer (human card vs table vs computer code)
  const [viewMode, setViewMode] = useState<'card' | 'table' | 'raw'>('card');
  const [selectedCreatureId, setSelectedCreatureId] = useState<string>('c1');

  const handleAgeChange = (val: string) => {
    setAgeInput(val);
    if (val && isNaN(Number(val))) {
      sounds.playError();
      setNumberWarning('⚠️ Atenção Detetive: Você digitou letras no campo de NÚMERO! Computadores precisam de números puros para poder somar ou comparar idades.');
    } else {
      setNumberWarning(null);
    }
  };

  const handleWeightChange = (val: string) => {
    setWeightInput(val);
    if (val && isNaN(Number(val))) {
      sounds.playError();
      setNumberWarning('⚠️ Atenção: O peso deve ser somente NÚMERO (ex: 12). A palavra "quilos" fica no nome da coluna da tabela!');
    } else {
      setNumberWarning(null);
    }
  };

  const handleCreateCreature = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAge = parseInt(ageInput, 10);
    const parsedWeight = parseFloat(weightInput);

    if (isNaN(parsedAge) || isNaN(parsedWeight)) {
      sounds.playError();
      setNumberWarning('Por favor, digite números válidos para Idade e Peso antes de salvar!');
      return;
    }

    const newRecord: CreatureRecord = {
      id: `c_${Date.now()}`,
      name: nameInput.trim() || 'Sem Nome',
      species: speciesInput,
      ageYears: parsedAge,
      weightKg: parsedWeight,
      arrivalDate: dateInput,
      isFriendly: isFriendlyInput,
      avatar: avatarInput,
      diet: dietInput
    };

    sounds.playSuccess();
    setCreatures([newRecord, ...creatures]);
    setSelectedCreatureId(newRecord.id);
    setFormSuccessMessage(`✅ Sucesso! O registro estruturado de "${newRecord.name}" foi salvo com todos os tipos corretos.`);
    setTimeout(() => setFormSuccessMessage(null), 4500);

    // Reset name for next creation
    setNameInput('');
  };

  const selectedCreature = creatures.find(c => c.id === selectedCreatureId) || creatures[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Classroom Banner with Generated Educational Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-indigo-50/50 to-white border border-sky-100 p-5 sm:p-7 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
              <span className="bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md font-mono">Oficina Prática</span>
              <span>·</span>
              <span>Ensino Fundamental I · 3º Ano C</span>
            </div>

            <h2 className={`${isPresentationMode ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-display font-bold text-slate-900 tracking-tight`}>
              Bem-vindos à Academia dos Detetives de Dados!
            </h2>

            <p className={`${isPresentationMode ? 'text-base sm:text-lg' : 'text-sm'} text-slate-600 leading-relaxed`}>
              Hoje, no dia <strong className="text-slate-900">24 de Setembro de 2026</strong>, vamos descobrir como os computadores organizam as informações. Você sabia que uma máquina não entende palavras da mesma forma que entende números ou datas? Cada dado precisa de uma <strong className="text-sky-700">caixinha com formato especial</strong>!
            </p>

            {/* Core learning stages summary */}
            <div className="pt-1 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-100/80 text-amber-900 font-medium">
                <Type className="w-3.5 h-3.5" /> Texto
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-100/80 text-sky-900 font-medium">
                <Hash className="w-3.5 h-3.5" /> Número
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100/80 text-emerald-900 font-medium">
                <Calendar className="w-3.5 h-3.5" /> Data
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-100/80 text-purple-900 font-medium">
                <ToggleRight className="w-3.5 h-3.5" /> Sim / Não
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-900 aspect-video group">
              <img
                src="/src/assets/images/hero_data_workshop_1790277955635.jpg"
                alt="Robô pedagógico ensinando organização de dados para crianças"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3 text-white text-xs">
                <span className="font-medium text-sky-200">
                  Laboratório Digital: Cada informação tem seu formato exato!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MISSÃO 1: O Enigma da Bagunça vs. Estrutura */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
              <span>Missão 1</span>
              <span>·</span>
              <span>Comparação Visual</span>
            </div>
            <h3 className={`${isPresentationMode ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-display font-bold text-slate-900`}>
              O Enigma da Anotação no Guardanapo: Por que Estruturar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Veja a diferença entre um texto jogado sem formato e uma ficha estruturada em colunas.
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playGentleBeep();
              setIsStructuredView(!isStructuredView);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 rounded-lg shadow-xs transition-all shrink-0"
          >
            <RefreshCw className="w-4 h-4" />
            {isStructuredView ? 'Ver Texto Desorganizado' : 'Organizar com Estrutura!'}
          </button>
        </div>

        {!isStructuredView ? (
          /* Messy View */
          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-slate-800">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
                <FileText className="w-4 h-4" />
                Anotação Rápida do Veterinário (Dados Não-Estruturados):
              </div>
              <p className="font-serif italic text-slate-700 text-sm sm:text-base leading-relaxed bg-white/80 p-3 rounded-lg border border-amber-200/60">
                "{UNSTRUCTURED_VS_STRUCTURED.messyText}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {UNSTRUCTURED_VS_STRUCTURED.challenges.map((challenge, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Problema {idx + 1}:</strong>
                    <span>{challenge}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  sounds.playSuccess();
                  setIsStructuredView(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-sky-900 bg-sky-100 hover:bg-sky-200 rounded-xl transition-colors border border-sky-200"
              >
                <Sparkles className="w-4 h-4 text-sky-600" />
                Clique aqui para transformar a bagunça em Dados Estruturados!
              </button>
            </div>
          </div>
        ) : (
          /* Structured Table & Card View */
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-bold text-emerald-950">
                  Uau! Veja como o Computador e o Humano entendem tudo num piscar de olhos:
                </strong>
                <span>
                  Quando separamos as informações em colunas específicas (Nome, Espécie, Idade, Peso, Chegada, Dócil), cada valor tem seu formato certo.
                </span>
              </div>
            </div>

            {/* The Structured Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Bicho</th>
                    <th className="py-2.5 px-3">
                      Nome <span className="text-[10px] text-amber-700 font-normal block font-mono">(TEXTO)</span>
                    </th>
                    <th className="py-2.5 px-3">
                      Espécie <span className="text-[10px] text-amber-700 font-normal block font-mono">(TEXTO)</span>
                    </th>
                    <th className="py-2.5 px-3">
                      Idade <span className="text-[10px] text-sky-700 font-normal block font-mono">(NÚMERO)</span>
                    </th>
                    <th className="py-2.5 px-3">
                      Peso (kg) <span className="text-[10px] text-sky-700 font-normal block font-mono">(NÚMERO)</span>
                    </th>
                    <th className="py-2.5 px-3">
                      Data de Chegada <span className="text-[10px] text-emerald-700 font-normal block font-mono">(DATA)</span>
                    </th>
                    <th className="py-2.5 px-3">
                      É Dócil? <span className="text-[10px] text-purple-700 font-normal block font-mono">(SIM/NÃO)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 bg-white">
                  {creatures.slice(0, 4).map((c) => (
                    <tr key={c.id} className="hover:bg-sky-50/40 transition-colors">
                      <td className="py-2 px-3 text-lg">{c.avatar}</td>
                      <td className="py-2 px-3 font-semibold text-slate-900">{c.name}</td>
                      <td className="py-2 px-3 text-slate-600">{c.species}</td>
                      <td className="py-2 px-3 font-mono text-sky-800 font-bold tabular-nums">{c.ageYears} anos</td>
                      <td className="py-2 px-3 font-mono text-sky-800 tabular-nums">{c.weightKg} kg</td>
                      <td className="py-2 px-3 font-mono text-emerald-800 tabular-nums">{c.arrivalDate}</td>
                      <td className="py-2 px-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                          c.isFriendly ? 'bg-purple-100 text-purple-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {c.isFriendly ? '● Sim (Dócil)' : '○ Não'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <span className="font-medium text-slate-700">
                💡 <strong>Conclusão da Missão 1:</strong> No texto corrido é confuso. Na tabela com formatos específicos, o computador responde qualquer pergunta em milissegundos!
              </span>
              <button
                onClick={() => setIsStructuredView(false)}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                Voltar à comparação
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* OS 4 GRANDES FORMATOS DE DADOS - CARTÕES DIDÁTICOS INTERATIVOS */}
      {/* ========================================================================= */}
      <section className="bg-slate-100/70 rounded-2xl p-5 sm:p-7 border border-slate-200">
        <div className="max-w-2xl mb-5">
          <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1">
            Guia de Referência do 3º Ano C
          </div>
          <h3 className={`${isPresentationMode ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-display font-bold text-slate-900`}>
            Os Formatos de Dados que o Computador Reconhece
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Clique em cada caixinha para testar como o computador processa cada tipo de dado:
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {(['text', 'number', 'date', 'boolean'] as DataTypeCategory[]).map((typeKey) => {
            const info = DATA_TYPES_INFO[typeKey];
            const isSelected = activeDataTypeCard === typeKey;
            return (
              <button
                key={typeKey}
                onClick={() => {
                  sounds.playGentleBeep();
                  setActiveDataTypeCard(typeKey);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? `${info.bgLight} ${info.borderColor} ring-2 ring-sky-500 shadow-xs scale-102`
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${info.bgLight} ${info.color}`}>
                    {info.badge}
                  </span>
                </div>
                <div className={`text-sm font-bold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                  {info.name.split(' ')[0]}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">
                  {info.examples[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Type Detailed Box */}
        {activeDataTypeCard && (
          <div className={`p-4 sm:p-5 rounded-xl border ${DATA_TYPES_INFO[activeDataTypeCard].bgLight} ${DATA_TYPES_INFO[activeDataTypeCard].borderColor} animate-in fade-in duration-200`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                  <span className={`font-mono text-xs px-2 py-0.5 rounded font-bold ${DATA_TYPES_INFO[activeDataTypeCard].color} bg-white border`}>
                    {DATA_TYPES_INFO[activeDataTypeCard].badge}
                  </span>
                  {DATA_TYPES_INFO[activeDataTypeCard].name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                  {DATA_TYPES_INFO[activeDataTypeCard].childExplanation}
                </p>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                    Exemplos válidos:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {DATA_TYPES_INFO[activeDataTypeCard].examples.map((ex, i) => (
                      <span key={i} className="font-mono text-xs bg-white/90 px-2 py-1 rounded border border-slate-200 text-slate-800">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 bg-white/80 p-3.5 rounded-lg border border-slate-200/80">
                <div>
                  <span className="text-[11px] uppercase font-bold text-sky-800 tracking-wider block mb-0.5">
                    🤖 Como o computador armazena:
                  </span>
                  <p className="text-xs text-slate-600 font-mono">
                    {DATA_TYPES_INFO[activeDataTypeCard].computerRule}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[11px] uppercase font-bold text-rose-700 tracking-wider block mb-0.5">
                    🚫 O que dá errado se misturar o formato?
                  </span>
                  <p className="text-xs text-rose-800">
                    {DATA_TYPES_INFO[activeDataTypeCard].forbiddenExample}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* MISSÃO 2: Laboratório Interativo "Cadastrando Criaturas com Formatos Válidos" */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1">
            <span>Missão 2</span>
            <span>·</span>
            <span>Laboratório Prático do Aluno</span>
          </div>
          <h3 className={`${isPresentationMode ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-display font-bold text-slate-900`}>
            Hospital Espacial: Preenchendo a Ficha Cadastral
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Experimente preencher os campos. Veja o que acontece se você tentar colocar texto no campo de idade ou peso!
          </p>
        </div>

        {/* Real-time Warning Banner */}
        {numberWarning && (
          <div className="mb-5 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5 animate-bounce">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>{numberWarning}</div>
          </div>
        )}

        {formSuccessMessage && (
          <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>{formSuccessMessage}</div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form Side */}
          <form onSubmit={handleCreateCreature} className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Field 1: Name (TEXT) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Nome da Criatura</span>
                  <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                    TEXTO
                  </span>
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Ex: Fofinho, Rex, Zupt..."
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Aceita letras, palavras e símbolos.
                </span>
              </div>

              {/* Field 2: Species (TEXT) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Espécie</span>
                  <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                    TEXTO
                  </span>
                </label>
                <select
                  value={speciesInput}
                  onChange={(e) => setSpeciesInput(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="Robô-Cachorro">Robô-Cachorro</option>
                  <option value="Dragãozinho Estelar">Dragãozinho Estelar</option>
                  <option value="Gato Cósmico">Gato Cósmico</option>
                  <option value="Tartaruga Galáctica">Tartaruga Galáctica</option>
                  <option value="Pássaro de Neon">Pássaro de Neon</option>
                </select>
              </div>

              {/* Field 3: Age (NUMBER) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Idade (em anos)</span>
                  <span className="font-mono text-[10px] text-sky-700 bg-sky-50 px-1.5 py-0.2 rounded border border-sky-200">
                    NÚMERO
                  </span>
                </label>
                <input
                  type="text"
                  value={ageInput}
                  onChange={(e) => handleAgeChange(e.target.value)}
                  placeholder="Ex: 4"
                  className="w-full px-3 py-2 text-sm font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Apenas dígitos (0, 1, 2, 3...) para permitir cálculos.
                </span>
              </div>

              {/* Field 4: Weight (NUMBER) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Peso (em kg)</span>
                  <span className="font-mono text-[10px] text-sky-700 bg-sky-50 px-1.5 py-0.2 rounded border border-sky-200">
                    NÚMERO
                  </span>
                </label>
                <input
                  type="text"
                  value={weightInput}
                  onChange={(e) => handleWeightChange(e.target.value)}
                  placeholder="Ex: 12"
                  className="w-full px-3 py-2 text-sm font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Não digite "kg", digite só o número!
                </span>
              </div>

              {/* Field 5: Date (DATE) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Data da Consulta</span>
                  <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                    DATA
                  </span>
                </label>
                <input
                  type="date"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full px-3 py-2 text-sm font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Formato calendário (Ano-Mês-Dia).
                </span>
              </div>

              {/* Field 6: Boolean Friendly (BOOLEAN) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>É Amigável / Dócil?</span>
                  <span className="font-mono text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200">
                    SIM / NÃO (BOOLEANO)
                  </span>
                </label>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      sounds.playGentleBeep();
                      setIsFriendlyInput(true);
                    }}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition-colors ${
                      isFriendlyInput
                        ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    ✓ Sim (Dócil)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sounds.playGentleBeep();
                      setIsFriendlyInput(false);
                    }}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition-colors ${
                      !isFriendlyInput
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    ✗ Não (Bravo)
                  </button>
                </div>
              </div>
            </div>

            {/* Avatar & Diet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ícone / Avatar
                </label>
                <div className="flex items-center gap-2">
                  {['🐶', '🐲', '🐱', '🐢', '🤖', '🦄'].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setAvatarInput(emoji)}
                      className={`text-2xl p-1.5 rounded-lg border transition-all ${
                        avatarInput === emoji ? 'border-sky-500 bg-sky-50 scale-110' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alimento Favorito (Texto)
                </label>
                <input
                  type="text"
                  value={dietInput}
                  onChange={(e) => setDietInput(e.target.value)}
                  placeholder="Ex: Folhas cósmicas..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 active:scale-98 rounded-xl shadow-xs transition-all"
              >
                <Plus className="w-4 h-4" />
                Salvar Registro Estruturado na Base de Dados
              </button>
            </div>
          </form>

          {/* Right Side: Live Record Preview & Format Inspection */}
          <div className="lg:col-span-5 bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Prévia do Registro no Computador
                </span>
                <span className="text-[11px] text-slate-400">Ao vivo</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl p-2 bg-slate-100 rounded-xl border border-slate-200">
                    {avatarInput}
                  </span>
                  <div>
                    <div className="text-base font-bold text-slate-900">
                      {nameInput || '(Sem Nome)'}
                    </div>
                    <div className="text-xs text-slate-500">
                      {speciesInput}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                  <div className="p-2 rounded bg-sky-50 border border-sky-100">
                    <span className="text-[10px] uppercase font-bold text-sky-700 block">Idade [Número]</span>
                    <span className="font-mono font-bold text-sky-900 text-sm">
                      {ageInput || '0'} anos
                    </span>
                  </div>

                  <div className="p-2 rounded bg-sky-50 border border-sky-100">
                    <span className="text-[10px] uppercase font-bold text-sky-700 block">Peso [Número]</span>
                    <span className="font-mono font-bold text-sky-900 text-sm">
                      {weightInput || '0'} kg
                    </span>
                  </div>

                  <div className="p-2 rounded bg-emerald-50 border border-emerald-100">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block">Data [Calendário]</span>
                    <span className="font-mono font-semibold text-emerald-900">
                      {dateInput || '2026-09-24'}
                    </span>
                  </div>

                  <div className="p-2 rounded bg-purple-50 border border-purple-100">
                    <span className="text-[10px] uppercase font-bold text-purple-700 block">Dócil [Booleano]</span>
                    <span className="font-semibold text-purple-900">
                      {isFriendlyInput ? 'Sim (Verdadeiro)' : 'Não (Falso)'}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">
                  <strong className="text-slate-800">Alimento:</strong> {dietInput || 'Não especificado'}
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-900">
              <strong className="block font-semibold mb-0.5">🧠 Lição do 3º Ano C:</strong>
              O computador não adivinha. Ele só sabe que o peso é menor ou maior porque guardamos como número, e só sabe a data da vacina porque guardamos como calendário!
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MISSÃO 3: A Visão Raio-X (Como o Computador Vê por Dentro) */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 uppercase tracking-wider mb-1">
              <span>Missão 3</span>
              <span>·</span>
              <span>Raio-X Tecnológico</span>
            </div>
            <h3 className={`${isPresentationMode ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-display font-bold text-slate-900`}>
              Visão Raio-X: Como o Celular e o Computador Guardam a Informação
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Escolha uma criatura para inspecionar os 3 jeitos de ver o mesmo dado:
            </p>
          </div>

          {/* View mode buttons */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => {
                sounds.playGentleBeep();
                setViewMode('card');
              }}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                viewMode === 'card' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ficha Visual
            </button>
            <button
              onClick={() => {
                sounds.playGentleBeep();
                setViewMode('table');
              }}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tabela
            </button>
            <button
              onClick={() => {
                sounds.playGentleBeep();
                setViewMode('raw');
              }}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                viewMode === 'raw' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Código do Computador
            </button>
          </div>
        </div>

        {/* Creature selector pill row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4">
          <span className="text-xs font-semibold text-slate-500 shrink-0">Inspecionar:</span>
          {creatures.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                sounds.playGentleBeep();
                setSelectedCreatureId(c.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all shrink-0 ${
                selectedCreature.id === c.id
                  ? 'bg-sky-600 text-white shadow-xs font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{c.avatar}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Content based on ViewMode */}
        {viewMode === 'card' && (
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-sky-50/50 border border-slate-200">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-6xl p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                {selectedCreature.avatar}
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-2xl font-bold text-slate-900">{selectedCreature.name}</h4>
                  <span className="text-xs font-semibold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
                    {selectedCreature.species}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-slate-600">
                  <span>🎂 <strong>Idade:</strong> {selectedCreature.ageYears} anos</span>
                  <span>·</span>
                  <span>⚖️ <strong>Peso:</strong> {selectedCreature.weightKg} kg</span>
                  <span>·</span>
                  <span>📅 <strong>Chegada:</strong> {selectedCreature.arrivalDate}</span>
                </div>
                <div className="text-xs text-slate-500">
                  🥗 <strong>Alimentação:</strong> {selectedCreature.diet} · 
                  <strong className="ml-1">Temperamento:</strong> {selectedCreature.isFriendly ? 'Super Dócil' : 'Precisa de Cuidado'}
                </div>
              </div>
            </div>
          </div>
        )}

        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Campo do Computador</th>
                  <th className="p-3">Tipo Estruturado</th>
                  <th className="p-3">Valor Armazenado</th>
                  <th className="p-3">Para que serve o formato?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="p-3 font-mono font-bold text-slate-900">name</td>
                  <td className="p-3 font-mono text-amber-700 bg-amber-50/50">TEXTO (String)</td>
                  <td className="p-3 font-semibold text-slate-900">"{selectedCreature.name}"</td>
                  <td className="p-3 text-slate-600 text-xs">Exibir no cabeçalho e na chamada</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-slate-900">species</td>
                  <td className="p-3 font-mono text-amber-700 bg-amber-50/50">TEXTO (String)</td>
                  <td className="p-3 text-slate-800">"{selectedCreature.species}"</td>
                  <td className="p-3 text-slate-600 text-xs">Agrupar por tipo de animal</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-slate-900">ageYears</td>
                  <td className="p-3 font-mono text-sky-700 bg-sky-50/50">NÚMERO (Integer)</td>
                  <td className="p-3 font-mono font-bold text-sky-900">{selectedCreature.ageYears}</td>
                  <td className="p-3 text-slate-600 text-xs">Calcular aniversários e ordenar do menor ao maior</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-slate-900">weightKg</td>
                  <td className="p-3 font-mono text-sky-700 bg-sky-50/50">NÚMERO (Float)</td>
                  <td className="p-3 font-mono font-bold text-sky-900">{selectedCreature.weightKg}</td>
                  <td className="p-3 text-slate-600 text-xs">Saber quanto de comida comprar no mês</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-slate-900">arrivalDate</td>
                  <td className="p-3 font-mono text-emerald-700 bg-emerald-50/50">DATA (ISO Date)</td>
                  <td className="p-3 font-mono text-emerald-900 font-bold">{selectedCreature.arrivalDate}</td>
                  <td className="p-3 text-slate-600 text-xs">Saber o tempo total que está no abrigo</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-slate-900">isFriendly</td>
                  <td className="p-3 font-mono text-purple-700 bg-purple-50/50">BOOLEANO (Boolean)</td>
                  <td className="p-3 font-mono font-bold text-purple-900">{selectedCreature.isFriendly ? 'true (Verdadeiro)' : 'false (Falso)'}</td>
                  <td className="p-3 text-slate-600 text-xs">Avisar os tratadores com alerta de segurança</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {viewMode === 'raw' && (
          <div className="space-y-2">
            <div className="text-xs text-slate-500 flex items-center justify-between">
              <span>Sintaxe Estruturada JSON (como os videogames salvam os personagens):</span>
              <span className="font-mono text-[10px] text-sky-700">JSON Estruturado</span>
            </div>
            <pre className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed border border-slate-800">
              {`{
  "id": "${selectedCreature.id}",
  "nome": "${selectedCreature.name}",       // Tipo: TEXTO (repare nas aspas "")
  "especie": "${selectedCreature.species}", // Tipo: TEXTO
  "idade": ${selectedCreature.ageYears},            // Tipo: NÚMERO (sem aspas!)
  "peso_kg": ${selectedCreature.weightKg},          // Tipo: NÚMERO
  "chegada": "${selectedCreature.arrivalDate}", // Tipo: DATA
  "amigavel": ${selectedCreature.isFriendly ? 'true' : 'false'},        // Tipo: BOOLEANO (true ou false)
  "icone": "${selectedCreature.avatar}"
}`}
            </pre>
          </div>
        )}
      </section>

      {/* Action CTA for Game */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900 to-sky-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-lg font-bold">Pronto para o Desafio dos Detetives?</h4>
          <p className="text-xs sm:text-sm text-indigo-200">
            Teste se você sabe escolher o formato certo para cada tipo de informação!
          </p>
        </div>
        <button
          onClick={() => {
            sounds.playSuccess();
            onOpenGame();
          }}
          className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-900" />
          Jogar Agora o Jogo dos Formatos
        </button>
      </div>
    </div>
  );
};
