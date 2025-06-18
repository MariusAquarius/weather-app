import React, { ReactElement, useEffect } from "react"
import { Separator } from "../shadcn/ui/separator"
import Spinner from "../lib/Spinner"
import WeatherPreview from "./WeatherPreview"
import WeatherInfo from "./WeatherInfo"
import {
  selectCityName,
  selectCoordinates,
  selectCountry,
  useLazyGetCurrentWeatherByCoordsQuery,
  useSelector,
} from "@/src/lib/redux"
import { Coordinates } from "@/src/lib/api-types"

type WeatherContentProps = {
  isDisabled?: boolean
}

export default function WeatherContent({
  isDisabled,
}: WeatherContentProps): ReactElement {
  const city: string | null = useSelector(selectCityName)
  const country: string | null = useSelector(selectCountry)
  const coordinates: Coordinates | null = useSelector(selectCoordinates)

  const [triggerWeatherApi, { isFetching }] =
    useLazyGetCurrentWeatherByCoordsQuery()

  function getWeatherContent(): ReactElement {
    if (isDisabled) {
      return (
        <div className="text-xl text-center">Please enter a search value</div>
      )
    } else if (isFetching) {
      return <Spinner size="xl" />
    } else {
      return (
        <div className="flex flex-col items-center justify-center gap-8">
          <div
            className="text-xl text-center"
            data-testid="weather-content-headline"
          >
            <span className="text-light-gray">Weather in</span> {city},{" "}
            {country}
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
            <WeatherPreview />
            <div className="h-[12vh] hidden lg:block">
              <Separator orientation="vertical" className="bg-dark-gray" />
            </div>
            <WeatherInfo />
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    if (coordinates) {
      triggerWeatherApi(coordinates)
    }
  }, [coordinates])

  return (
    <div
      className="flex flex-col min-h-[50vh] items-center justify-center px-40"
      data-testid="app-weather-content"
    >
      {getWeatherContent()}
    </div>
  )
}
