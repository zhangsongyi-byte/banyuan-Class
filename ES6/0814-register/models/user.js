const { usersModel } = require('./schema/user')

async function insertOne(data) {
    const model = new usersModel(data)

    await model.save()
}

async function find(query) {
    return usersModel.find(query)
}

async function findOne(query) {
    return usersModel.findOne(query)
}

module.exports = {
    insertOne,
    find,
    findOne
}