import User from "./Usuarios"

const user1 = new User(1, "asasfokf", "Linux>DOS")
const user2 = new User(2, "asasfokf", "Linux>WIND")
const user3 = new User(3, "asasfokf", "Linux>WIN")

// user1.mostrar()
// user2.mostrar()

if (user1.logar("email@email", "123"))
    console.log("Usuario logado")
else
    console.log("credencias incorretas")

user2.adicionarAmigos(user3)

user2.mostrar()

