import {fill} from "../atividades/atv5.ts";

let list:number[] = []
fill(list,100, 100)

function findInList(list:number[],alvo:number){
    for(let i = 0; i < list.length;i++){
        if (alvo === list[i]){
            return i
        }
    }   
    return -1
}
const res = findInList(list,10)
console.log(res)