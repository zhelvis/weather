# Weather
cli app for retrieving weather data by city name

---
## Instalation

Install dependencies:

```
    npm i
```

Add OpenWeatherMap API key in src/config.ts:

```
    export const METAWEATHER_API_URL = "https://www.metaweather.com";
    export const OPENWEATHERMAP_API_URL = "https://api.openweathermap.org";
    export const OPENWEATHERMAP_API_KEY = "YOUR API KEY HERE";
```

Build app:

```
    npm run build
```

Link local package:

```
    npm link
```
---
## Usage

```
    weather [command] [params]
```

command | params | description
---|---|---
`-h` | |display helper text
`-p` | `service` `city` | retrieve current whether data for city


list of available services:

- metaweather
- openweathermap

example request:

```
    weather -p metaweather moscow
```

example responce:
```
    {
        weather_state_name: 'Heavy Rain',
        min_temp: 3.95, // celsius
        max_temp: 11.49, // celsius
        wind_speed: 3.2118756294952577 // meters per second
    }
```

---

## Development

Dependencies:

Install pre-commit hooks (includes linting and testing)

```
    npm run prepare
```

Available npm scripts:

script | description
---|---
`npm prepare` | install pre-commit hook
`npm test` | run tests
`npm run eslint` | lint source code
`npm run pre-commit` | manually run pre-commit checking
`npm run docs`| generate documentation 
`npm run dev`|  rebuild on src changes
`npm run build`| build production code


Project structure:

```
src
 |--cli // handling user input
 |   |__mocks__ // mocked functions
 |   |__tests__ // test scripts
 |   |index.js // entry point
 |--services // retriving and transform data from API 
 |--types // ts interfaces, types, enums
 |--utils // helpers functions
 |index.ts // entry point
 |config.ts // shared constants

```










