import React, { PropsWithChildren, ReactElement } from "react"

export function Rainfall({ children }: PropsWithChildren): ReactElement {
  return <span>{children} mm</span>
}
