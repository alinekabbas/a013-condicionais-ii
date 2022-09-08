//Crie um código que receba um número por **prompt** 

const numUsuario = Number(prompt("Digite um número"))

//verifique se um número é divisível por 2 **ou** por 3
//1. Utilizando ifs aninhados

if (numUsuario % 2 === 0) {
    if (numUsuario % 3 === 0) {
        console.log("O Número " + numUsuario + " é divisível por 2 e 3.")
    } else {
        console.log("O número " + numUsuario + " não é divisível por 2 e 3.")
    }
} else {
    console.log("O número " + numUsuario + " não é divisível por 2 e 3.")
}

//2. Utilizando um operador lógico para unir duas operações relacionais

if(numUsuario % 2 === 0 && numUsuario % 3 === 0){
    console.log("O Número " + numUsuario + " é divisível por 2 e 3.")
}else{
    console.log("O número " + numUsuario + " não é divisível por 2 e 3.")
}