let idade = -25;
let idadeValida = idade >= 0;

if (idade >= 18 && idadeValida) {
    console.log("Você é maior de idade.");
} else if (idade < 18 && idadeValida) {
    console.log("Você é menor de idade.");
} else {
    console.log("Idade inválida.");
}