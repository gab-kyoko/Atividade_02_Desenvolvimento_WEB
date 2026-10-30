import Link from 'next/link';
import roteiros from '../data/roteiros.json';
import disciplinas from '../data/disciplinas.json';
import Header from '../components/Header';
import SubjectFilter from '../components/SubjectFilter';
import RoteiroCard from '../components/RoteiroCard';
import Footer from '../components/Footer';

export default function Inicio() {
  return <>
    <Header />
    <main>
      <section className="hero">
        <p className="eyebrow">REDE MUNICIPAL DE EDUCAÇÃO</p>
        <h1>Seu próximo roteiro de estudo começa aqui.</h1>
        <p>Materiais organizados por disciplina e ano, gerados com IA e revisados por professores da rede.</p>
        {/* Botão que leva direto pro que foi selecionado */}
        <a className="button" href="#roteiros">Explorar roteiros</a>
      </section>
      <section className="content-section" id="roteiros">
        <div className="section-heading"><div><p className="eyebrow">BIBLIOTECA</p><h2>Roteiros disponíveis</h2></div><Link href="/solicitar" className="text-link">Sou professor →</Link></div>
        <SubjectFilter disciplines={disciplinas} />
        {/* Percorre a lista de roteiros e cria um RoteiroCard para cada item */}
        <div className="card-grid">
          {roteiros.map((roteiro) => <RoteiroCard key={roteiro.id} roteiro={roteiro} disciplines={disciplinas} />)}
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
