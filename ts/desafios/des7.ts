import { fill } from "../atividades/atv5";

const numList:number[] = []
const mult5:number[] = []
const mult10:number[] = []
fill(numList, 100, 100)

function divPor5(num:number){
    
        return num
}
for(let i = 0; i < numList.length; i++){
    if (i != 0 && (i % 5) === 0)
        mult5.push((i + 5) * 3)
    else
        mult10.push(i*10)
}

console.log(mult5);
console.log(mult10);
let len = mult10.length + mult5.length
for (let i = 0; i < len; i++){
    
}