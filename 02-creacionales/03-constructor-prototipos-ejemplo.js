Object.prototype.log = function () {
    console.log(this)
}

const x = { a: 1 } // es lo mismo que new Object

x.log() // ahora todos los objetos tienen el metodo log

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        try {
            return this.replace(/^\s+|\s+$/g, "") // la expresion no es correcta !
        } catch (error) {
            return this
        }
    }
}

const y = "    lalala   ".trim()
y.log()

// String hereda de la clase de Object
// por eso es posible llamar .log() desde un String