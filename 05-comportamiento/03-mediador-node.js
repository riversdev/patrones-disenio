const Emitter = require('events')

const emitter = new Emitter()

emitter.on('lala', console.log)

emitter.emit('lala', { lala: 'lolo' })