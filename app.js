
const express = require('express')
const exphbs = require('express-handlebars')


const app = express()
const port = 3000
const generatePassword = require('./generate_password')

// set template engine
app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const options = req.body
    const password = generatePassword(options)
    res.render('index', { password: password, options: options })
})

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`)
})