import React, { ReactElement } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./lib/router/router"
import { ReduxProvider } from "./lib/redux/redux-provider"

export default function App(): ReactElement {
  return (
    <div className="min-h-screen text-white bg-black">
      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </div>
  )
}
