import { CityResponse, CityInfo } from "../../../../lib/api-types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// REDUX SLICE
export type CityState = {
  searchTerm: string | null
  lastSearched: string | null
  isApiError: boolean
  city: CityInfo
}
const initialState: CityState = {
  searchTerm: null,
  lastSearched: null,
  isApiError: false,
  city: {
    long: null,
    lat: null,
    city: null,
    country: null,
  },
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
    updateCityApiError(
      state: CityState,
      action: PayloadAction<{
        isApiError: boolean
      }>,
    ) {
      state.isApiError = action.payload.isApiError
    },
    updateCityInfo(
      state: CityState,
      action: PayloadAction<{
        cityInfo: CityInfo
      }>,
    ) {
      state.city = action.payload.cityInfo
    },
  },
})

export const {
  updateSearchTerm,
  updateLastSearched,
  updateCityApiError,
  updateCityInfo,
} = citySlice.actions

// API SLICE
const meteoGeoApiBaseUrl = "https://geocoding-api.open-meteo.com/v1/search"

const geoApiParams = ["count=1", "language=de", "format=json"]

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({ baseUrl: meteoGeoApiBaseUrl }),
  tagTypes: ["city"],
  endpoints: builder => ({
    getCoordinatesOfCity: builder.query<CityResponse, string | null>({
      query: cityName =>
        `?${geoApiParams.map(param => param + "&")}name=${cityName}`,
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled
          // hand data to store if successful
          dispatch(
            updateCityInfo({
              cityInfo: {
                long: data.results[0].longitude,
                lat: data.results[0].latitude,
                city: data.results[0].name,
                country: data.results[0].country,
              },
            }),
          )

          dispatch(updateCityApiError({ isApiError: false }))
        } catch (error) {
          console.error("An error occured while fetching geo api: ", error)
          dispatch(updateCityApiError({ isApiError: true }))
        }
      },
    }),
  }),
})

export const {
  useGetCoordinatesOfCityQuery,
  useLazyGetCoordinatesOfCityQuery,
} = cityApi
