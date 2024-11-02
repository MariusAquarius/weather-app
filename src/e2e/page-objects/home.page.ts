import { Page } from "@playwright/test"
import { HeaderPageObject } from "./header.page"
import { WeatherContentPageObject } from "./weather-content.page"

export class HomePageObject {
  readonly page: Page
  readonly header: HeaderPageObject
  readonly weatherContent: WeatherContentPageObject

  constructor(
    page: Page,
    header: HomePageObject,
    weatherContent: WeatherContentPageObject,
  ) {
    this.page = page
    this.header = header
    this.weatherContent = weatherContent
  }
}
