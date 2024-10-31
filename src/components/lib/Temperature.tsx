import React, { PropsWithChildren, ReactElement } from "react"

export function Temperature({ children }: PropsWithChildren): ReactElement {
  return <span>{children} °C</span>
}
