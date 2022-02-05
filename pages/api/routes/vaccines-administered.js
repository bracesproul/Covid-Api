const vaccines_administered = require('../data/vaccines_administered.json');

export default function handler(req, res) {
    res.status(200).json(default_response)
}