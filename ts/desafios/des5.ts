import {fill} from "../atividades/atv5.ts";


let list:number[] = []
fill(list,100, 500)

let maiorValor:number = list[0]
let menorValor:number = list[0]
let mediaArit:number = 0

for (let i:number = 0; i < list.length; i++){
    let nextIndex: number = list[i+1]
    
    if (nextIndex < menorValor){
        menorValor = nextIndex
    }
    if (nextIndex > maiorValor){
        maiorValor = nextIndex
    }
    mediaArit += list[i]
}
mediaArit /= list.length

console.log(menorValor)
console.log(maiorValor)
console.log(mediaArit)
