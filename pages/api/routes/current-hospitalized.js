const current_hospitalized = require('../data/current_hospitalized.json');

export default function handler(req, res) {
    res.status(200).json(current_hospitalized);
}