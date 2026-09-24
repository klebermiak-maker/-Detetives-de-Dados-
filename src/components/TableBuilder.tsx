import React, { useState } from 'react';
import { DataTypeCategory } from '../types';
import { DATA_TYPES_INFO } from '../data/lessonData';
import { sounds } from '../utils/audio';
import { Table, Plus, Trash2, ArrowUpDown, Filter, Download, Sparkles, Check } from 'lucide-react';

interface ColumnMeta {
  id: string;
  name: string;
  type: DataTypeCategory;
}

interface TableRowData {
  id: string;
  [key: string]: any;
}

export const TableBuilder: React.FC<{ isPresentationMode: boolean }> = ({ isPresentationMode }) => {
  const [columns, setColumns] = useState<ColumnMeta[]>([
    { id: 'aluno', name: 'Nome do Aluno', type: 'text' },
    { id: 'idade', name: 'Idade', type: 'number' },
    { id: 'aniversario', name: 'Mês de Aniversário', type: 'text' },
    { id: 'temPet', name: 'Tem Pet em Casa?', type: 'boolean' }
  ]);

  const [rows, setRows] = useState<TableRowData[]>([
    { id: 'r1', aluno: 'Lucas Mendes', idade: 8, aniversario: 'Março', temPet: true },
    { id: 'r2', aluno: 'Beatriz Costa', idade: 9, aniversario: 'Outubro', temPet: false },
    { id: 'r3', aluno: 'Enzo Gabriel', idade: 8, aniversario: 'Janeiro', temPet: true },
    { id: 'r4', aluno: 'Sofia Almeida', idade: 8, aniversario: 'Julho', temPet: true },
    { id: 'r5', aluno: 'Mateus Oliveira', idade: 9, aniversario: 'Dezembro', temPet: false }
  ]);

  // Form to add a new row
  const [newRowValues, setNewRowValues] = useState<Record<string, any>>({
    aluno: '',
    idade: '',
    aniversario: '',
    temPet: true
  });

  // Sort state
  const [sortColId, setSortColId] = useState<string | null>('idade');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Filter state for boolean
  const [filterPet, setFilterPet] = useState<'all' | 'yes' | 'no'>('all');

  const handleAddRow = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSuccess();
    const newId = `row_${Date.now()}`;
    const newRow: TableRowData = {
      id: newId,
      aluno: newRowValues.aluno || 'Novo Aluno',
      idade: parseInt(newRowValues.idade, 10) || 8,
      aniversario: newRowValues.aniversario || 'Não informado',
      temPet: Boolean(newRowValues.temPet)
    };

    setRows([...rows, newRow]);
    setNewRowValues({
      aluno: '',
      idade: '',
      aniversario: '',
      temPet: true
    });
  };

  const handleDeleteRow = (id: string) => {
    sounds.playGentleBeep();
    setRows(rows.filter(r => r.id !== id));
  };

  const handleSort = (colId: string) => {
    sounds.playGentleBeep();
    if (sortColId === colId) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColId(colId);
      setSortDirection('asc');
    }
  };

  // Filter and Sort rows
  let displayedRows = [...rows];
  if (filterPet === 'yes') {
    displayedRows = displayedRows.filter(r => r.temPet === true);
  } else if (filterPet === 'no') {
    displayedRows = displayedRows.filter(r => r.temPet === false);
  }

  if (sortColId) {
    displayedRows.sort((a, b) => {
      const valA = a[sortColId];
      const valB = b[sortColId];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortDirection === 'asc' ? valA - valB : valB - valA;
      }
      return sortDirection === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Intro */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1">
              <span>Laboratório Colaborativo</span>
              <span>·</span>
              <span>Turma 3º Ano C</span>
            </div>
            <h2 className={`${isPresentationMode ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-display font-bold text-slate-900`}>
              Construtor de Tabela: Banco de Dados da Sala
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Veja como cada coluna possui um formato específico que permite <strong>ordenar por idade</strong> ou <strong>filtrar quem tem animal de estimação</strong>!
            </p>
          </div>

          {/* Interactive filter controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            <span className="text-[11px] font-semibold text-slate-500 px-2">Filtrar Pet:</span>
            <button
              onClick={() => {
                sounds.playGentleBeep();
                setFilterPet('all');
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                filterPet === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({rows.length})
            </button>
            <button
              onClick={() => {
                sounds.playGentleBeep();
                setFilterPet('yes');
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                filterPet === 'yes' ? 'bg-white text-purple-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tem Pet
            </button>
            <button
              onClick={() => {
                sounds.playGentleBeep();
                setFilterPet('no');
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                filterPet === 'no' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Não Tem
            </button>
          </div>
        </div>

        {/* The Live Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                {columns.map((col) => {
                  const typeInfo = DATA_TYPES_INFO[col.type];
                  return (
                    <th key={col.id} className="py-3 px-3">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <span>{col.name}</span>
                          <span className={`block font-mono text-[10px] font-bold ${typeInfo.color}`}>
                            [{typeInfo.badge}]
                          </span>
                        </div>
                        <button
                          onClick={() => handleSort(col.id)}
                          className="p-1 hover:bg-slate-200 rounded text-slate-500 transition-colors"
                          title="Clique para ordenar esta coluna"
                        >
                          <ArrowUpDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </th>
                  );
                })}
                <th className="py-3 px-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {displayedRows.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-slate-900">
                    {row.aluno}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-bold text-sky-800 tabular-nums">
                    {row.idade} anos
                  </td>
                  <td className="py-2.5 px-3 text-slate-700">
                    {row.aniversario}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${
                      row.temPet ? 'bg-purple-100 text-purple-900' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {row.temPet ? '✓ Sim' : '✗ Não'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => handleDeleteRow(row.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                      title="Excluir linha"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Add Row Form */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
            <Plus className="w-4 h-4 text-sky-600" />
            Adicionar um Aluno do 3º C à Tabela Estruturada:
          </span>

          <form onSubmit={handleAddRow} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Nome (Texto)
              </label>
              <input
                type="text"
                value={newRowValues.aluno}
                onChange={(e) => setNewRowValues({ ...newRowValues, aluno: e.target.value })}
                placeholder="Nome do colega..."
                required
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Idade (Número)
              </label>
              <input
                type="number"
                min="6"
                max="12"
                value={newRowValues.idade}
                onChange={(e) => setNewRowValues({ ...newRowValues, idade: e.target.value })}
                placeholder="Ex: 8"
                required
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Mês Aniversário (Texto)
              </label>
              <input
                type="text"
                value={newRowValues.aniversario}
                onChange={(e) => setNewRowValues({ ...newRowValues, aniversario: e.target.value })}
                placeholder="Ex: Maio"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Tem Pet? (Sim/Não)
              </label>
              <div className="flex gap-2">
                <select
                  value={newRowValues.temPet ? 'sim' : 'nao'}
                  onChange={(e) => setNewRowValues({ ...newRowValues, temPet: e.target.value === 'sim' })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>

                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors shrink-0"
                >
                  Inserir
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Teacher / Student takeaway */}
        <div className="mt-4 p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Perceba a mágica:</strong> O computador só conseguiu ordenar as idades de 8 e 9 anos porque definimos a coluna como <strong>NÚMERO</strong>. Se estivesse misturado como texto ("oito", "9 anos", "quase dez"), o computador ficaria confuso!
          </div>
        </div>
      </div>
    </div>
  );
};
