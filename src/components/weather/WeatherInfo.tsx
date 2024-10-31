import React, { ReactElement } from "react"
import { Temperature } from "../lib/Temperature"
import { Humidity } from "../lib/Humidity"
import {
  selectApparentTemperature,
  selectCurrentHumidity,
  selectCurrentPrecipitation,
  selectCurrentWindDirection,
  selectCurrentWindGusts,
  selectCurrentWindSpeed,
  useSelector,
} from "../../lib/redux"
import { Rainfall } from "../lib/Rainfall"
import { Velocity } from "../lib/Velocity"
import { CardinalDirection } from "@/src/lib/api-types"
import { Compass } from "lucide-react"

export default function WeatherInfo(): ReactElement {
  const apparentTemperature: number | null = useSelector(
    selectApparentTemperature,
  )
  const humidity: number | null = useSelector(selectCurrentHumidity)
  const precipitation: number | null = useSelector(selectCurrentPrecipitation)
  const windSpeed: number | null = useSelector(selectCurrentWindSpeed)
  const windGusts: number | null = useSelector(selectCurrentWindGusts)
  const windDirection: CardinalDirection | null = useSelector(
    selectCurrentWindDirection,
  )

  return (
    <div className="flex h-full w-[50vw] justify-center lg:justify-start">
      <div className="flex flex-row gap-4 md:gap-12">
        <div className="flex flex-col justify-center lg:justify-start gap-2">
          <span className="text-light-gray">Feels like</span>
          <span className="text-light-gray">Humidity</span>
          <span className="text-light-gray">Precepitation</span>
          <span className="text-light-gray flex gap-2">
            Wind speed
            <div className="text-gray flex gap-1">
              <div className="flex items-center">
                (<Compass className="w-4 h-4" />
              </div>
              <div>{windDirection})</div>
            </div>
          </span>
          <span className="text-light-gray">Wind gusts</span>
        </div>
        <div className="flex flex-col justify-end gap-2 text-right">
          <div>
            <Temperature>{apparentTemperature}</Temperature>
          </div>
          <div>
            <Humidity>{humidity}</Humidity>
          </div>
          <div>
            <Rainfall>{precipitation}</Rainfall>
          </div>
          <div>
            <Velocity>{windSpeed}</Velocity>
          </div>
          <div>
            <Velocity>{windGusts}</Velocity>
          </div>
        </div>
      </div>
    </div>
  )
}
