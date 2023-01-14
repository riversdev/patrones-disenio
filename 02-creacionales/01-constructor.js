class MiClase {
    constructor(p1, p2) {
        this.propiedad1 = p1
        this.propiedad2 = p2
        this.metodo = () => {

        }
    }
}

const instancia = new MiClase(4, 2)
console.log(instancia)

// el patron constructor consiste en una clase en donde su constructor recibe propiedades
// para su uso haciendo referencia al this