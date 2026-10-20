import Dispositivo from "./Dispositivo";

export default class Telefone extends Dispositivo {
    ESIM: string
    contatos: Telefone[] = []

    constructor(ESIM: string) {
        super()
        this.ESIM = ESIM
    }
    adicionarContato(ESIM: string) {
        const tel = new Telefone(ESIM)
        this.contatos.push(tel)
    }
    removerContato(ESIM: string) {
        let indice: number = -1
        for (let i = 0; i < this.contatos.length; i++) {
            if (this.contatos[i].ESIM === ESIM) {
                indice = i
                break
            }
        }
        if (indice === -1)
            return
        this.contatos.splice(indice, 1)
    }

}