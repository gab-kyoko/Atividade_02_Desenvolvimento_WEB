import Header from '../../components/Header';
import RequestForm from '../../components/RequestForm';
import Footer from '../../components/Footer';

// Renderiza a tela tosa vez que acessar essa URL
export default function Solicitar() {
    return <>
    <Header />
    <main className="request-page">
        <div>
            <p className="eyebrow">PARA PROFESSORES</p>
            <h1>Peça um novo roteiro.</h1>
            <p>Preencha os dados abaixo. O pedido será encaminhado para revisão em uma próxima etapa.</p>
            </div>
            {/* onde fica o campo de digitação (inputs de nome, matéria, tema), os botões e a lógica de envio */}
            <RequestForm />
            </main>
            <Footer />
        </>;
}
