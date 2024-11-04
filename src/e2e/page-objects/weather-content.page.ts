import { Locator, Page } from "@playwright/test"

export class WeatherContentPageObject {
  readonly page: Page
  readonly weatherContentHeadline: Locator

  constructor(page: Page) {
    this.page = page
    this.weatherContentHeadline = this.page.getByTestId(
      "weather-content-headline",
    )
  }

  async getWeatherContentHeadlineText(): Promise<string | null> {
    return await this.weatherContentHeadline.textContent()
  }
}
