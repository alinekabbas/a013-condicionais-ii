//Reescreva os códigos do arquivo script.js utilizando o if ternário.

//1.
const nome = prompt("Me diga seu nome")

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, " + nome)

//2.

const idade = Number(prompt("Qual é a sua idade?"))

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista")