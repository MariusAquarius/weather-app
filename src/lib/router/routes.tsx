import Home from "../../components/Home"
import React, { ReactElement } from "react"

type Route = {
  path: string
  element: ReactElement
}

export const ROUTES: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
]
