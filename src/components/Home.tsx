import React, { ReactElement } from "react"
import {
  useGetWeatherForBerlinQuery,
  useDispatch,
  weatherApi,
  updateCurrentTime,
} from "../lib/redux"
import ButtonWA from "./lib/ButtonWA"
import WeatherContent from "./lib/WeatherPreview"

export default function Home(): ReactElement {
  const dispatch = useDispatch()
  const { isLoading } = useGetWeatherForBerlinQuery()

  function handleRefreshButtonClick(): void {
    dispatch(updateCurrentTime())
    dispatch(weatherApi.util.resetApiState())
  }

  return (
    <header className="min-h-screen flex flex-col items-center justify-center">
      <ButtonWA isLoading={isLoading} onClick={handleRefreshButtonClick}>
        Refresh
      </ButtonWA>
      <WeatherContent />
    </header>
  )
}
