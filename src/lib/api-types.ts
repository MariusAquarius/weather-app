
export type TempUnits = "°C" | "°F"
export type TimeZone = "GMT" | "UST" | "CEST"

export type Weather = {
	latitude: number,
	longitude: number,
	elevation: number,
	generationtime_ms: number,
	utc_offset_seconds: number,
	timezone: TimeZone,
	timezone_abbreviation: TimeZone,
	hourly: {
		time: string[]
		temperature_2m: number[]
	},
	hourly_units: {
		temperature_2m: TempUnits
	}
}