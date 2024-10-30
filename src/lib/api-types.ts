export type TempUnits = "°C" | "°F"
export type TimeZone = "GMT" | "UST" | "CEST"

export type HourlyWeather = {
  time: string[]
  temperature_2m: number[]
}

export type Weather = {
  latitude: number
  longitude: number
  elevation: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: TimeZone
  timezone_abbreviation: TimeZone
  hourly: HourlyWeather
  hourly_units: {
    temperature_2m: TempUnits
  }
}
