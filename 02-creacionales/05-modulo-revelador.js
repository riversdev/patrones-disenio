const resultado = (() => { // IIFE es expresion de fuincion ejecutada inmediatamente
    const x = {}

    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }
})()

resultado.a()
resultado.b('queso', 'cabra')
resultado.a()
console.log(resultado.x) // x es undefined porque para resultado x es privado

// el patron modulo revelador consite en una IIFE que contiene
// las constantes privadas
// y el retorno que es publico