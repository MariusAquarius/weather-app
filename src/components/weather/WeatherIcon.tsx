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

export type DayTime = "day" | "night"

type WeatherIconProps = {
  weatherType: WeatherType
  dayTime: DayTime
  size?: number
}

export default function WeatherIcon({
  weatherType,
  dayTime,
  size = 80,
}: WeatherIconProps): ReactElement {
  function getIcon(): ReactElement | null {
    if (weatherType === "sunny" && dayTime === "day") {
      return <WiDaySunny size={size} />
    }
    if (weatherType === "rainy" && dayTime === "day") {
      return <WiDayRain size={size} />
    }
    if (weatherType === "cloudy" && dayTime === "day") {
      return <WiDayCloudy size={size} />
    }
    if (weatherType === "windy" && dayTime === "day") {
      return <WiDayWindy size={size} />
    }
    if (weatherType === "sunny" && dayTime === "night") {
      return <WiNightClear size={size} />
    }
    if (weatherType === "rainy" && dayTime === "night") {
      return <WiNightRain size={size} />
    }
    if (weatherType === "cloudy" && dayTime === "night") {
      return <WiNightCloudy size={size} />
    }
    if (weatherType === "windy" && dayTime === "night") {
      return <WiWindy size={size} />
    }
    return null
  }

  return <>{getIcon()}</>
}
