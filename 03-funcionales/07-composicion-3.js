const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
]

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} anio(s)`

const traePrimerInfante = compose(
    formato,
    formateo,
    head,
    filter(x => x.edad < 2)
)

// compose arma un arreglo con las funciones que se se pasan como parametro 
// y las ejecuta en orden de derecha a izquierda usando reduceRight
// retornando asi al final un valor que ha sido manipulado por todas las funciones

console.log(traePrimerInfante(users))