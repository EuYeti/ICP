let i;
let a;
let b;

for(i = 10, a = 0, b = 0; i <= 1000; i++){
    if(i % 13 === 0){
        console.log("O número é divisível por 13");
        a++
    }
    if(i % 17 === 0){
        console.log("O número é divisível por 17");
        b++
    }    
}

console.log(a);
console.log(b)
