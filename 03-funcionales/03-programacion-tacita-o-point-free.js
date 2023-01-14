// La programacion tacita o point free es
// un paradigma o estilo de programacion donde
// no se le envian argumentos a una funcion
// es una tecnica usada cuando se quiere usar composicion
// o cuando se quiere eliminar codigo boiler plate o ordenar el codigo

const f = (ruta, callback) => {
    const computacionPesada = () => { }
    // muchas lineas de codigo despues...
    const resultado = computacionPesada()

    callback(resultado)
}

f('/users', (resultado) => {

})

// esto es como en express...
// app.get('/users', (req, res) => {

// })

// lo de arriba se puede convertir en lo siguiente como una buena practica

const manejaResultado = (resultado) => {

}

f('/users', manejaResultado)