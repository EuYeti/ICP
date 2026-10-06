type Fun = (texto1:string,texto2:string) => string

const nomeFuncao:Fun = (a:string,b:string):string =>{
    return a + b
}
const a1 = nomeFuncao("formula", "1")
const b1 = nomeFuncao("guarda-", "chuva")

console.log(a1)
console.log(b1)