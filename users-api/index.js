const express = require('express');
require('./db/connect');
const User = require('./models/users');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// create user
app.post('/users', async (req, res) => {
    try{
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }catch(error){
        res.status(400).send(error);
    }
});

// get all users
app.get('/users', async (req, res) => {
    try{
        const result = await User.find();
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

// get specific user
app.get('/users/:username', async (req, res) => {
    try{
        const result = await User.findOne({username : req.params.username});
        !result ? res.status(500).send('Invalid username') : res.status(200).send(result)
    }catch(error){
        res.status(404).send(error);
    }
});

// update user
app.patch('/users/:username', async (req, res) => {
    try{
        const result = await User.findOneAndUpdate({username : req.params.username}, req.body, {new : true});
        !result ? res.status(500).send('Invalid username') : res.status(201).send(result)
    }catch(error){
        res.status(404).send(error);
    }
});

// delete user
app.delete('/users/:username', async (req, res) => {
    try{
        const result = await User.findOneAndDelete({username : req.params.username});
        !result ? res.status(500).send('Invalid username') : res.status(201).send(result)
    }catch(error){
        res.status(404).send(error);
    }
});


app.listen(port, () => {console.log(`Server connected at ${port}`)});


