import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();

  // await expect(page.getByRole("heading", { name: "Sign In"})).toBeVisible();

  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("User has signed in successfully")).toBeVisible();
});


test("should allow user to add a hotel", async ({page}) => {
    await page.goto(`${UI_URL}add-hotel`)

    await page.locator('[name="name"]').fill("TEST hotel");
    await page.locator('[name="city"]').fill("TEST city");
    await page.locator('[name="country"]').fill("TEST city");
    await page.locator('[name="description"]').fill("TEST description");
    await page.locator('[name="pricePerNight"]').fill("100");
    await page.selectOption('select[name="starRating"]', "3");
    await page.getByText("Budget").click();
    await page.getByLabel("Free Wifi").check();
    await page.getByLabel("Parking").check();

    await page.locator('[name="adultCount"]').fill("2");
    await page.locator('[name="childCount"]').fill("0");

    await page.setInputFiles('[name="imageFiles"]', [
      path.join(__dirname, "files", "pfp.jpg"),
      path.join(
        __dirname,
        "files",
        "400976398_745753387569660_7129764406222418731_n.jpg"
      ),
    ]);    
    await page.getByRole('button', { name : "Save"}).click();
    await expect(page.getByText("Hotel Saved!")).toBeVisible();
})

