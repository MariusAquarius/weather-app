import React, { ReactElement, useEffect } from "react"
import { selectWeather, updateWeather, useDispatch, useGetWeatherForBerlinQuery, useSelector } from "../lib/redux"
import { Weather } from "../lib/api-types"

export default function Home(): ReactElement {
  const dispatch = useDispatch()

  const { data, error, isSuccess } = useGetWeatherForBerlinQuery()

  const currentWeather: Weather | null = useSelector(selectWeather)

  useEffect(() => {
    dispatch(updateWeather({ newWeather: data }))
  }, [data])

  return (
    <header className="App-header">
      <a
        className="App-link"
        onClick={() => dispatch(updateWeather({ newWeather: data }))}
      >
        update WeatherState
      </a>
      <p>
        {data 
        ? data.hourly.temperature_2m[0]
        : "weather is not updated"}
      </p>
    </header>
  )
}
