import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// REDUX SLICE
export type CityState = {
  searchTerm: string | null
  lastSearched: string | null
}
const initialState: CityState = {
  searchTerm: null,
  lastSearched: null,
}
export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    updateSearchTerm(
      state: CityState,
      action: PayloadAction<{
        searchTerm: string
      }>,
    ) {
      const searchValue = action.payload.searchTerm
      state.searchTerm = searchValue ? searchValue : null
    },
    updateLastSearched(
      state: CityState,
      action: PayloadAction<{
        lastSearched: string | null
      }>,
    ) {
      state.lastSearched = action.payload.lastSearched
    },
  },
})

export const { updateSearchTerm, updateLastSearched } = citySlice.actions

// API SLICE
//const meteoGeoApiBaseUrl = "https://geocoding-api.open-meteo.com/v1/search"
