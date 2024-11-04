import { test, expect, Response } from "@playwright/test"
import { HomePageObject } from "./page-objects/home.page"
import { SearchBarPageObject } from "./page-objects/search-bar.page"
import { WeatherContentPageObject } from "./page-objects/weather-content.page"

let searchBar: SearchBarPageObject

test.beforeEach(async ({ page }) => {
  const homePage = new HomePageObject(page)
  await homePage.goto()
  searchBar = new SearchBarPageObject(page)
})

test("is search button disabled with less than 3 characters", async () => {
  await searchBar.enterSearchValue("ab")
  expect(await searchBar.isButtonDisabled()).toBe(true)
})

test("is search button enabled with at least 3 characters", async () => {
  await searchBar.enterSearchValue("abc")
  expect(await searchBar.isButtonDisabled()).toBe(false)
})

test.describe("tests after api fetch", async () => {
  let response: Response

  test.beforeEach(async ({ page }) => {
    await searchBar.enterSearchValue("berlin")
    await searchBar.clickSearchButton()

    response = await page.waitForResponse(response =>
      response.url().includes("/v1/forecast"),
    )
  })

  test("is api fetch successful", async () => {
    expect(response.status()).toBe(200)
  })

  test("is weather content rendered after successful fetch", async ({
    page,
  }) => {
    const weatherContent = new WeatherContentPageObject(page)
    const weatherText = await weatherContent.getWeatherContentHeadlineText()

    expect(weatherText).toContain("Berlin, Germany")
  })
})
