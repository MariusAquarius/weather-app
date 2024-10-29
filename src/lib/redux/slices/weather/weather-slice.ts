import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Weather } from "../../../api-types"

export type WeatherState = Weather | null

const initialState: WeatherState = null

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
      state = action.payload.newWeather ?? null 
      console.log(state)
    },
  },
})

export const { updateWeather } = weatherSlice.actions



const meteoApiBaseUrl = "https://api.open-meteo.com/v1/forecast";

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: meteoApiBaseUrl }),
  tagTypes: ['weather'],
  endpoints: (builder) => ({
    getWeatherForBerlin: builder.query<Weather, void>({
      query: () => `?latitude=52.5244&longitude=13.4105&hourly=temperature_2m`,
    }),
  }),
})

export const { useGetWeatherForBerlinQuery } = weatherApi