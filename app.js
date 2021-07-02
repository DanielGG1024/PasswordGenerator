
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

app.post('/',(req,res)=>{
    const password = generatePassword(req.body)
    res.render('index',{password:password})
})

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`)
})