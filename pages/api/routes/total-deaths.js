const total_deaths = require('../data/total_deaths.json');

export default function handler(req, res) {
    res.status(200).json(total_deaths);
}