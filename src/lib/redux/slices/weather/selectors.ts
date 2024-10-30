import { HourlyWeather, Weather } from "../../../api-types"
import { ReduxState } from "../../store"
import { WeatherState } from "./weather-slice"

export const selectWeatherState = (state: ReduxState): WeatherState =>
  state.weather

export const hasWeatherApiError = (state: ReduxState): boolean =>
  selectWeatherState(state).isApiError

export const selectCurrentTime = (state: ReduxState): number =>
  selectWeatherState(state).time

export const selectWeather = (state: ReduxState): Weather | null =>
  selectWeatherState(state).weather

export const selectHourly = (state: ReduxState): HourlyWeather | null =>
  selectWeather(state)?.hourly ?? null

export const selectTimeTable = (state: ReduxState): string[] | null =>
  selectHourly(state)?.time ?? null

export const selectTemperatures = (state: ReduxState): number[] | null =>
  selectHourly(state)?.temperature_2m ?? null

export const selectTemperatureByTime =
  (currentTime: number) =>
  (state: ReduxState): number | null => {
    const timeListString: string[] | null = selectTimeTable(state)
    const temperatures: number[] | null = selectTemperatures(state)

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
