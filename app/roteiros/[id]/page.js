import { notFound } from 'next/navigation';

// Importa arquivos de dados locais, nosso 'banco de dados'
import roteiros from '../../../data/roteiros.json';
import disciplinas from '../../../data/disciplinas.json';
import professores from '../../../data/professores.json';
import Header from '../../../components/Header';
import StudyGuide from '../../../components/StudyGuide';
import SupportText from '../../../components/SupportText';
import Quiz from '../../../components/Quiz';
import Footer from '../../../components/Footer';

// Gera páginas HTML estáticas, garantindo carregamento rápido
export function generateStaticParams()
{
  // Identifica quais são os IDs, pra saber quantas páginas gerar
  return roteiros.map((roteiro) => ({ id: roteiro.id }));
}

// Principal: espera as informações da URL pra saber exatamente qual roteiro mostrar
export default async function RoteiroPage({ params })
{
  const { id } = await params;          // Verifica qual página o usuário quer
  const roteiro = roteiros.find((item) => item.id === id);  // Localiza a página que o usuário quer
  
  // Se não encontrar mostra Erro
  if (!roteiro) notFound();

  // Descobre qual é a matéria e quem é o professor responsável por aquele roteiro
  const disciplina = disciplinas.find((item) => item.id === roteiro.disciplinaId);
  const professor = professores.find((item) => item.id === roteiro.professorId);
  return <>

  // Topo - Conteúdo (guia, texto, quiz) - rodapé
  <Header />
  <main className="detail-page">
    <StudyGuide roteiro={roteiro} disciplina={disciplina} professor={professor} />
    <SupportText topic={roteiro.tema} searchTerm={roteiro.buscaWikipedia} />
    <Quiz questions={roteiro.questoes} />
  </main><Footer /></>;
}
