import { Weather } from "../../../api-types"
import { ReduxState } from "../../store"
import { WeatherState } from "./weather-slice"

export const selectWeatherState = (state: ReduxState): WeatherState => state.weather

export const selectWeather = (state: ReduxState): Weather | null => 
    selectWeatherState(state).weather

export const hasWeatherApiError = (state: ReduxState): boolean => 
    selectWeatherState(state).isApiError
