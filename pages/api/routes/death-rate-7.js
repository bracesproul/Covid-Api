const death_rate_7 = require('../data/death_rate_7.json'); // BROKEN

export default function handler(req, res) {
    res.status(200).json(death_rate_7)
}