import { Page } from "@playwright/test"

export class HeaderPageObject {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }
}
