import Dispositivo from "./Dispositivo"

export default class Computador extends Dispositivo {
    marca: string
    SO: string
    RAM: number
    CPU:string
    kernel:string
    constructor(marca:string, SO:string, RAM:number, CPU:string,kernel:string){
        super()
        this.marca = marca
        this.SO = SO
        this.RAM = RAM
        this.CPU = CPU
        this.kernel = kernel
    }
    programar(){
        if(!this.estado){
            console.log("Não tem como programar com o computador desligado.");
            return
        }
        console.log('console.log("Hello, World!")')
    }
}