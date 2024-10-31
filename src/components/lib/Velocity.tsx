import React, { PropsWithChildren, ReactElement } from "react"

export function Velocity({ children }: PropsWithChildren): ReactElement {
  return <span>{children} km/h</span>
}
