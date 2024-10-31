//general
export type WeatherBase = {
  latitude: number
  longitude: number
  elevation: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: TimeZone
  timezone_abbreviation: TimeZone
}

export type Weather = HourlyWeather | CurrentWeather

//search
export type CityResponse = {
  results: City[]
}
export type City = {
  longitude: number
  latitude: number
  name: string
  country: string
}

//hourly weather
export type HourlyWeather = WeatherBase & HourlyWeatherAttributes

export type HourlyWeatherContent = {
  time: string[]
  temperature_2m: number[]
}

export type HourlyWeatherAttributes = {
  hourly: HourlyWeatherContent
  hourly_units: {
    temperature_2m: TempUnits
  }
}

//current weather
export type CurrentWeather = WeatherBase & CurrentWeatherAttributes

export type CurrentWeatherContent = {
  temperature_2m: number
  relative_humidity_2m: number
  apparent_temperature: number
  is_day: number
  precipitation: number
  weather_code: WMOCode
  wind_speed_10m: number
  wind_gusts_10m: number
  precipitation_probability: number
}

export type CurrentWeatherAttributes = {
  current: CurrentWeatherContent
  current_units: {
    temperature_2m: TempUnits
  }
}

//misc
export type CityInfo = {
  long: number | null
  lat: number | null
  city: string | null
  country: string | null
}

export type TempUnits = "°C" | "°F"
export type TimeZone = "GMT" | "UST" | "CEST"
export type CardinalDirection =
  | "N"
  | "NE"
  | "E"
  | "SE"
  | "S"
  | "SW"
  | "W"
  | "NW"
export type WMOCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 96
  | 99
