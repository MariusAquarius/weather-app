This project serves as a sample project showcasing a weather app made with
React, TypeScript and Redux state management. It was initialized via
[Create React App](https://github.com/facebook/create-react-app).

## Getting Started

In the project directory, you can run:

### Development Server

`npm start`

Runs the app in the development mode. Open
[http://localhost:3000](http://localhost:3000) to view the weather app in your
browser of choice.

### Build

`npm run build`

Builds the app for production to the `build` folder. It correctly bundles React
in production mode and optimizes the build for the best performance.

### Linting

`npm run lint`

Runs the linting process for the entire application with eslint. You can also
fix linting problems which can be fixed by eslint itself via

`npm run lint:fix`

### Run E2E tests with playwright

`npm test:e2e`

This will trigger e2e testing of the application. Alternatively playwright can
be run in UI mode:

`npm test:e2e:ui`
