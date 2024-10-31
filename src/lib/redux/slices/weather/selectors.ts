import {
  CurrentWeather,
  CurrentWeatherContent,
  HourlyWeather,
  HourlyWeatherContent,
  WMOCode,
} from "../../../api-types"
import { ReduxState } from "../../store"
import { WeatherState } from "./weather-slice"

// general
export const selectWeatherState = (state: ReduxState): WeatherState =>
  state.weather

//curent weather
export const hasWeatherApiError = (state: ReduxState): boolean =>
  selectWeatherState(state).isApiError

export const selectCurrentTime = (state: ReduxState): number =>
  selectWeatherState(state).time

export const selectCurrentWeather = (
  state: ReduxState,
): CurrentWeather | null => selectWeatherState(state).currentWeather

export const selectCurrent = (
  state: ReduxState,
): CurrentWeatherContent | null => selectCurrentWeather(state)?.current ?? null

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

export const selectCurrentWindDirection = (state: ReduxState): number | null =>
  selectCurrent(state)?.wind_speed_10m ?? null

export const selectCurrentPrecipitationProbability = (
  state: ReduxState,
): number | null => selectCurrent(state)?.precipitation_probability ?? null

export const selectIsCurrentlyDay = (state: ReduxState): boolean | null => {
  const isDay = selectCurrent(state)?.is_day
  if (isDay !== undefined) return Boolean(isDay)
  else return null
}

// hourly weather
export const selectHourlyWeather = (state: ReduxState): HourlyWeather | null =>
  selectWeatherState(state).hourlyWeather

export const selectHourlyObject = (
  state: ReduxState,
): HourlyWeatherContent | null => selectHourlyWeather(state)?.hourly ?? null

export const selectHourlyTimeTable = (state: ReduxState): string[] | null =>
  selectHourlyObject(state)?.time ?? null

export const selectHourlyTemperatures = (state: ReduxState): number[] | null =>
  selectHourlyObject(state)?.temperature_2m ?? null

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

export const selectTemperatureNow = (state: ReduxState): number | null =>
  selectTemperatureByTime(selectCurrentTime(state))(state) ?? null
