import Link from 'next/link';

// Recebe roteiro e disciplines por desestruturação de props
export default function RoteiroCard({ roteiro, disciplines }) { 
  
  // Procura o id que seja igual ao disciplinaId do roteiro
  const subject = disciplines.find((item) => item.id === roteiro.disciplinaId); 

  return (
    <article className="roteiro-card">
      
      {/* exibe a disciplina e o ano escolar */}
      <div className="card-top">
        {/* Usa optional chaining por segurança caso a disciplina nao seja encontrada */}
        <span>{subject?.nome}</span>
        <span>{roteiro.ano}º ano</span>
      </div>

      {/* Titulo e resumo do roteiro */}
      <h3>{roteiro.titulo}</h3>
      <p>{roteiro.resumo}</p>

      {/* tempo estimado e link para a pag de detalhes */}
      <div className="card-bottom">
        <span>◷ {roteiro.tempo} min</span>
        
        {/* Link do Next.js para navegaçao interna otimizada sem recarregar a pag */}
        <Link href={`/roteiros/${roteiro.id}`}>
          Abrir roteiro →
        </Link>
      </div>

    </article>
  ); 
}