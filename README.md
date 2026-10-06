# Weather App

React city weather interface using Axios and OpenWeatherMap to display temperature, humidity and wind speed.

<p dir="rtl">نمایش وضعیت آب‌وهوای شهر با دما، رطوبت و سرعت باد.</p>

[Deployment link](https://weather-er.vercel.app) · [Source](https://github.com/Erfan-Ebrahimi/weather-er)

## Stack

React · Axios · OpenWeatherMap · Create React App

## What's inside

- City search submitted with Enter
- Current conditions and feels-like temperature
- Humidity and wind speed

## Local setup

```bash
git clone https://github.com/Erfan-Ebrahimi/weather-er.git
cd weather-er
npm ci
npm start
```

Create a production build with `npm run build`.

## Project layout

- `src/App.js` — search, API request and weather display
- `src/` — app entry and styles
- `public/` — static application assets

## Project notes

The current source requests OpenWeatherMap with imperial units. API access depends on the provider and a valid key. Review API configuration before deploying your own copy; client-side keys remain visible to browser users.

---

[Erfan Ebrahimi](https://github.com/Erfan-Ebrahimi)
