/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  HashRouter
} from 'react-router-dom'
import App from './routes/App'

ReactDOM.createRoot(document.getElementById('app')).render(
      <App />
)

// import React from 'react'
// // eslint-disable-next-line no-unused-vars
// import ReactDOM from 'react-dom'
// import App from '@routes/App'

// import { createRoot } from 'react-dom/client'
// const container = document.getElementById('app')
// const root = createRoot(container) // createRoot(container!) if you use TypeScript
// root.render(<App tab />)

// // ReactDOM.render(<App />, document.getElementById('app'));
