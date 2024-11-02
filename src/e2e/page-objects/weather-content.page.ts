import { Page } from "@playwright/test"

export class WeatherContentPageObject {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }
}
