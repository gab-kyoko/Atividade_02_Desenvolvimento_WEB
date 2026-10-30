import Link from 'next/link';
export default function NotFound() {
    return <main className="not-found"><p className="eyebrow">ROTEIRO NÃO ENCONTRADO</p>
    <h1>Este roteiro não está disponível.</h1>
    <p>Ele pode ter sido removido ou o endereço foi digitado incorretamente.</p>
    <Link className="button" href="/">Voltar para a biblioteca</Link>
    </main>;
}
