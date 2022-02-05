// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const default_response = {
  request: "GET",
  status: 200,
  message: "Success",
  urls: {
      all_data: "https://covid-data-and-api.herokuapp.com/get-data/data",
      total_cases: "https://covid-data-and-api.herokuapp.com/get-data/total_cases",
      total_deaths: "https://covid-data-and-api.herokuapp.com/get-data/total_deaths",
      current_hospitalized: "https://covid-data-and-api.herokuapp.com/get-data/current_hospitalized",
      current_icu: "https://covid-data-and-api.herokuapp.com/get-data/current_icu",
      daily_cases: "https://covid-data-and-api.herokuapp.com/get-data/cases",
      daily_deaths: "https://covid-data-and-api.herokuapp.com/get-data/deaths",
      death_rate_7: "https://covid-data-and-api.herokuapp.com/get-data/death_rate_7",
      cumulative_fatality_rate: "https://covid-data-and-api.herokuapp.com/get-data/cumulative_fatality_rate",
      new_tests: "https://covid-data-and-api.herokuapp.com/get-data/new_tests",
      vaccines_administered: "https://covid-data-and-api.herokuapp.com/get-data/vaccines_administered",
      people_fully_vaccinated: "https://covid-data-and-api.herokuapp.com/get-data/people_fully_vaccinated"
  },
  request_date: new Date().toLocaleString()
}


export default function handler(req, res) {
  res.status(200).json(default_response)
}
