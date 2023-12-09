//Data criação: 28/11/2023
//Autor: Jean Carlos Liandro
//Data da última alteração: 28/11/2023

// -------Sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostra "Parabéns, você venceu!". Caso contrário, mostra "Tente novamente para ganhar.".


alert('Sistema de Pontuação.')

let pontuacao = 100;
let numeroEscolhido = prompt('Informe um valor número para pontuar. Valor entre 1 e 200.')

//Se a pontuação for maior ou igual a 100, mostra "Parabéns."
if(numeroEscolhido >= 100){
    alert('Parabéns, você venceu!')
}else{
    alert('Tente novamente para ganhar.')
}