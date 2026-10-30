import Link from 'next/link';

export default function Header(){
    return <header>
        {/* Clicar leva de volta para a pág inicial*/}
        <Link className="brand" href="/">
            <span>R</span>
            Roteiros de Estudo
        </Link>

        <nav>
            <Link href="/">Biblioteca</Link>
        <Link href="/solicitar">Solicitar roteiro</Link>
        </nav>
    </header>;
}
