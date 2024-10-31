import { ReduxState } from "../../store"
import { CityState } from "./city-slice"

export const selectCityState = (state: ReduxState): CityState => state.city

export const selectSearchTerm = (state: ReduxState): string | null =>
  selectCityState(state).searchTerm
