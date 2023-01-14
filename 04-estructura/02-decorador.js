class MacBook {
    constructor() {
        this.precio = 1000
        this.pantalla = 11.6
    }
}

// una manera de aplicar decoradores a una instancia es ir agregandole propiedades

const macBook = new MacBook()

macBook.agregarMemoria = function () {
    this.precio += 100
}

macBook.agregarMemoria()

console.log(macBook)