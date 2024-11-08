// TESTE.JS AQUI VAMOS DEIXAR O CODIGO FONTE

// function inteiro(inteiro) {
// return inteiro; //Essa é a solução mais para o erro
// }


//Fizz Buzz
// function jogo(numero){
//     if (numero %3 == 0){
//         return "Fizz"
//     }
//     if (numero %5 == 0){
//         return "Buzz"
//     }     
//     return numero;
// }



// const aluno = (nota,media) => {
// let resultado;
// let desempenho = 3;
// if(desempenho>=7){
//     resultado = "Aprovado";
// } else {
//     resultado = "Reprovado"
// }

// return resultado;
// }




// class Pessoa {
//     constructor (_nome, _sobrenome, _idade) {
//         let nome = _nome;
//         let sobrenome = _sobrenome;
//         let idade = _idade;

//         this.nome = () => {
//             return nome
//         }
//         this.nome_completo = () => {
//             return nome + ' ' + sobrenome
//         }
//         this.nome_tudo = () => {
//             return nome + ' ' + sobrenome + ' ' +'tem idade de ' + idade;
//         }
        
//     }}



// EXERCICIOS 

//ex. 1
function multiplicacao(a, b, c){
  
    let multiplicacao = a * b * c;

    return multiplicacao;
}

//ex. 2 
function divisao(a, b){

    let divisao = a / b;

    if(b == 0){
        return "Não é possível dividir por zero"
    } else {
        return divisao;
    }
   
}

//ex.3
function celsiusFahrenheit(c){

    let celsius = (c * 1.8) + 32

    return celsius;
}

function fahrenheitCelsius(f){

    let fahrenheit = (f - 32)/1.8

    return fahrenheit;
}


//ex.4
function calcularMedia(a, b, c){
    let media = (a + b + c) / 3;
    return media;
}

//ex.5
function contarCaracteres(){
    let frase = "amar";
    let caracteres = frase.length;
    return caracteres;
}

//ex.6 
function operacoes(a,b,c){
    let soma = a + b;
    let sub = a - b;
    let mult = a * b;
    let div = a / b;

    switch (c) {
        case "+": return soma
        case "-": return sub
        case "*": return mult
        case "/": return div
    }
}