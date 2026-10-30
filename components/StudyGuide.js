// Componente React/Next.js para exibir o guia de estudos detalhado
// Recebe os objetos 'roteiro', 'disciplina' e 'professor' via desestruturação de props
export default function StudyGuide({ roteiro, disciplina, professor }) { 
  return (
    <section className="guide">
      
      {/* Seção de introdução: cabeçalho, título, resumo e metadados rápidos */}
      <div className="guide-intro">
        {/* Eyebrow: Categoria superior em caixa alta e o ano escolar */}
        <p className="eyebrow">
          {disciplina?.nome?.toUpperCase()} · {roteiro?.ano}º ANO
        </p>
        
        <h1>{roteiro?.titulo}</h1>
        <p className="lead">{roteiro?.resumo}</p>
        
        {/* Fatos/Métricas: Tempo estimado e status de revisão */}
        <div className="facts">
          <span>◷ {roteiro?.tempo} minutos</span>
          <span>✓ Revisado</span>
        </div>
      </div>

      {/* Barra lateral: Aviso sobre IA e informações do professor revisor */}
      <aside>
        <p className="ai-label">CONTEÚDO GERADO COM IA</p>
        <p>Este roteiro foi gerado com inteligência artificial e revisado antes da publicação.</p>
        
        <hr />
        
        {/* Dados do professor responsável */}
        <strong>{professor?.nome}</strong>
        <span>{professor?.disciplina} · {professor?.escola}</span>
      </aside>

      {/* Conteúdo principal de estudo */}
      <div className="study-content">
        <h2>Vamos estudar?</h2>
        <p>{roteiro?.conteudo}</p>
      </div>

    </section>
  ); 
}