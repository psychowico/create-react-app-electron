This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
