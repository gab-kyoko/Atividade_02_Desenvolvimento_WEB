'use client';
import { useState } from 'react';

// Valores iniciais para resetar ou popular o formulário
const initial = {
    nome: '',
    email: '',
    disciplina: '',
    ano: '',
    tema: '',
    questoes: '3',
    data: '' };

export default function RequestForm() {

    // Estados pra controlar os inputs, erros e status de envio
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    // Atualiza o campo alterado e limpa o aviso de enviado
    function change(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setSent(false);
    }
    

    // Função de validação
    function submit(e) {
        e.preventDefault();
        const next = {};

        // validaçãop do nome
        if (!form.nome.trim())
            next.nome = 'Informe seu nome.';

        // Verifica o e-mail intitucional com o Regex
        if (!/^[^\s@]+@escola\.educa\.gov\.br$/i.test(form.email))
            next.email = 'Use seu e-mail institucional.';

        // campos obrigatórios genericos
        ['disciplina','ano','tema','data'].forEach((key) => {
            if (!form[key]) next[key] = 'Campo obrigatório.'; });
            
            // quatidade de questões (sendo min 3 e max 10)
            if (+form.questoes < 3 || +form.questoes > 10)
                next.questoes = 'Escolha de 3 a 10 questões.';
            
            // data mínima
            const min = new Date();
            min.setDate(min.getDate() + 7);
            if (form.data && new Date(`${form.data}T00:00:00`) < new Date(min.toDateString()))
                next.data = 'A data deve estar pelo menos 7 dias à frente.';
            
            //
            setErrors(next);
            setSent(Object.keys(next).length === 0);
    }
    
    const field = (label, name, props = {}) =>
        <label className="form-field">
            {label}
            <input name={name} value={form[name]} onChange={change}
            {...props}/>{errors[name] && <small>
                {errors[name]}</small>}</label>;
                return <form onSubmit={submit} noValidate>{field('Nome completo', 'nome', { placeholder: 'Seu nome' })}
                {field('E-mail institucional', 'email',
                { type: 'email',
                    placeholder: 'nome@escola.educa.gov.br' })}
                    <div className="form-row">
                        <label className="form-field">Disciplina<select name="disciplina" value={form.disciplina} onChange={change}>
                            <option value="">Selecione</option>
                            <option>Matemática</option>
                            <option>Ciências</option>
                            <option>História</option>
                            </select>{errors.disciplina &&
                            <small>{errors.disciplina}</small>}
                        </label>
                        <label className="form-field">Ano<select name="ano" value={form.ano} onChange={change}>
                            <option value="">Selecione</option>
                            {[6,7,8,9].map((n) => <option key={n}>{n}º ano</option>)}
                            </select>
                            {errors.ano && <small>{errors.ano}
                                </small>}</label>
                    </div>
                    {field('Tema do roteiro', 'tema', { placeholder: 'Ex.: Frações equivalentes' })}
                    <div className="form-row">
                        {field('Quantidade de questões (3 a 10)', 'questoes', { type: 'number', min: 3, max: 10 })}
                        {field('Data em que pretende usar', 'data', { type: 'date' })}
                    </div>
                    <button className="button" type="submit">Enviar solicitação</button>
                    {sent && <p className="form-success">Pedido registrado para visualização. Nenhum dado foi enviado a um servidor.</p>}
                </form>;
}