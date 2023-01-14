const Users = (() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    return {
        listar: async () => {
            const response = await fetch(apiUrl)
            const data = await response.json()

            console.log(data)
        },
        crear: async (user) => {
            const response = await fetch(apiUrl, { method: 'POST', body: JSON.stringify(user) })
            const data = await response.json()

            console.log(data)
        }
    }
})()

Users.listar()
// Users.crear({
//     id: 123123,
//     name: 'Alejandro Rios',
//     username: 'rivers'
// })

// solo es posible acceder a el retorno que son los metodos publicos
// Users.apiUrl es undefined desde fuera