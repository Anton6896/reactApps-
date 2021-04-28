const express = require('express')
const connectDB = require('./config/db')
let app = express()
let PORT = process.env.PORT || 5000

// connect data base
connectDB()

// init middleware (bodyParcer)
app.use(express.json({extendet: false}))


// home route
app.get('/', (req, res) => res.json({
    "msg": 'hello new page '
}))

// router
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


app.listen(PORT, () => {
    console.log(`listen in port : ${PORT}`)
})

/*
* "config": "^3.3.3"  <-- can use the default.json file as global var
* */