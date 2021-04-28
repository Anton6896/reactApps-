const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

let connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
        })
        console.log('connected to db ')

    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB