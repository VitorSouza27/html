let wordList = [];
let word = "";
let wordSize = 6; // Agora ajustado para 5 letras
let l = 0; // Linha atual
let c = 0; // Coluna atual
let endGame = false; // Variável que indica o fim do jogo
let attempts = 6; // Número de tentativas

// Função chamada quando a página é carregada
window.onload = function() {
    // Inicializa a lista de palavras com 5 letras
    wordList = ["logica", "codigo"]; // Corrigido para separar as palavras corretame
    let rand_index = Math.floor(Math.random() * wordList.length); // Gera número aleatório
    word = wordList[rand_index].toUpperCase(); // Define a palavra escolhida
    // Adiciona evento de teclado para processar entrada do usuário
    document.addEventListener("keyup", (e) => {
        processInput(e);
    });
    createBoard(); // Cria o tabuleiro do jogo
}

// Função para criar o tabuleiro de jogo
function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Limpa o conteúdo do tabuleiro
    
    // Cria tentativas no tabuleiro (6 linhas por 5 colunas)
    for (let row = 0; row < attempts; row++) {
        for (let col = 0; col < wordSize; col++) {
            let tile = document.createElement('span'); // Cria uma célula do tabuleiro
            tile.id = `${row}-${col}`; // Define o ID da célula
            tile.className = 'tile'; // Adiciona a classe 'tile'
            board.appendChild(tile); // Adiciona a célula ao tabuleiro
        }
    }
}

// Função que processa as entradas do teclado
function processInput(e) {
    // Verifica se a tecla pressionada é uma letra
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (c < wordSize) { // Verifica se ainda há colunas disponíveis
            let currTile = document.getElementById(l.toString() + '-' + c.toString()); // Seleciona a célula atual
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3]; // Insere a letra pressionada
                c = c + 1; // Avança para a próxima coluna
            }
        }
    } 
    // Se a tecla pressionada for 'Backspace', remove a última letra
    else if (e.code == "Backspace") {
        if (c > 0 && c <= wordSize) {
            c = c - 1; // Volta para a coluna anterior
            let currTile = document.getElementById(l.toString() + '-' + c.toString()); // Seleciona a célula atual
            currTile.innerText = ""; // Remove a letra
        }
    } 
    // Se a tecla pressionada for 'Enter', envia a tentativa
    else if (e.code == "Enter" || e.code == "NumpadEnter") {
        update(); // Chama a função que verifica a palavra
    }
}

// Função que verifica a palavra digitada pelo jogador
function update() {
    let guess = ""; // Variável que armazena a tentativa do jogador
    for (let c = 0; c < wordSize; c++) {
        let currTile = document.getElementById(l.toString() + '-' + c.toString()); // Seleciona a célula
        let letter = currTile.innerText; // Captura a letra da célula
        guess = guess + letter; // Constrói a palavra
    }

    guess = guess.toUpperCase(); // Converte para letras maiúsculas
    console.log(guess); // Exibe a palavra digitada no console

    let correct = 0; // Contador de letras corretas
    let letterCount = {}; // Armazena a contagem de letras da palavra alvo

    // Conta a ocorrência de cada letra na palavra alvo
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        } else {
            letterCount[letter] = 1;
        }
    }

    console.log(letterCount); // Exibe a contagem de letras no console

    // Verifica letras corretas (na posição correta)
    for (let c = 0; c < wordSize; c++) {
        let currTile = document.getElementById(l.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        letter = letter.toUpperCase();

        if (word[c] == letter) { // Se a letra está na posição correta
            currTile.classList.add("correct"); // Marca a célula como correta
            correct = correct + 1; // Incrementa o contador de letras corretas
            letterCount[letter] = letterCount[letter] - 1; // Diminui a contagem da letra
        }
    }

    // Se todas as letras estão corretas, o jogo termina
    if (correct == wordSize) {
        endGame = true; // Define o estado do jogo como terminado
        document.getElementById("congrats-message").style.display = "block"; // Mostra a mensagem de parabéns
        setTimeout(function() {
            window.location.reload(); // Recarrega a página após 10 segundos
        }, 10000);
        return; // Sai da função
    }

    // Verifica letras presentes (na palavra, mas em posição errada)
    for (let c = 0; c < wordSize; c++) {
        let currTile = document.getElementById(l.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        letter = letter.toUpperCase();

        if (!currTile.classList.contains("correct")) { // Se a célula não está marcada como correta
            if (word.includes(letter) && letterCount[letter] > 0) { // Se a letra está na palavra e ainda não foi completamente usada
                currTile.classList.add("present"); // Marca a célula como presente
                letterCount[letter] = letterCount[letter] - 1; // Diminui a contagem da letra
            }
        }
    }

    l = l + 1; // Passa para a próxima linha
    c = 0; // Reseta a coluna para 0

    // Verifica se todas as tentativas foram usadas e o jogo não terminou
    if (l >= attempts && !endGame) {
        document.getElementById("error-message").style.display = "block"; // Mostra a mensagem de erro
        setTimeout(function() {
            window.location.reload(); // Recarrega a página após 5 segundos
        }, 5000);
    }
}
