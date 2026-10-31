# Atividade 2 — Trilha do Saber


Este repositório contém os componentes da **Atividade 2**, composta pela aplicação web desenvolvida em Next.js e pela documentação/pesquisa de indicadores municipais registrada no caderno de acompanhamento.

---

## Trabalho em Dupla

Conforme registrado no documento **`Caderno_2026_2.pdf`**, a elaboração desta atividade foi realizada de forma **colaborativa e em constante auxílio mútuo**. Todas as etapas de pesquisa, estruturação dos dados e implementação do código foram discutidas e construídas em conjunto.

> **Nota sobre o Cronograma:** Devido à nossa participação no **SICITE** (Seminário de Iniciação Científica e Tecnológica) na semana passada, as datas das entregas e atividades foram estendidas e reajustadas para esta semana.

---

## Estrutura do Projeto

Abaixo está a descrição detalhada do papel de cada arquivo no projeto:

```text
Atividade_2/
├── app/
│   ├── roteiros/
│   │   └── [id]/
│   │       ├── not-found.js
│   │       └── page.js
│   ├── solicitar/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── Caderno_2026_2.pdf

```
**Observação:** o login do professor e o registro de pedidos são demonstrativos e funcionam apenas no navegador. O projeto não possui back-end nem banco de dados.

##Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

```text
http://localhost:3000
```

## Gerar a versão estática

```bash
npm run build
```

O Next.js gera a versão estática na pasta `out/`.

## Documentação

O arquivo `Caderno_2026_2.pdf` pode ser adicionado à raiz do repositório como documentação da pesquisa, metodologia, fontes de dados e organização do projeto.

## Autoras

Gabrielle Kyoko e Ana Luiza
