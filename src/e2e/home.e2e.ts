import { test, expect } from "@playwright/test"
import { HomePageObject } from "./page-objects/home.page"

let homePage: HomePageObject

test.beforeEach(async ({ page }) => {
  homePage = new HomePageObject(page)
  await homePage.goto()
})

test("has header component", async () => {
  const headerVisible = (await homePage.getHeader()).isVisible()
  expect(headerVisible).toBeTruthy()
})

test("has weather content component", async () => {
  const weatherContentVisible = (await homePage.getWeatherContent()).isVisible()
  expect(weatherContentVisible).toBeTruthy()
})
