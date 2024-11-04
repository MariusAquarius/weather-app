import { Locator, Page } from "@playwright/test"

export class HomePageObject {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto(): Promise<void> {
    await this.page.goto("/")
  }

  async getHeader(): Promise<Locator> {
    return await this.page.getByTestId("app-header")
  }

  async getWeatherContent(): Promise<Locator> {
    return await this.page.getByTestId("app-weather-content")
  }
}
