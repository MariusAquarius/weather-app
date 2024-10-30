import React, { ReactElement } from "react"
import {
  selectWeather,
  useGetWeatherForBerlinQuery,
  useSelector,
  useDispatch,
  weatherApi,
} from "../lib/redux"
import { Weather } from "../lib/api-types"
import ButtonWA from "./lib/ButtonWA"

export default function Home(): ReactElement {
  const dispatch = useDispatch()
  const currentWeather: Weather | null = useSelector(selectWeather)

  const { isLoading } = useGetWeatherForBerlinQuery()

  function handleRefreshButtonClick(): void {
    dispatch(weatherApi.util.resetApiState())
  }

  return (
    <header className="min-h-screen flex flex-col items-center justify-center">
      <ButtonWA isLoading={isLoading} onClick={handleRefreshButtonClick}>
        Refresh
      </ButtonWA>
      <p>
        {currentWeather
          ? currentWeather.hourly.temperature_2m[0]
          : "weather is not updated"}
      </p>
    </header>
  )
}
