class MacBook {
    precio() {
        return 1000
    }
}

// otra manera de aplicar decoradores a una instancia es crear una funcion que modifique sus propiedades o metodos

const memoria = mac => {
    const v = mac.precio()

    mac.precio = function () {
        return v + 200
    }
}

const macBook = new MacBook()
memoria(macBook)

console.log(macBook.precio())