//Data criação: 28/11/2023
//Autor: Jean Carlos Liandro
//Data da última alteração: 28/11/2023

// Verifica se um número digitado pelo usuário é positivo ou negativo. Mostra um alerta informando.


alert('Verifica se um número digitado pelo usuário é positivo ou negativo.');

let numeroEscolhido = prompt('Digite um número de sua escolha, positivo ou negativo');

if(numeroEscolhido >= 1 ){
    alert('O número que você digitou é positivo.')  
}

if(numeroEscolhido == 0 ){
    alert('O número zero é um número neutro, ou seja, não é nem positivo nem negativo.')
}

if(numeroEscolhido <= -1 ){
    alert('O número que você escolheu é negativo.')
}

