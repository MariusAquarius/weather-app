import React, { ReactElement } from "react"
import {
  WiDaySunny,
  WiDayRain,
  WiDayCloudy,
  WiDayWindy,
  WiNightClear,
  WiNightRain,
  WiNightCloudy,
  WiWindy,
  // @ts-expect-error - as no type definitions are needed for the weather icons
} from "weather-icons-react"

export type WeatherType = "sunny" | "rainy" | "cloudy" | "windy"

type WeatherIconProps = {
  weatherType: WeatherType
  isDay: boolean
  size?: number
}

export default function WeatherIcon({
  weatherType,
  isDay,
  size = 80,
}: WeatherIconProps): ReactElement {
  function getIcon(): ReactElement | null {
    if (weatherType === "sunny" && isDay) {
      return <WiDaySunny size={size} />
    }
    if (weatherType === "rainy" && isDay) {
      return <WiDayRain size={size} />
    }
    if (weatherType === "cloudy" && isDay) {
      return <WiDayCloudy size={size} />
    }
    if (weatherType === "windy" && isDay) {
      return <WiDayWindy size={size} />
    }
    if (weatherType === "sunny" && !isDay) {
      return <WiNightClear size={size} />
    }
    if (weatherType === "rainy" && !isDay) {
      return <WiNightRain size={size} />
    }
    if (weatherType === "cloudy" && !isDay) {
      return <WiNightCloudy size={size} />
    }
    if (weatherType === "windy" && !isDay) {
      return <WiWindy size={size} />
    }
    return null
  }
  return <>{getIcon()}</>
}
