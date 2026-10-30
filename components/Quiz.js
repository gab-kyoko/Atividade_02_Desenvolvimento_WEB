// Indica que roda no navegador do usuário
'use client';
import { useState } from 'react';

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});   // guarda as opções marcadas pelo aluno
  const [submitted, setSubmitted] = useState(false);  // controla se já clicou no botão "ver resultado"
  
  // calcula a quantidade de respostas corretas
  const correct = questions.filter((q) => answers[q.id] === q.resposta).length;

  return (
    <section className="quiz">
      <p className="eyebrow">FIXAÇÃO</p>
      <h2>Confira o que você aprendeu</h2>

      {/* Mapeia e desenha cada pergunta da lista */}
      {questions.map((question, index) => (
        <fieldset key={question.id}>
          {/* Título numerado da pergunta */}
          <legend>{index + 1}. {question.pergunta}</legend>

          {/* Mapeia e desenha as opções de resposta (bolinhas radio) */}
          {question.opcoes.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={answers[question.id] === option}
                // Quando o aluno clica na opção, salva no estado "answers"
                onChange={() => setAnswers({ ...answers, [question.id]: option })}
              />
              {option}
            </label>
          ))}

          {/* Exibe a resposta correta depois de clicar em "Ver resultado" */}
          {submitted && (
            <p className={answers[question.id] === question.resposta ? 'answer correct' : 'answer'}>
              Resposta: {question.resposta}
            </p>
          )}
        </fieldset>
      ))}

      {/* Botão para enviar e validar o resultado */}
      <button className="button" onClick={() => setSubmitted(true)}>
        Ver resultado
      </button>

      {/* Exibe o total de acertos após o envio */}
      {submitted && (
        <p className="result">
          Você acertou {correct} de {questions.length} questões.
        </p>
      )}
    </section>
  );
}