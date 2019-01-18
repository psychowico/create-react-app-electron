This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run instructions

You have two ways to run the app. First is direct on your host system.
Just follow the commands below to do this.

Second one is to use docker. It's preffered way, because there is no certainty
that your host system will have proper version of `node.js` and other dependencies
(Electron depends on many libs that are hosted on dev machine).
If you want to use docker way, please make sure you have newest docker installed
(tested on `18.09.1-ce`).
Then, follow the command in next steps, but prefix all of them by this:
```bash
docker-compose run --rm web ...
```

E.g.
```
docker-compose run --rm web yarn
docker-compose run --rm web yarn start
docker-compose run --rm web yarn start-electron
```

To avoid repetition of `docker-compose run --rm ` I advice to use system alias, e.g. `dcrun` that cover this prefix.

## Install dependencies

To install dependencies just call yarn: `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start` and `yarn start-electron`

Runs the app server in the development mode. 
It will serve the content on [http://localhost:3000](http://localhost:3000) so it can be load by electron build.

After run the server, you should run `yarn start-electron`.

The app will restart if you make edits in electron main process code (`src/electron/**`).
The app content will reload if you make edits in electron renderer code. 
You will also see any lint errors in the console. 

#### Why I need to run two command instead just `yarn start`?
It is possible to handle it by one command, but it's make things less clean because nature of the electron.
Electron have "main" process, where it handle communication with OS and the "render" process that in our case
is handled by React code. In dev mode when we run both processes separately we have better, cleaner control of the errors
and app automatic reloading mechanism.

### `yarn test`

Launches the test runner in the interactive watch mode. 
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

It's not ready yet for the production usage with electron.

See the section  in create-react-app docs about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
