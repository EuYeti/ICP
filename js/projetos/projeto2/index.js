// theme(){
//     document.getElementById("darkcss");
// }


const list = []
const tagInput = document.getElementById("texto")
const tarefasContainer = document.getElementById("tarefas")

function add(){
    const tarefa = tagInput.value
    list.push(tarefa)
    update()
}

function remove(){
    const remove = tagInput.value

    for (let i = 0; i < list.length; i++){
        if (list[i] === remove)
            list.splice(i, 1)
    }
    update()
}

function update(){
    tarefasContainer.innerHTML = ""
    for (const tarefa of list){
        tarefasContainer.innerHTML += `<div class="tarefa-container">${tarefa}</div>`
    }
}