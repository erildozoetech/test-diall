# Test Diall app

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [Expo] V48


## Usage

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `global`: Folder to store any common component that you use through your app (such as a generic button)
  - `navigation`: Folder to store the navigators.
  - `modules`: Folder that contains all your application screens/features.
    - `module`: Each screen should be stored inside its folder and inside it a file for its code and a separate in controller for local states and handles, layuout for UI, styles, types and tests.
      - `index.controller.tsx`
      - `index.layout.tsx`
      - `index.styles.ts`
      - `index.types.ts`
  - `store`: Folder to put all redux middlewares and the store.
  - `App.tsx`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.


### Running the project

#### iOS

- `npm install`
- `npx pod-install ios`
- `npm run start`
- `i`