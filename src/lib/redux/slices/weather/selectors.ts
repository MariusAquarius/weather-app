import { Weather } from "../../../api-types"
import { ReduxState } from "../../store"

export const selectWeather = (state: ReduxState): Weather | null => state.weather
