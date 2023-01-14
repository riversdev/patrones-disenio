const modulo = {
    prop: 'mi prop',
    config: {
        lenguaje: 'es',
        cache: true,
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'Si' : 'No')
    }
}

modulo.isCacheEnabled()

// en el patron modulo se definen propiedades y metodos con los que es posible
// manipular las propiedades y tambien acceder a las propiedades que tiene