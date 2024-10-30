import React, { ReactElement, useEffect } from "react"
import { selectWeather, updateWeather, useDispatch, useGetWeatherForBerlinQuery, useSelector } from "../lib/redux"
import { Weather } from "../lib/api-types"

export default function Home(): ReactElement {
  const dispatch = useDispatch()

  useGetWeatherForBerlinQuery()

  const currentWeather: Weather | null = useSelector(selectWeather)

  return (
    <header className="App-header">
      <p>
        {currentWeather 
        ? currentWeather.hourly.temperature_2m[0]
        : "weather is not updated"}
      </p>
    </header>
  )
}
