export default class ContaBancaria {
    private dinheiro: number = 0
    private mulitiplier: number = 1

    constructor(
        private cpf: string,
        private email: string,
        private nome: string,
        private senha: string,
        private id: number
    ) { }

    public getNome() {
        return this.nome.split(" ")[0]
    }
    public depositar(valor: number) {
        this.dinheiro += valor
    }
    public sacar(valor: number) {
        if (this.dinheiro - valor < 0)
            return true
        this.dinheiro -= valor
        return true
    }
    public transferir(other: ContaBancaria, valor: number) {
        if (this.sacar(valor))
            other.depositar(valor)
    }
}
