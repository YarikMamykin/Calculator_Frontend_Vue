# Calculator_Frontend_Vue

## Table of contents
1. [Description](#Description)
- [List of technologies used](#ListOfTech)
- [Implementation key parts](#KeyImplParts)
2. [Project setup and run](#ProjectSetupAndRun)

## Description
Calculator frontend part implementation written in Vue3 js.
This project is dedicated to get intouch with Vue and Vuex frameworks 
and gain more practical knowledge in communication of frontend and backend.

Works in pair with [Calculator_Backend](https://github.com/YarikMamykin/Calculator_Backend)

### Implementation key parts <a name="KeyImplParts"/>
- Various buttons pads to provide user input: numbers, operations, output manipulation, etc.
- Calculation history 
- Cool visual effects on buttons :)
- Support of connection with backend via WebSocket

### List of technologies used <a name="ListOfTech"/>
1. [Vue3.js CLI](https://cli.vuejs.org/);
2. [Vuex](https://vuex.vuejs.org/guide/).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
Project supports runtime pre-configuration within next environment variables:
```
VUE_APP_HOST=localhost # host where backend is running 
VUE_APP_PORT=8080 # port where backend is running 
```

To start application run:
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

