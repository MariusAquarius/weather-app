import React, { PropsWithChildren, ReactElement } from "react"

export function PreviewTemperature({
  children,
}: PropsWithChildren): ReactElement {
  return <div>{children}°</div>
}
