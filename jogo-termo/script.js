// Define a palavra que o jogador precisa descobrir
const palavraSecreta = "LOGICA"; // Pode trocar aqui para outra palavra
const tamanho = palavraSecreta.length; // Quantidade de letras da palavra
const tentativas = 6; // Número máximo de tentativas (linhas)

let linhaAtual = 0; // Linha atual que o jogador está preenchendo
let colunaAtual = 0; // Coluna atual (posição da letra na palavra)
let fimDeJogo = false; // Indica se o jogo já acabou

// Quando a página terminar de carregar, cria o tabuleiro e ativa o teclado
window.onload = () => {
    criarTabuleiro(); // Cria os blocos do tabuleiro na tela
    document.addEventListener("keydown", processarTecla); // Escuta o teclado
};

// Essa função cria os blocos do tabuleiro usando HTML via JavaScript
function criarTabuleiro() {
    const tabela = document.querySelector(".tabela");

    // Cria 'tentativas' linhas, cada uma com 'tamanho' colunas
    for (let l = 0; l < tentativas; l++) {
        for (let c = 0; c < tamanho; c++) {
            const bloco = document.createElement("div");
            bloco.classList.add("tile"); // Adiciona a classe .tile
            bloco.id = `${l}-${c}`; // Dá um ID como "0-0", "0-1", etc.
            tabela.appendChild(bloco); // Adiciona o bloco dentro da tabela
        }
    }

    // Define o estilo da grade no container
    tabela.style.display = "grid";
    tabela.style.gridTemplateColumns = `repeat(${tamanho}, 1fr)`; // Ex: 6 colunas iguais
    tabela.style.gap = "10px"; // Espaçamento entre blocos
    tabela.style.maxWidth = "90vw"; // Limita o tamanho da grade
    tabela.style.margin = "0 auto"; // Centraliza a grade
}

// Essa função é chamada toda vez que uma tecla é pressionada
function processarTecla(e) {
    if (fimDeJogo) return; // Se o jogo acabou, não faz nada

    if (e.key === "Backspace") {
        // Apaga uma letra
        if (colunaAtual > 0) {
            colunaAtual--;
            const bloco = document.getElementById(`${linhaAtual}-${colunaAtual}`);
            bloco.textContent = "";
        }
    } else if (e.key === "Enter") {
        // Envia a tentativa
        if (colunaAtual === tamanho) {
            checarPalavra();
        }
    } else if (/^[a-zA-Z]$/.test(e.key)) {
        // Adiciona uma letra (somente letras de A-Z)
        if (colunaAtual < tamanho) {
            const bloco = document.getElementById(`${linhaAtual}-${colunaAtual}`);
            bloco.textContent = e.key.toUpperCase(); // Converte para maiúsculo
            colunaAtual++;
        }
    }
}

// Essa função verifica se a tentativa do jogador está correta
function checarPalavra() {
    let tentativa = "";

    // Lê todas as letras da linha atual e monta a palavra
    for (let c = 0; c < tamanho; c++) {
        const bloco = document.getElementById(`${linhaAtual}-${c}`);
        tentativa += bloco.textContent;
    }

    // Impede validação se a palavra estiver incompleta
    if (tentativa.length !== tamanho) return;

    const tentativaUpper = tentativa.toUpperCase();
    const segredo = palavraSecreta.toUpperCase();

    // Cria um "contador" de letras da palavra correta
    const contador = {};
    for (const letra of segredo) {
        contador[letra] = (contador[letra] || 0) + 1;
    }

    // Primeiro passo: marca as letras certas (corretas e na posição certa)
    for (let c = 0; c < tamanho; c++) {
        const bloco = document.getElementById(`${linhaAtual}-${c}`);
        const letra = bloco.textContent.toUpperCase();

        if (letra === segredo[c]) {
            bloco.classList.add("correct"); // Letra certa no lugar certo
            contador[letra]--;
        }
    }

    // Segundo passo: marca as letras que estão na palavra, mas no lugar errado
    for (let c = 0; c < tamanho; c++) {
        const bloco = document.getElementById(`${linhaAtual}-${c}`);
        const letra = bloco.textContent.toUpperCase();

        if (!bloco.classList.contains("correct")) {
            if (segredo.includes(letra) && contador[letra] > 0) {
                bloco.classList.add("present"); // Letra existe, mas está no lugar errado
                contador[letra]--;
            } else {
                bloco.classList.add("absent"); // Letra não está na palavra
            }
        }
    }

    // Se a tentativa estiver 100% certa, o jogo termina
    if (tentativaUpper === segredo) {
        setTimeout(() => alert("🎉 Parabéns, você acertou!"), 100);
        fimDeJogo = true;
        return;
    }

    // Prepara para a próxima linha (tentativa seguinte)
    linhaAtual++;
    colunaAtual = 0;

    // Se acabou as tentativas e não acertou, mostra mensagem de fim de jogo
    if (linhaAtual === tentativas) {
        setTimeout(() => alert(`❌ Fim de jogo! A palavra era ${palavraSecreta}`), 100);
        fimDeJogo = true;
    }
}
