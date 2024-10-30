import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Weather } from "../../../api-types"

// REDUX SLICE
export type WeatherState = {
  weather: Weather | null
  isApiError: boolean
}
const initialState: WeatherState = {
  weather: null,
  isApiError: false
}
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateWeather(
      state: WeatherState,
      action: PayloadAction<{
        newWeather: Weather | undefined
      }>,
    ) {
      state.weather = action.payload.newWeather ?? null 
    },
    updateWeatherApiError(
      state: WeatherState,
      action: PayloadAction<{
        isApiError: boolean
      }>,
    ) {
      state.isApiError = action.payload.isApiError
    },
  },
})

export const { updateWeather, updateWeatherApiError } = weatherSlice.actions


// API SLICE
const meteoApiBaseUrl = "https://api.open-meteo.com/v1/forecast";

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: meteoApiBaseUrl }),
  tagTypes: ['weather'],
  endpoints: (builder) => ({
    getWeatherForBerlin: builder.query<Weather, void>({
      query: () => `?latitude=52.5244&longitude=13.4105&hourly=temperature_2m`,
      onQueryStarted: async(_, {queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled
          // hand data to store if successful
          dispatch(updateWeather({newWeather: data}))
          dispatch(updateWeatherApiError({isApiError: false}))
        } catch(error) {
          console.error("An error occured while fetching weather api: ", error)
          dispatch(updateWeatherApiError({isApiError: false}))
        }
      }
    }),
    getWeatherByCoords: builder.query<Weather, {lat: number, long: number}>({
      query: (coords) => 
        `?latitude=${coords.lat}&longitude=${coords.long}&hourly=temperature_2m`,
      providesTags: ["weather"],
      onQueryStarted: async(args, {queryFulfilled, dispatch }) => {

      }
    })
  }),
})

export const { useGetWeatherForBerlinQuery, useGetWeatherByCoordsQuery } = weatherApi