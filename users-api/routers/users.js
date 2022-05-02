const express = require('express');
const User = require('../models/users');

const router = express.Router();


// create user
router.post('/users', async (req, res) => {
    try{
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }catch(error){
        res.status(400).send(error);
    }
});

// get all users
router.get('/users', async (req, res) => {
    try{
        const result = await User.find();
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

// get specific user
router.get('/users/:username', async (req, res) => {
    try{
        const result = await User.findOne({username : req.params.username});
        !result ? res.status(500).send('Invalid username') : res.status(200).send(result)
    }catch(error){
        res.status(404).send(error);
    }
});

// update user
router.patch('/users/:username', async (req, res) => {
    try{
        const result = await User.findOneAndUpdate({username : req.params.username}, req.body, {new : true});
        !result ? res.status(500).send('Invalid username') : res.status(201).send(result)
    }catch(error){
        res.status(404).send(error);
    }
});

// delete user
router.delete('/users/:username', async (req, res) => {
    try{
        const result = await User.findOneAndDelete({username : req.params.username});
        !result ? res.status(500).send('Invalid username') : res.status(201).send(result)
    }catch(error){
        res.status(404).send(error);
    }
});


module.exports = router;



