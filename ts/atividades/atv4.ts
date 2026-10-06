function listaNomes(nome:string, qntd: number):string[]{
    const nomes: string[] = []

    for (let i = 0; i < qntd; i++) {
        nomes.push(nome)
    } return nomes
}

// type Fun = (texto:string,num:number) => string[]

// const fun1:Fun = (texto:string,num:number) => {
//     const nomes: string[] = []

//     for (let i = 0; i < num; i++)
//         nomes.push(texto)
//     return nomes
// }

// const lista = listaNomes("Rigel", 12)
// console.log(lista);