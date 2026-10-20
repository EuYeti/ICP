export default class Dispositivo {
    estado:boolean = false
    constructor(){
        
    }
    onoff(){
        this.estado = !this.estado
    }
    verificarEstado(){
        if(this.estado)
            console.log("ligado")
        else
            console.log("Desligado")
    }
}