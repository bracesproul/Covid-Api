## Overview

# What is this?
This is a Next.js app I setup to host my API for my web app that displays statistics about the COVID-19 pandemic.

You can find that web app [here](https://covidstatistics.co/).

Inside this app we have a function that runs once a day to update the data.

It uses puppeteer to scrape from [Our World In Data](https://ourworldindata.org/)

It then updates a series of JSON files with the recent data.

Then inside of the /api folder there are a series of files with the routes to access that data.

Eventually I'll be adding another function that scrapes data going back to early 2020 for every country.