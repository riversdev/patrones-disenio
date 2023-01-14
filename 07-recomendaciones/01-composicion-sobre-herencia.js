// herencia
// class Persona {
//     constructor() {
//         this.nombre = 'lala'
//     }

//     saludar() {
//         console.log(`Hola! soy ${this.nombre}`)
//     }
// }

// class Perro extends Persona {

// }


// composicion
const saludar = name => console.log(`hola! soy ${name}`)
const despedir = () => console.log(`Adios!`)
const dormir = () => console.log(`Zzzzzz....`)

const persona = {
    nombre: 'lala',
    saludar: function () { saludar(this.nombre) }
}

class Persona {
    constructor() {
        this.nombre = 'lala'
    }

    saludar() {
        saludar(this.nombre)
    }

    despedir() {
        despedir()
    }

    dormir() {
        dormir()
    }
}

class Robot {
    constructor() {
        this.nombre = 'lele'
    }

    saludar() {
        saludar(this.nombre)
    }

    despedir() {
        despedir()
    }
}