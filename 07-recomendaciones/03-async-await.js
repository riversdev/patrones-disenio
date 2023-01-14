// callback hell
// const fn = () => {
//     ajax(() => {
//         ajax(() => {
//             ajax(() => {

//             })
//         })
//     })
// }

// const fn = () => {
//     ajax()
//         .then(() => {
//             const a = 1
//             return ajax()
//         })
//         .then(() => {
//             return ajax()
//         })
//         .then(() => {
//             return ajax()
//         })
//         .then(() => {
//             return ajax()
//         })
//         .then(() => {
//             console.log(a) // undefined
//             return ajax()
//         })
// }

const fn = async () => {
    const resultado = await ajax()
    const resultado2 = await ajax()
    const resultado3 = await ajax()
    const resultado4 = await ajax()
    const resultado5 = await ajax()
    const resultado6 = await ajax()
    const resultado7 = await ajax()
    const resultado8 = await ajax()
}