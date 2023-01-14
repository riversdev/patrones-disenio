class MiClase {
    constructor(p1, p2) {
        this.propiedad1 = p1
        this.propiedad2 = p2
    }

    metodo() {
        // este es un metodo de prototipo
    }
}

const instancia = new MiClase(4, 2)
console.log(instancia)

// el patron constructor con prototipos consiste en una clase en donde su constructor recibe propiedades
// para su uso haciendo referencia al this
// imprimir la instancia no muestra los metodos pero es posible verlos en el navegador como prototipos