const people_fully_vaccinated = require('../data/people_fully_vaccinated.json');

export default function handler(req, res) {
    res.status(200).json(people_fully_vaccinated)
}