let wordList = [];
let word = "";
let wordSize = 6; // Agora ajustado para 5 letras
let l = 0; // Linha atual
let c = 0; // Coluna atual
let endGame = false;
let attempts = 6; // Número de tentativas

window.onload = function() {
    // Inicializa a lista de palavras com 5 letras
    wordList = ["logica"];
    let rand_index = Math.floor(Math.random() * wordList.length); // Gera número aleatório
    word = wordList[rand_index].toUpperCase(); // Define a palavra escolhida
    document.addEventListener("keyup", (e) => {
        processInput(e);
    });
    createBoard();
}

function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Limpa o conteúdo do tabuleiro
    
    for (let row = 0; row < attempts; row++) {
        for (let col = 0; col < wordSize; col++) {
            let tile = document.createElement('span');
            tile.id = `${row}-${col}`;
            tile.className = 'tile';
            board.appendChild(tile);
        }
    }
}

function processInput(e) {
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (c < wordSize) {
            let currTile = document.getElementById(l.toString() + '-' + c.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                c = c + 1;
            }
        }
    } else if (e.code == "Backspace") {
        if (c > 0 && c <= wordSize) {
            c = c - 1;
            let currTile = document.getElementById(l.toString() + '-' + c.toString());
            currTile.innerText = "";
        }
    } else if (e.code == "Enter" || e.code == "NumpadEnter") {
        update();
    }
}

function update() {
    let guess = "";
    for (let c = 0; c < wordSize; c++) {
        let currTile = document.getElementById(l.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess = guess + letter;
    }

    guess = guess.toUpperCase();
    console.log(guess);

    let correct = 0;
    let letterCount = {};

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        } else {
            letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    for (let c = 0; c < wordSize; c++) {
        let currTile = document.getElementById(l.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        letter = letter.toUpperCase();

        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct = correct + 1;
            letterCount[letter] = letterCount[letter] - 1;
        }
    }

    if (correct == wordSize) {
        endGame = true;
        document.getElementById("congrats-message").style.display = "block"; // Mostra a mensagem de Parabéns!
        setTimeout(function() {
            window.location.reload(); // Recarrega a página após 10 segundos
        }, 10000);
        return;
    }

    for (let c = 0; c < wordSize; c++) {
        let currTile = document.getElementById(l.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        letter = letter.toUpperCase();

        if (!currTile.classList.contains("correct")) {
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                letterCount[letter] = letterCount[letter] - 1;
            }
        }
    }

    l = l + 1; // nova linha
    c = 0; // volta a coluna

    // Verifica se todas as linhas foram usadas e se a palavra não foi acertada
    if (l >= attempts && !endGame) {
        document.getElementById("error-message").style.display = "block"; // Mostra a mensagem de erro
        setTimeout(function() {
            window.location.reload(); // Recarrega a página após 5 segundos
        }, 5000);
    }
}

