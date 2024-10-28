import React, { ReactElement } from "react"
import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./lib/router/router"
import { ReduxProvider } from "./lib/redux/redux-provider"

export default function App(): ReactElement {
  return (
    <div className="App">
      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </div>
  )
}
