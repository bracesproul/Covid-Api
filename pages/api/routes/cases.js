const cases = require('../data/cases.json');

export default function handler(req, res) {
    res.status(200).json(cases)
}