const cumulative_fatality_rate = require('../data/cumulative_fatality_rate.json');

export default function handler(req, res) {
    res.status(200).json(cumulative_fatality_rate)
}