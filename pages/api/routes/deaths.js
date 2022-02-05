const deaths = require('../data/deaths.json');

export default function handler(req, res) {
    res.status(200).json(deaths)
}