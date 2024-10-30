import React, { ReactElement } from "react"
import {
  selectWeather,
  useGetWeatherForBerlinQuery,
  useSelector,
} from "../lib/redux"
import { Weather } from "../lib/api-types"
import { Button } from "./ui/button"

export default function Home(): ReactElement {
  useGetWeatherForBerlinQuery()

  const currentWeather: Weather | null = useSelector(selectWeather)

  return (
    <header className="min-h-screen flex flex-col items-center justify-center">
      <Button></Button>
      <p>
        {currentWeather
          ? currentWeather.hourly.temperature_2m[0]
          : "weather is not updated"}
      </p>
    </header>
  )
}
