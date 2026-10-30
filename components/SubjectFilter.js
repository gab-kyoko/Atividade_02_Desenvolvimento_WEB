'use client';

import { useState } from 'react';

// filtro por disciplina recebe a lista disciplines via props
export default function SubjectFilter({ disciplines }) {
  // controlar qual filtro está selecionado iniciando como todos
  const [active, setActive] = useState('todos');

  return (
    <div className="filters" aria-label="Filtrar por disciplina">
      
      {/* Botão padrão para limpar o filtro e exibir todas as disciplinas */}
      <button 
        className={active === 'todos' ? 'active' : ''}
        onClick={() => setActive('todos')}
      >
        Todos
      </button>

      {/* Renderiza dinamicamente um botão para cada disciplina do array */}
      {disciplines?.map((discipline) => (
        <button 
          key={discipline.id} // Propriedade 'key' única exigida pelo React ao renderizar listas
          className={active === discipline.id ? 'active' : ''}
          onClick={() => setActive(discipline.id)}
        >
          {discipline.nome}
        </button>
      ))}

      {/* Mensagem informativa */}
      <p>
        {active === 'todos'
          ? 'Escolha um roteiro para começar.'
          : `Filtro selecionado: ${disciplines?.find((d) => d.id === active)?.nome}. Os roteiros continuam visíveis abaixo.`
        }
      </p>

    </div>
  ); 
}