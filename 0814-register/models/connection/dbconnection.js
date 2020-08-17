const mongoose = require('mongoose')

async function initConnection() {
    await mongoose.connect('mongodb://localhost/local', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (error) => {
        if (error) {
            console.log(error)
        }

        console.log('mongodb connection success')
    })
}


module.exports = {
    initConnection
}