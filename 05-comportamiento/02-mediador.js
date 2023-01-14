const Emitter = (() => {
    const topics = {}
    const hOP = topics.hasOwnProperty

    return {
        on: (topic, listener) => {
            if (!hOP.call(topics, topic)) topics[topic] = []
            topics[topic].push(listener)
        },
        emit: (topic, info) => {
            if (!hOP.call(topics, topic)) return
            topics[topic].forEach(item =>
                item(info != undefined ? info : {})
            )
        },
    }
})()

Emitter.on('lala', console.log)
Emitter.on('lala', console.log)

Emitter.emit('lala', { lala: 'lolo' })

// el patron mediador es el encargado de despachar los eventos a los que se han suscrito diferentes objetos