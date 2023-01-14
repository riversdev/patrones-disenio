class Api {
    constructor() {
        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                // return fetch

                case 'post':
                // return fetch

                default:
                    return
            }
        }
    }
}

class Api2 {
    constructor() {
        this.get = function (url, opts) {
            // return fetch
        }

        this.post = function (url, opts) {
            // return fetch
        }
    }
}

class ApiAdapter {
    constructor() {
        const api2 = new Api2()

        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                    return api2.get(url, opts)

                case 'post':
                    return api2.post(url, opts)

                default:
                    return
            }
        }
    }
}

const api = new Api()
api.operations('www.google.cl', { q: 1 }, 'get')

const api2 = new Api2()
api2.get('www.google.cl', { q: 1 })

const apiAdapter = new ApiAdapter()
apiAdapter.operations('www.google.cl', { q: 1 }, 'get')

// el patron adaptador sirve para implementar una nueva funcionalidad
// sin modificar el codigo legacy pero ahora este llamara a un adaptador
// que se encargara de llamar internamente a la nueva funcionalidad
// sin modificar todo el codigo legacy