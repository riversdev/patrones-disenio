// es una expresion de funcion que es ejecutada inmediatamente al definirla
// es necesaria en el patron modulo revelador

const iife = (() => {
    const x = 'Hola'

    console.log(x)
})()