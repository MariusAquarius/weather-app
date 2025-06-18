import {
  CardinalDirection,
  Coordinates,
  CurrentWeather,
  CurrentWeatherContent,
  HourlyWeather,
  HourlyWeatherContent,
  WMOCode,
} from "@lib/api-types"
import { ReduxState, selectCoordinates, weatherApi } from "@lib/redux"
import { WeatherState } from "@lib/redux/slices/weather/weather-slice"
import { getDirection } from "./utils"

// general
export const selectWeatherState = (state: ReduxState): WeatherState =>
  state.weather

//current weather
export const hasWeatherApiError = (state: ReduxState): boolean =>
  selectWeatherState(state).isApiError

export const selectCurrentWeatherFromApi = (
  state: ReduxState,
): CurrentWeather | null => {
  const coordinates: Coordinates | null = selectCoordinates(state)
  if (coordinates) {
    return (
      weatherApi.endpoints.getCurrentWeatherByCoords.select(coordinates)(state)
        .data ?? null
    )
  } else return null
}

export const selectCurrent = (
  state: ReduxState,
): CurrentWeatherContent | null =>
  selectCurrentWeatherFromApi(state)?.current ?? null

export const selectCurrentTemperature = (state: ReduxState): number | null =>
  selectCurrent(state)?.temperature_2m ?? null

export const selectCurrentHumidity = (state: ReduxState): number | null =>
  selectCurrent(state)?.relative_humidity_2m ?? null

export const selectApparentTemperature = (state: ReduxState): number | null =>
  selectCurrent(state)?.apparent_temperature ?? null

export const selectCurrentPrecipitation = (state: ReduxState): number | null =>
  selectCurrent(state)?.precipitation ?? null

export const selectCurrentWeatherCode = (state: ReduxState): WMOCode | null =>
  selectCurrent(state)?.weather_code ?? null

export const selectCurrentWindSpeed = (state: ReduxState): number | null =>
  selectCurrent(state)?.wind_speed_10m ?? null

export const selectCurrentWindGusts = (state: ReduxState): number | null =>
  selectCurrent(state)?.wind_speed_10m ?? null

export const selectCurrentWindDirection = (
  state: ReduxState,
): CardinalDirection | null => {
  const directionInDegrees = selectCurrent(state)?.wind_speed_10m
  if (directionInDegrees !== undefined) {
    return getDirection(directionInDegrees)
  } else {
    return null
  }
}

export const selectCurrentPrecipitationProbability = (
  state: ReduxState,
): number | null => selectCurrent(state)?.precipitation_probability ?? null

export const selectIsCurrentlyDay = (state: ReduxState): boolean | null => {
  const isDay = selectCurrent(state)?.is_day
  if (isDay !== undefined) {
    return Boolean(isDay)
  } else {
    return null
  }
}

// hourly weather
export const selectHourlyWeatherFromApi = (
  state: ReduxState,
): HourlyWeather | null => {
  const coordinates: Coordinates | null = selectCoordinates(state)
  if (coordinates) {
    return (
      weatherApi.endpoints.getHourlyWeatherByCoords.select(coordinates)(state)
        .data ?? null
    )
  } else return null
}

export const selectHourly = (state: ReduxState): HourlyWeatherContent | null =>
  selectHourlyWeatherFromApi(state)?.hourly ?? null

export const selectHourlyTimeTable = (state: ReduxState): string[] | null =>
  selectHourly(state)?.time ?? null

export const selectHourlyTemperatures = (state: ReduxState): number[] | null =>
  selectHourly(state)?.temperature_2m ?? null

export const selectTemperatureByTime =
  (currentTime: number) =>
  (state: ReduxState): number | null => {
    const timeListString: string[] | null = selectHourlyTimeTable(state)
    const temperatures: number[] | null = selectHourlyTemperatures(state)

    if (timeListString && temperatures) {
      const timeList = timeListString.map(timeString => +new Date(timeString))
      const indexOfClosestDate: number = timeList.findIndex(
        timeFromList => timeFromList < currentTime,
      )
      return temperatures[indexOfClosestDate]
    } else {
      return null
    }
  }
