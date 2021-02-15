const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET users
router.get('/', async (req, res) => {
    const users = await loadUsersCollection();
    res.send(await users.find({}).toArray());    // returns all
});

// GET user by id
router.get('/:id', async (req, res) => {
    const users = await loadUsersCollection();
    res.send(await users.findOne({_id: new mongodb.ObjectID(req.params.id)}));    // returns one
});

// ADD user
router.post('/', async (req, res) => {
    const users = await loadUsersCollection();
    await users.insertOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date()
    });
    res.status(201).send();
});

// DELETE user
router.delete('/:id', async (req, res) => {
    const users = await loadUsersCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})


// Connect to users db conection
const db_uri = "mongodb+srv://db_user_1:user@contactsvueexpress.irntl.mongodb.net/contactsVueExpress?retryWrites=true&w=majority";
async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect(db_uri, {
        useNewUrlParser: true
    });

    return client.db('contactsVueExpress').collection('users');
}


module.exports = router;