const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
// set template engine
app.engine('handlebars', exphbs({defaultLayouts:'main'}))
app.set('view engine','handlebars')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`)
})