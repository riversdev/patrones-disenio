const user = new User()

const init = () => {
    user.on('login', userLoggedIn)
}

const userLoggedIn = () => {
    // usuario inicio sesion
}

app.init()

// en lugar de la app
const login = () => {
    // logica de inicio de sesion
    // ...

    // luego
    user.trigger('login')
}

login()

// la aplicacion debe escuchar al usuario