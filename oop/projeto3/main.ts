import Computador from "./Computador";
import Dispositivo from "./Dispositivo";
import Telefone from "./Telefone";

const device1 = new Dispositivo()

device1.verificarEstado()
device1.onoff()
device1.verificarEstado()

const tel1 = new Telefone("123456789100")
const tel2 = new Telefone("12345678911")

tel1.adicionarContato("219999999990")
tel1.adicionarContato("219999999991")
tel1.adicionarContato("219999999992")
tel1.adicionarContato("219999999993")

console.log(tel1.contatos)
tel1.removerContato("219999999993")
console.log(tel1.contatos)

tel2.onoff()
tel2.verificarEstado()

const comp1 = new Computador("Lenobo", "Arch Linux", 22, "ryzen 9 9950x3d2", "lts")
const comp2 = new Computador("Sambung", "Debian", 8, "ryzen 5825U",    "bookworm" )

comp1.onoff()
comp1.verificarEstado()
comp1.programar()