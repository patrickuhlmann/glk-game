# GlkGame

The official webpage that you find under https://glk.cevimail.ch

Metrics:
[![Buildstatus](https://github.com/patrickuhlmann/glk-game/workflows/Build%20Main/badge.svg)](https://github.com/patrickuhlmann/glk-game/actions/workflows/build_main.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=patrickuhlmann_glk-game&metric=coverage)](https://sonarcloud.io/dashboard?id=patrickuhlmann_glk-game)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=patrickuhlmann_glk-game&metric=ncloc)](https://sonarcloud.io/dashboard?id=patrickuhlmann_glk-game)

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Run with docker

```
docker build -t glk-game/website .
docker run -it -p 8080:80 --rm --name glk-game glk-game/website
```

The webpage is then available under localhost:8080

## Test (on Heroku)

https://glk-game.herokuapp.com/
