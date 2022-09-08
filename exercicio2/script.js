let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

//Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

switch (nacionalidade) {
    case "brasileira":
        console.log("Você é do Brasil!");
        break;
    case "argentina":
        console.log("Você é da Argentina!");
        break;
    case "uruguaia":
        console.log("Você é do Uruguai!");
        break
    case "chilena":
        console.log("Você é do Chile!");
        break
    case "colombiana":
        console.log("Você é da Colômbia!");
        break;
    default:
        console.log("nacionalidade não encontrada");
        break;
}