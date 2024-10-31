import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// REDUX SLICE
export type CityState = {
  searchTerm: string | null
}
const initialState: CityState = {
  searchTerm: null,
}
export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    updateSearchTerm(
      state: CityState,
      action: PayloadAction<{
        searchTerm: string | null
      }>,
    ) {
      state.searchTerm = action.payload.searchTerm
    },
  },
})

export const { updateSearchTerm } = citySlice.actions

// API SLICE
//const meteoGeoApiBaseUrl = "https://geocoding-api.open-meteo.com/v1/search"
