class Suma {
    constructor(v = 0) {
        this.val = v
    }

    suma(v) {
        this.val += v
        return this
    }
}

const valor = new Suma(1)

valor
    .suma(1)
    .suma(2)
    .suma(3)
    .suma(4)
    .suma(5)

console.log(valor)

// el patron de cadena de responsabilidad se basa en encapsular un dato
// e ir agregandole metodos para alterar el valor que tiene