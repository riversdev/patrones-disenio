const Comander = (() => {
    const o = {
        comprar: x => {
            console.log(`Comprando ${x}`)
        },
        vender: x => {
            console.log(`Vendiendo ${x}`)
        }
    }

    return {
        run: (comando, argumentos) => {
            if (!o[comando]) {
                console.log('El comando no existe !')
                return
            }

            o[comando](argumentos)
        }
    }
})()

Comander.run('comprar', 'Mazda')
Comander.run('lala', 'nel')

// el patron comando tiene un objeto con los metodos a ejecutar
// asi en lugar de llamar a un metodo del objeto se llama a un metodo especifico
// esta interfaz o metodo es encargado de ejecutar algun metodo del objeto de metodos privado