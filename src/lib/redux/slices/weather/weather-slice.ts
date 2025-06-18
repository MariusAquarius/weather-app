import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Coordinates, CurrentWeather, HourlyWeather } from "@/src/lib/api-types"

// REDUX SLICE
export type WeatherState = {
  isApiError: boolean
  time: number
}
const initialState: WeatherState = {
  isApiError: false,
  time: Date.now(),
}
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
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

export const { updateWeatherApiError } = weatherSlice.actions

// API SLICE
const meteoWeatherApiBaseUrl = "https://api.open-meteo.com/v1/forecast"

const weatherApiParams = [
  "temperature_2m",
  "relative_humidity_2m",
  "apparent_temperature",
  "is_day",
  "precipitation",
  "weather_code",
  "wind_speed_10m",
  "wind_gusts_10m",
  "wind_direction_10m",
  "precipitation_probability",
]

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: meteoWeatherApiBaseUrl }),
  tagTypes: ["weather"],
  endpoints: builder => ({
    getCurrentWeatherByCoords: builder.query<CurrentWeather, Coordinates>({
      query: (coords: Coordinates) =>
        `?latitude=${coords.latitude}&longitude=${coords.longitude}&current=${weatherApiParams.map(param => param + ",")}`,
      providesTags: ["weather"],
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled
          dispatch(updateWeatherApiError({ isApiError: false }))
        } catch (error) {
          console.error("An error occurred while fetching weather api: ", error)
          dispatch(updateWeatherApiError({ isApiError: true }))
        }
      },
    }),
    getHourlyWeatherByCoords: builder.query<HourlyWeather, Coordinates>({
      query: (coords: Coordinates) =>
        `?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m`,
      providesTags: ["weather"],
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled
          dispatch(updateWeatherApiError({ isApiError: false }))
        } catch (error) {
          console.error("An error occurred while fetching weather api: ", error)
          dispatch(updateWeatherApiError({ isApiError: true }))
        }
      },
    }),
  }),
})

export const { useLazyGetCurrentWeatherByCoordsQuery } = weatherApi
