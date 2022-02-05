const current_icu = require('../data/current_icu.json');

export default function handler(req, res) {
    res.status(200).json(current_icu);
}