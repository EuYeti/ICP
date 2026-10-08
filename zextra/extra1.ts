function contador(texto:string){
    
    let listaPalavras:string[] = texto.split(" ")
    let palavras:number = texto.split(" ").length
    let listaTamanhos:number[] = []

    for (let i = 0; i < palavras ; i++){
        let s = listaPalavras[i].length
        listaTamanhos.push(s)
    }
    return{
        listaPalavras,
        palavras,
        listaTamanhos
    }
    
}
console.log(contador("batata doce é bom"));
