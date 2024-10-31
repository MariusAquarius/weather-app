import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CurrentWeather, HourlyWeather } from "../../../api-types"

// REDUX SLICE
export type WeatherState = {
  currentWeather: CurrentWeather | null
  hourlyWeather: HourlyWeather | null
  isApiError: boolean
  time: number
}
const initialState: WeatherState = {
  currentWeather: null,
  hourlyWeather: null,
  isApiError: false,
  time: Date.now(),
}
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateCurrentWeather(
      state: WeatherState,
      action: PayloadAction<{
        currentWeather: CurrentWeather | undefined
      }>,
    ) {
      state.currentWeather = action.payload.currentWeather ?? null
    },
    updateHourlyWeather(
      state: WeatherState,
      action: PayloadAction<{
        hourlyWeather: HourlyWeather | undefined
      }>,
    ) {
      state.hourlyWeather = action.payload.hourlyWeather ?? null
    },
    updateWeatherApiError(
      state: WeatherState,
      action: PayloadAction<{
        isApiError: boolean
      }>,
    ) {
      state.isApiError = action.payload.isApiError
    },
    updateCurrentTime(state: WeatherState) {
      state.time = Date.now()
    },
  },
})

export const {
  updateCurrentWeather,
  updateHourlyWeather,
  updateWeatherApiError,
  updateCurrentTime,
} = weatherSlice.actions

// API SLICE
const meteoApiBaseUrl = "https://api.open-meteo.com/v1/forecast"

const currentWeatherParams = [
  "temperature_2m",
  "relative_humidity_2m",
  "apparent_temperature",
  "is_day",
  "precipitation",
  "weather_code",
  "wind_speed_10m",
  "wind_gusts_10m",
  "wind_direction_10m",
]

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: meteoApiBaseUrl }),
  tagTypes: ["weather"],
  endpoints: builder => ({
    getCurrentWeatherForBerlin: builder.query<CurrentWeather, void>({
      query: () =>
        `?latitude=52.5244&longitude=13.4105&current=${currentWeatherParams.map(param => param + ",")}`,
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled
          // hand data to store if successful
          dispatch(updateCurrentWeather({ currentWeather: data }))
          dispatch(updateWeatherApiError({ isApiError: false }))
        } catch (error) {
          console.error("An error occured while fetching weather api: ", error)
          dispatch(updateWeatherApiError({ isApiError: false }))
        }
      },
    }),
    getCurrentWeatherByCoords: builder.query<
      CurrentWeather,
      { lat: number; long: number }
    >({
      query: coords =>
        `?latitude=${coords.lat}&longitude=${coords.long}&current=${currentWeatherParams.map(param => param + ",")}`,
      providesTags: ["weather"],
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled
          // hand data to store if successful
          dispatch(updateCurrentWeather({ currentWeather: data }))
          dispatch(updateWeatherApiError({ isApiError: false }))
        } catch (error) {
          console.error("An error occured while fetching weather api: ", error)
          dispatch(updateWeatherApiError({ isApiError: false }))
        }
      },
    }),
    getHourlyWeatherForBerlin: builder.query<HourlyWeather, void>({
      query: () => `?latitude=52.5244&longitude=13.4105&hourly=temperature_2m`,
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled
          // hand data to store if successful
          dispatch(updateHourlyWeather({ hourlyWeather: data }))
          dispatch(updateWeatherApiError({ isApiError: false }))
        } catch (error) {
          console.error("An error occured while fetching weather api: ", error)
          dispatch(updateWeatherApiError({ isApiError: false }))
        }
      },
    }),
    getHourlyWeatherByCoords: builder.query<
      HourlyWeather,
      { lat: number; long: number }
    >({
      query: coords =>
        `?latitude=${coords.lat}&longitude=${coords.long}&hourly=temperature_2m`,
      providesTags: ["weather"],
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled
          // hand data to store if successful
          dispatch(updateHourlyWeather({ hourlyWeather: data }))
          dispatch(updateWeatherApiError({ isApiError: false }))
        } catch (error) {
          console.error("An error occured while fetching weather api: ", error)
          dispatch(updateWeatherApiError({ isApiError: false }))
        }
      },
    }),
  }),
})

export const {
  useGetCurrentWeatherForBerlinQuery,
  useGetCurrentWeatherByCoordsQuery,
  useGetHourlyWeatherForBerlinQuery,
  useGetHourlyWeatherByCoordsQuery,
} = weatherApi
