const perro = {
    raza: 'Kilterrier',
    ladrar: function () {
        console.log(`Guau!, sou un ${this.raza}`)
    }
}

// Object.create() crea un objeto pero con el prototipo de su argumento
const kiltro = Object.create(perro)

kiltro.ladrar()
console.log(kiltro) // kiltro no muestra las propiedades y esto es porque se encuentran en el prototipo

kiltro.raza = 'Super perro!'
kiltro.ladrar()