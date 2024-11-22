// // Fução para somar dois números
// function adicionar(a, b) {
//     return a + b;
// };

// // Função para calcular o dobro do número
// function calcularDobro(valor) {
//     return valor * 2;
// };

// // TESTE DE INTEGRAÇÃO
// describe("Teste de integração", function () {
//     it("Deve somar dois números e calcular o dobro", function () {
//         const resultadoSoma = adicionar(2, 3);
//         const resultadoDobro = calcularDobro(resultadoSoma);
//         //Verifica se o dobro está correto
//         expect(resultadoDobro).toBe(10);
//     });
//     it("Deve calcular o dobro mesmo com números negativos", function () {
//         const resultadoSoma = adicionar(-2, -3);
//         const resultadoDobro = calcularDobro(resultadoSoma);
//         //Verifica se o dobro está correto
//         expect(resultadoDobro).toBe(-10);
//     })
// });

// // Função para concatenar duas partes do texto
// function concatenarTexto(parte1, parte2) {
//     return parte1 + ' ' + parte2;
// };

// // Função para deixar os textos maiusculos
// function converter(texto) {
//     return texto.toUpperCase();
// };

// // TESTE DE INTEGRAÇÃO
// describe("Teste de integração", function () {
//     it("Deve juntar dois textos e tornar maiúsculo", function () {
//         const texto = concatenarTexto("Tudo", "bem");
//         const textoMaiusculo = converter(texto)
//         //Verifica se o texto está correto
//         expect(textoMaiusculo).toBe("TUDO BEM");
//     });
//     it("Deve lidar com String vazia", function () {
//         const texto = concatenarTexto("", "teste");
//         const textoMaiusculo = converter(texto)
//         //Verifica se o texto está correto
//         expect(textoMaiusculo).toBe(" TESTE");
//     });
// });



//1 --------------------------------------------------------

// Função para somar as notas
function somarNotas(a, b, c, d) {
    return a + b + c + d;
};

//Função para calcular a media das notas
function calcularMedia(valor) {
    return valor / 4;
};

//TESTE DE INTEGRAÇÃO
describe("Teste de integração", function () {
    it("Deve somar as notas", function () {
        const notas = somarNotas(2, 4, 6, 8);
        const media = calcularMedia(notas)
        expect(media).toBe(5);
    });
    it("Deve dizer se está aprovado", function () {
        const notas = somarNotas(2, 4, 6, 8);
        const media = calcularMedia(notas)
        if (media >= 7) {
            console.log("aprovado")
        }
        else {
            console.log("reprovado")
        }
    });
});

//2 --------------------------------------------------------

// Função para multiplicar
function multiplicar(a, b) {
    return a + b;
};

//Função para calcular o triplo
function calcularTriplo(valor) {
    return valor * 3;
};

//TESTE DE INTEGRAÇÃO
describe("Teste de integração", function () {
    it("Deve multiplicar os valores", function () {
        const multiplicacao = multiplicar(2, 4);
        const triplo = calcularTriplo(multiplicacao)
        expect(triplo).toBe(18);
    });
    it("Deve multiplicar os valores negativos", function () {
        const multiplicacao = multiplicar(-2, -4);
        const triplo = calcularTriplo(multiplicacao)
        expect(triplo).toBe(-18);
    });
    it("Deve multiplicar os valores negativos e positivos", function () {
        const multiplicacao = multiplicar(-2, 4);
        const triplo = calcularTriplo(multiplicacao)
        expect(triplo).toBe(6);
    });
});

//3 --------------------------------------------------------

// Função para calcular o desconto
function calcularDesconto(valorTotal) {
    let desconto;
    if (valorTotal <= 100) {
        desconto = valorTotal * 0.05;
    } else if (valorTotal >= 101 && valorTotal <= 500) {
        desconto = valorTotal * 0.10;
    } else {
        desconto = valorTotal * 0.15;
    }
    return desconto
};

// Função para aplicar o desconto
function aplicarDesconto(valorTotal, desconto) {
    return valorTotal - desconto
}

//Teste
describe("Teste de integração", function () {
    it("Deve verificar o desconto de 5% corretamente", function () {
        const desconto = calcularDesconto(100);
        const valorFinal = aplicarDesconto(100, desconto)
        expect(valorFinal).toBe(95);
    });
    it("Deve verificar o desconto de 10% corretamente", function () {
        // 100
        const desconto = calcularDesconto(101);
        const valorFinal = aplicarDesconto(101, desconto)
        expect(valorFinal).toBe(90.9);
        // 500 
        const desconto2 = calcularDesconto(500);
        const valorFinal2 = aplicarDesconto(500, desconto2)
        expect(valorFinal2).toBe(450);
    });
    it("Deve verificar o desconto de 15% corretamente", function () {
        const desconto = calcularDesconto(600);
        const valorFinal = aplicarDesconto(600, desconto)
        expect(valorFinal).toBe(510); 
    });
});