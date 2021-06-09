[![AutoRun](https://github.com/rayliuca/CanadaTravelAdvisoryAPI/actions/workflows/node.js.yml/badge.svg)](https://github.com/rayliuca/CanadaTravelAdvisoryAPI/actions/workflows/node.js.yml) ![Last Commit](https://img.shields.io/github/last-commit/rayliuca/CanadaTravelAdvisoryAPI)



# CanadaTravelAdvisoryAPI

Get request https://rayliu.ca/CanadaTravelAdvisoryAPI/CanadaTravelAdvisory.json or http://rayliuca.github.io/CanadaTravelAdvisoryAPI/CanadaTravelAdvisory.json
to get the advisories in the JSON format (can't guarantee accuracy or safety).

Please use the official sources on [this page](https://open.canada.ca/data/en/dataset/bef2ebb3-ca9a-485f-aaff-5dc36eb89426) or this link: https://data.international.gc.ca/travel-voyage/index-updated.json

This script was originally developed for my [Global Affairs Canada Travel Advisories Viz](https://public.tableau.com/app/profile/ray.liu/viz/GlobalAffairsCanadaTravelAdvisoriesMap/Dashboard1) on Tableau Public when the official API was never updated (in the early COVID days). Now, for obvious reasons, it is finally linked to the newest source. I made this repo just to try out GitHub Actions.

## Method

On the [Advisory page](https://travel.gc.ca/travelling/advisories), the data is "hard-coded" in the source when the page is generated as the indexUpdatedDataJSON variable. It is fairly easy to rip that part of the code out of the html page and generate a json file.
