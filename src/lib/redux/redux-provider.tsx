import { reduxStore } from "./store"
import { Provider } from "react-redux"
import React, { PropsWithChildren } from "react"

export function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={reduxStore}>{children}</Provider>
}
