// currying es la tecnica que transforma todas las funciones en funciones unarias
// son funciones que solo reciben un argumento

// const suma = (a, b) => a + b

// suma(1, 5)

const suma = a => b => a + b

suma(1)(5) // 6