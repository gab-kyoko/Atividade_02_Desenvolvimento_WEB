'use client';

import { useEffect, useState } from 'react';

// busca e exibe um resumo da Wikipédia com base em um termo de pesquisa
export default function SupportText({ topic, searchTerm }) {
  // Estado para controlar a interface
  const [state, setState] = useState('loading');
  
  // armazena o trecho retornado da Wikipédia
  const [extract, setExtract] = useState('');

  useEffect(() => {
    // Flag de limpeza para evitar atualização de estado se o componente for desmontado durante o fetch
    let mounted = true;

    // Requisição à API REST da Wikipédia em português
    fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`)
      .then((response) => {
        if (!response.ok) throw new Error('API indisponível');
        return response.json();
      })
      .then((data) => {
        if (mounted) {
          setExtract(data.extract);
          setState('success');
        } 
      })
      .catch(() => mounted && setState('error'));

    // Função de limpeza executada quando o componente é desmontado ou 'searchTerm' muda
    return () => {
      mounted = false;
    };
  }, [searchTerm]); // Reexecuta a busca sempre que o termo de pesquisa mudar

  return (
    <section className="support">
      <p className="eyebrow">PARA IR ALÉM</p>
      <h2>Texto de apoio: {topic}</h2>

      {/* estado de carregamento */}
      {state === 'loading' && (
        <p className="status">Carregando conteúdo de apoio...</p>
      )}

      {/* estado de sucesso */}
      {state === 'success' && (
        <>
          <p>{extract}</p>
          <small>Fonte: Wikipédia (consulta pública)</small>
        </>
      )}

      {/* estado de erro */}
      {state === 'error' && (
        <p className="status error">
          O texto de apoio não pôde ser carregado agora. Você ainda pode estudar normalmente com o roteiro acima.
        </p>
      )}
    </section>
  );
}