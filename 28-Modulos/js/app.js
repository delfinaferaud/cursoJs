import nuevaFuncion, { nombreCliente as cliente, ahorro, mostrarInformacion, Cliente} from './cliente.js'
import { Empresa } from './empresa.js'

nuevaFuncion()

console.log(nombreCliente)
console.log(ahorro)
console.log(mostrarInformacion(nombreCliente, ahorro))


const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente.mostrarInformacion())

const empresa = new Empresa('Codigo con juan', 100, 'aprendizaje')
console.log(empresa.mostrarInformacion())