# Enigma

Javascript GraphQL and REST API having HTTPS like security without using HTTPS 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Following are the softwares requried to get arena up and running.
* [Node.js](https://nodejs.org) - Chrome's V8 Javascript Engine
* [MongoDB](https://mongodb.org) - NoSQL Database

### Installing

- Install the packages mentioned in package.json file for getting all dependencies of the project.
  ```
  npm install --save
  ```
- Getting the configuration ready
  ```
  cp .env.example .env
  ```
- Starting the application
  ```
  npm run dev
  ```

- Setting the pre-push hook
  ```
  ./hooks.sh
  ```

## Linting the Code

- For linting the code
```
npm run lint -s
```

- For fixing the linting mistakes in code
```
npm run fix -s
```

### Nodejs Packages
[Express](https://expressjs.com) - Node.js Web Framework<br/>
[Nodemailer](http://npmjs.com/package/nodemailer) - Sending Emails<br/>
[Raven](https://www.npmjs.com/package/raven) - Sentry Error Monitoring<br/>

## Issues

Issues are managed via GitHub Issues [here](https://github.com/Swap76/Enigma/issues).

## Developers

* **Swapnil Shinde** - [Swap76](https://github.com/Swap76)

## License

This project is licensed under the Apache License. See the [LICENSE.md](LICENSE.md) file for details.