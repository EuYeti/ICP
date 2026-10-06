function fun(){
    const h1 = document.getElementById("titulo")
    const text = document.getElementById("caixa")
    h1.innerText = text.value
    text.value = ""
}
function plus(){
    const content = document.getElementById("counter")
    let num = Number(content.innerText)
    num++
    content.innerText = num
}
function minus(){
    const content = document.getElementById("counter")
    let num = Number(content.innerText)
    num--
    content.innerText = num
}
function exchange(){
    const area = document.getElementById("area")
    const space = document.getElementById("space")
    space.innerHTML = area.value
}