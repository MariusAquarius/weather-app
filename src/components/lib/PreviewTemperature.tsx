import React, { PropsWithChildren, ReactElement } from "react"

export function PreviewTemperature({
  children,
}: PropsWithChildren): ReactElement {
  return (
    <div>
      <div className="text-6xl relative">
        {children}°
        <div className="text-xl font-bold text-light-gray absolute bottom-[-0.1rem] right-1">
          C
        </div>
      </div>
    </div>
  )
}
