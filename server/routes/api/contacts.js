const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET contacts
router.get('/', async (req, res) => {
    const contacts = await loadContactsCollection();
    res.send(await contacts.find({}).toArray());    // returns all
});

// GET contact by id
router.get('/:id', async (req, res) => {
    const contacts = await loadContactsCollection();
    res.send(await contacts.findOne({_id: new mongodb.ObjectID(req.params.id)}));    // returns one
});

// ADD contact
router.post('/', async (req, res) => {
    const contacts = await loadContactsCollection();
    await contacts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// DELETE contact
router.delete('/:id', async (req, res) => {
    const contacts = await loadContactsCollection();
    await contacts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})


// Connect to contacts db conection
const db_uri = "mongodb+srv://db_user_1:user@contactsvueexpress.irntl.mongodb.net/test?retryWrites=true&w=majority";
async function loadContactsCollection() {
    const client = await mongodb.MongoClient.connect(db_uri, {
        useNewUrlParser: true
    });

    return client.db('contactsVueExpress').collection('contacts');
}


module.exports = router;