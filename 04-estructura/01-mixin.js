// mixin
let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`)
    },
    despedir() {
        console.log(`Chao ${this.nombre}`)
    }
}

// clase
class Usuario {
    constructor(nombre) {
        this.nombre = nombre
    }
}

// aumentamos el prototipo
Object.assign(Usuario.prototype, mixin)

// console.log({ mixin, Usuario })

const usuario = new Usuario('Rivers')
usuario.saludar()