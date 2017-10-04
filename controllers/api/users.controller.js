var config = require('config.json');
var express = require('express');
var router = express.Router();

// routes
router.post('/authenticate', authenticateUser);
router.post('/register', registerUser);
router.get('/current', getCurrentUser);
router.put('/:_id', updateUser);
router.delete('/:_id', deleteUser);

module.exports = router;

function authenticateUser(req, res) {

}

function registerUser(req, res) {

}

function getCurrentUser() {

}

function updateUser(req, res) {

}

function deleteUser(req, res) {

}