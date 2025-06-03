🧠 Exercícios Avançados de JavaScript
Bem-vindo(a)! 👋
Este repositório contém 9 exercícios organizados em três seções: estruturas de controle avançadas, funções/recursão e manipulação de arrays e objetos. Eles foram pensados para quem já tem noções básicas de lógica e deseja aprofundar seus conhecimentos em JavaScript moderno.

📋 Índice
✅ Pré-requisitos

⬇️ Como Baixar

▶️ Como Executar os Exercícios

📚 Lista de Exercícios

✅ Pré-requisitos
Antes de começar, verifique se você tem os seguintes itens instalados no seu computador:

Node.js
Permite executar JavaScript fora do navegador.
🔗 https://nodejs.org/
✅ Após instalar, digite node -v no terminal para confirmar a instalação.

Visual Studio Code (VS Code)
Editor de código leve e poderoso.
🔗 https://code.visualstudio.com/

Extensão "Code Runner" para o VS Code
Facilita a execução dos códigos diretamente no editor.

Para instalar:

Abra o VS Code

Clique no ícone de extensões (quatro quadrados à esquerda)

Busque por "Code Runner" (autor: Jun Han)

Clique em “Instalar”

⬇️ Como Baixar
Você pode obter os arquivos de duas maneiras:

1. Usando Git (recomendado)

bash
Copy
Edit
git clone https://github.com/SeuUsuario/NomeDoRepositorio.git
2. Download direto

Vá até a página do repositório

Clique em “Code” → “Download ZIP”

Extraia o conteúdo no seu computador

▶️ Como Executar os Exercícios
Usando o VS Code + Code Runner:

Abra a pasta do projeto no VS Code

Clique no arquivo que deseja executar (ex: ex1.js)

Pressione Ctrl+A (ou Cmd+A no macOS)

Clique com o botão direito no código

Escolha “Run Code”

Veja o resultado na aba "Output"

📚 Lista de Exercícios
🧩 Seção 1: Estruturas de Controle Avançadas
ex1.js – Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorna true para datas válidas (considerando anos bissextos) e false caso contrário.

ex2.js – Jogo de Adivinhação
Gere um número aleatório de 1 a 100. O usuário deve adivinhar com dicas de “mais alto” ou “mais baixo”, até acertar. Conte tentativas com while.

ex3.js – Palavras Únicas
Dada uma string com palavras repetidas, exiba apenas as palavras únicas em um array. Use if/else e for.

🔁 Seção 2: Funções e Recursão
ex4.js – Fatorial Recursivo
Implemente a função fatorial(n) recursivamente. Lance erro para n < 0 e retorne 1 para n === 0.

ex5.js – Debounce
Crie a função debounce(fn, delay), que só executa fn se não for chamada novamente dentro do intervalo definido.

ex6.js – Memoization
Implemente a função memoize(fn) que armazena os resultados anteriores de fn e evita reprocessamentos com os mesmos argumentos.

🧮 Seção 3: Arrays e Objetos Complexos
ex7.js – Mapeamento e Ordenação
Com um array produtos = [{ nome, preco }, …], retorne um array apenas com os nomes, ordenados por preço crescente.

ex8.js – Agrupamento por Propriedade
Dado vendas = [{ cliente, total }, …], gere um objeto onde cada chave é um cliente e o valor é a soma dos seus totais. Use reduce.

ex9.js – Conversão Entre Formatos
Implemente duas funções:

paresParaObjeto(pares) transforma um array de pares em objeto.

objetoParaPares(obj) faz a conversão inversa.

