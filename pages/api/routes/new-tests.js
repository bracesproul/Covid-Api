const new_tests = require('../data/new_tests.json'); // BROKEN

export default function handler(req, res) {
    res.status(200).json(new_tests)
}