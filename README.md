# flux-with-hook-and-context-typescript

## A simple application demonstrating the flux pattern when using React, hooks, context API and TypeScript

The application uses the context to to manage the application state.\
It runs on port 3000 and makes http request against a mock serving a simple REST API on port 3005.
To add more mock data edit the file db.json 
Async operations are managed by the thunk middleware react-hook-thunk-reducer.\

 
## Getting started
In the project directory, run:

### `yarn install`

## To run the application

In the project directory, run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn run mock`
Runs the mock server based on json-server - https://github.com/typicode/json-server

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

