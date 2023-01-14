const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
]

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const trace = x => y => console.log(x, y)

const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} anio(s)`

const traePrimerInfante = pipe(
    filter(x => x.edad < 2),
    trace('despues de filter'), // esta es una manera de hacer debuging // pero si se quiere dejarlo ahi hay que retornar de trace a y
    head,
    formateo,
    formato,
)

// pipe es la misma idea que compose pero de izquierda a derecha
// y usando reduce en lugar de reduceRight

console.log(traePrimerInfante(users))