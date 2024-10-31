import React, { PropsWithChildren, ReactElement } from "react"

export function Humidity({ children }: PropsWithChildren): ReactElement {
  return <span>{children} %</span>
}
