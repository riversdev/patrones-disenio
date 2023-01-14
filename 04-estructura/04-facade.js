const https = require('https')

const get = url => new Promise((resolve, reject) => {
    const comp = url.split('/')
    const host = comp.shift()
    const options = {
        hostname: host,
        path: '/' + comp.join('/'),
        method: 'GET'
    }

    const req = https.request(options, res => {
        res.setEncoding('utf-8')

        let body = ''

        res.on('data', d => {
            body += d
        })

        res.on('end', d => {
            const parsed = JSON.parse(body)

            resolve(parsed)
        })
    })

    req.on('error', reject)

    req.end()
})

const main = async () => {
    const users = await get('jsonplaceholder.typicode.com/users')

    console.log({ users })
}

main()

// facade se basa en tomar una implementacion compleja
// simplificandola utilizando un wrapper encima
// wrapper es una funcion que llama a otras funciones