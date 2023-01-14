module.exports.get = (axios) => async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(data)

    res.send(data)
}