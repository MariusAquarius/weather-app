import React, { ReactElement } from "react"
import { Temperature } from "../lib/Temperature"
import { Humidity } from "../lib/Humidity"
import {
  selectApparentTemperature,
  selectCurrentHumidity,
  selectCurrentPrecipitation,
  selectCurrentWindSpeed,
  useSelector,
} from "../../lib/redux"
import { Rainfall } from "../lib/Rainfall"
import { Velocity } from "../lib/Velocity"

export default function WeatherInfo(): ReactElement {
  const apparentTemperature: number | null = useSelector(
    selectApparentTemperature,
  )
  const humidity: number | null = useSelector(selectCurrentHumidity)
  const precipitation: number | null = useSelector(selectCurrentPrecipitation)
  const windSpeed: number | null = useSelector(selectCurrentWindSpeed)

  return (
    <div className="flex flex-col h-full w-[50vw] justify-start">
      <div>
        Feels like: <Temperature>{apparentTemperature}</Temperature>
      </div>
      <div>
        Humidity: <Humidity>{humidity}</Humidity>
      </div>
      <div>
        Precepitation: <Rainfall>{precipitation}</Rainfall>
      </div>
      <div>
        Wind speed: <Velocity>{windSpeed}</Velocity>{" "}
        <span className="text-gray">(10m above ground)</span>
      </div>
    </div>
  )
}
