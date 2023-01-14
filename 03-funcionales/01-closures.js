const f = () => {
    const x = 'lala'

    console.log(x)
}

f()

// alcance lexico de las funciones
// alcance global
// alcance privado

// esto no es mas que usar las variables en donde se debe xd


// const f2 = x => () => console.log(x)
const f2 = x => {
    return () => console.log(`Rayos ${x}!`)
}

f2('rivers')()