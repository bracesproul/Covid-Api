const total_cases = require('../data/total_cases.json');

export default function handler(req, res) {
    res.status(200).json(total_cases);
}