import React, { ReactElement } from "react"
// @ts-expect-error - as no type definitions are needed for the weather icons
import { WiDaySunny } from "weather-icons-react"

type WeatherIconProps = {
  size?: number
}

export default function WeatherIcon({
  size = 80,
}: WeatherIconProps): ReactElement {
  return <WiDaySunny size={size} />
}
