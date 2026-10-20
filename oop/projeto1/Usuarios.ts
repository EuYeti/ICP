export default class User {
    id: number
    email: string
    passwd: string
    listaAmigos: User[] = []

    constructor(id: number, email: string, passwd: string) {
        this.id = id
        this.email = email
        this.passwd = passwd
    }
    mostrar() {
        console.log(this)
    }
    logar(email: string, passwd: string) {
        return this.email === email && this.passwd === passwd
    }
    adicionarAmigos(user: User) {
        this.listaAmigos.push(user)
        user.listaAmigos.push(this)
    }
}
