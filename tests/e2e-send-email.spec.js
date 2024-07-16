// @ts-check
const { test, expect } = require('@playwright/test');
const journeyName = "SEJourneyRun"

function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test.beforeEach(async ({ page }) => {
    test.setTimeout(100000);
    await page.goto("https://app.intempt.com/");
    await page.fill("input[name='email']", "bolam74153@apn7.com");
    await page.fill("input[name='password']", "Welcome$1234");
    await page.locator("//button[@id='login']").click();
    const link = await page.locator("//a[@href='/journeys']");
    await link.waitFor();
    await page.locator("//a[@href='/journeys']").click();
    //await page.waitForSelector("//p[text()=' Create journey ']/ancestor::button");

    await page.locator("//p[text()=' Create journey ']/ancestor::button").click();
    await page.locator("//p[text()=' Create a journey ']/ancestor::button").click();
    // await page.fill("//input[@placeholder='Enter journey name here']", journeyName)
    // await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    // //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    // let viewport = page.viewportSize();
    // let centerX = 0;
    // let centerY = 0;
    // if(viewport != null)
    // {
    //      centerX = viewport.width / 2;
    //      centerY = viewport.height / 2;
    // }
    // await page.locator("//p[text()=' Send email ']").hover();
    // await page.mouse.down();
    // await page.mouse.move(centerX, centerY, { steps: 10 });
    // await page.mouse.up();
    // const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    // await firstElement.dblclick();
})

test.afterAll(async () => {
    // await page.goto("https://app.intempt.com/journeys");
    // await page.locator("//td[text()='" + journeyName + "']").hover();
    // await page.locator("//td[text()='" + journeyName + "']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    // await page.locator("//p[text()=' Delete ']").click();
    // await page.fill("//input[@placeholder='Enter journey name here']", journeyName);
    // await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
    console.log('Test Execution is Done!');
})

test('Verify modal window with settings is opened', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "1")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    await expect(page.locator("//aside//div[@class='v-navigation-drawer__prepend']")).toBeVisible();
    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "1']").hover();
    await page.locator("//td[text()='" + journeyName + "1']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "1");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Verify block name will be Send email by default', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "2")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement2 = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement2.dblclick();

    const actualValue = await page.locator("//input[@placeholder='Enter a name']").inputValue();
    const expectedValue = "Send email";
    await expect(actualValue).toBe(expectedValue);

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "2']").hover();
    await page.locator("//td[text()='" + journeyName + "2']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "2");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Verify send email block name could be changed', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "3")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    const inputBlockNameLocator = "//input[@placeholder='Enter a name']";
    let expectedValue = "Test block";
    await page.fill(inputBlockNameLocator, "Test block");
    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    await page.locator("//input[@placeholder='Select email']").click();
    await page.fill("//input[@placeholder='Search...']", "freakbid@gmail.com");
    await page.locator("//p[text()=' freakbid@gmail.com ']").click();
    await page.locator("//p[text()=' New thread ']").click();
    await page.locator("//button//p[text()=' Save ']").click();
    let actualName = await page.textContent("//section[@class='journeyConstructor']//body/child::div//p[text()=' " + expectedValue + " ']");
    await expect(actualName).toBe(" " + expectedValue + " ");
    //const firstElementLocal = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();
    await page.waitForSelector("//p[text()=' testhop@mailinator.com ']");
    let actualValue = await page.locator("//input[@placeholder='Enter a name']").inputValue();
    await expect(actualValue).toBe(expectedValue);

    expectedValue = "!@%@!%!#^$&$%#@&"
    await page.fill(inputBlockNameLocator, expectedValue);
    await page.locator("//button//p[text()=' Save ']").click();
    actualName = await page.textContent("//section[@class='journeyConstructor']//body/child::div//p[text()=' " + expectedValue + " ']");
    await expect(actualName).toBe(" " + expectedValue + " ");
    await firstElement.dblclick();
    await page.waitForSelector("//p[text()=' testhop@mailinator.com ']");
    actualValue = await page.locator("//input[@placeholder='Enter a name']").inputValue();
    await expect(actualValue).toBe(expectedValue);

    expectedValue = "    email   "
    await page.fill(inputBlockNameLocator, expectedValue);
    await page.locator("//button//p[text()=' Save ']").click();
    actualName = await page.textContent("//section[@class='journeyConstructor']//body/child::div//p[text()=' " + expectedValue + " ']");
    await expect(actualName).toBe(" " + expectedValue + " ");
    await firstElement.dblclick();
    await page.waitForSelector("//p[text()=' testhop@mailinator.com ']");
    actualValue = await page.locator("//input[@placeholder='Enter a name']").inputValue();
    await expect(actualValue).toBe(expectedValue);

    expectedValue = "SEND EMAIL"
    await page.fill(inputBlockNameLocator, expectedValue);
    await page.locator("//button//p[text()=' Save ']").click();
    actualName = await page.textContent("//section[@class='journeyConstructor']//body/child::div//p[text()=' " + expectedValue + " ']");
    await expect(actualName).toBe(" " + expectedValue + " ");
    await firstElement.dblclick();
    await page.waitForSelector("//p[text()=' testhop@mailinator.com ']");
    actualValue = await page.locator("//input[@placeholder='Enter a name']").inputValue();
    await expect(actualValue).toBe(expectedValue);

    expectedValue = "1234567890"
    await page.fill(inputBlockNameLocator, expectedValue);
    await page.locator("//button//p[text()=' Save ']").click();
    actualName = await page.textContent("//section[@class='journeyConstructor']//body/child::div//p[text()=' " + expectedValue + " ']");
    await expect(actualName).toBe(" " + expectedValue + " ");
    await firstElement.dblclick();
    await page.waitForSelector("//p[text()=' testhop@mailinator.com ']");
    actualValue = await page.locator("//input[@placeholder='Enter a name']").inputValue();
    await expect(actualValue).toBe(expectedValue);
    //await page.locator("//div[@class='spacer']/following-sibling::button//span//img[@class='intempt-icon-primary-blue']").click();

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "3']").hover();
    await page.locator("//td[text()='" + journeyName + "3']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "3");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
})

test('Verify send email block name can\'t be empty', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "4")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    const inputBlockNameLocator = "//input[@placeholder='Enter a name']";
    await page.fill(inputBlockNameLocator, "");
    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    await page.locator("//input[@placeholder='Select email']").click();
    await page.fill("//input[@placeholder='Search...']", "freakbid@gmail.com");
    await page.locator("//p[text()=' freakbid@gmail.com ']").click();
    await page.locator("//p[text()=' New thread ']").click();
    await page.locator("//button//p[text()=' Save ']").click();
    await expect(page.locator("//div[@role='alert']/descendant::div[text()='Required']").first()).toBeVisible();

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "4']").hover();
    await page.locator("//td[text()='" + journeyName + "4']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "4");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Verify send email settings title', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "5")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    const actualHeaderValue = await page.textContent("//p[text()=' Actions - Send email ']");
    const actualHeaderDescValue = await page.textContent("//p[text()=' Pass the journey flow by sending an email ']");
    await expect(actualHeaderValue).toBe(" Actions - Send email ");
    await expect(actualHeaderDescValue).toBe(" Pass the journey flow by sending an email ");
    await expect(page.locator("//p[text()=' Actions - Send email ']")).toBeVisible();
    await expect(page.locator("//p[text()=' Pass the journey flow by sending an email ']")).toBeVisible();

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "5']").hover();
    await page.locator("//td[text()='" + journeyName + "5']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "5");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Select Active Email Account and choose New Thread', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "6")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    await page.locator("//input[@placeholder='Select email']").click();
    await page.fill("//input[@placeholder='Search...']", "freakbid@gmail.com");
    await page.locator("//p[text()=' freakbid@gmail.com ']").click();
    await page.locator("//p[text()=' New thread ']").click();
    const isThreadChecked = await page.isChecked("//p[text()=' New thread ']/ancestor::label/preceding-sibling::div/child::input");
    await expect(isThreadChecked).toBe(true);
    await expect(page.locator("//input[@placeholder='Select an email']")).toBeHidden();
    await page.locator("//button//p[text()=' Save ']").click();
    await firstElement.dblclick();
    await expect(isThreadChecked).toBe(true);
    await expect(page.locator("//input[@placeholder='Select an email']")).toBeHidden();

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "6']").hover();
    await page.locator("//td[text()='" + journeyName + "6']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "6");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Select Active Email Account and choose Reply', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "7")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    await page.locator("//input[@placeholder='Select email']").click();
    await page.fill("//input[@placeholder='Search...']", "freakbid@gmail.com");
    await page.locator("//p[text()=' freakbid@gmail.com ']").click();
    await page.locator("//p[text()=' Reply ']").click();
    const isReplyChecked = await page.isChecked("//p[text()=' Reply ']/ancestor::label/preceding-sibling::div/child::input");
    await expect(isReplyChecked).toBe(true);
    await expect(page.locator("//input[@placeholder='Select an email']")).toBeVisible();
    await page.locator("//p[text()=' Save ']/ancestor::button").click();
    await expect(isReplyChecked).toBe(true);
    await expect(page.locator("//input[@placeholder='Select an email']")).toBeVisible();

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "7']").hover();
    await page.locator("//td[text()='" + journeyName + "7']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "7");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('After selecting Active Email Account button Create email destination button should be changed to the Save button', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "8")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    await expect(page.locator("//button/descendant::p[text()=' Create email destination ']")).toBeVisible();
    await expect(page.locator("//button/descendant::p[text()=' Create email destination ']")).toBeEnabled();
    await expect(page.locator("//button//p[text()=' Save ']")).toBeHidden();
    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    await expect(page.locator("//button/descendant::p[text()=' Create email destination ']")).toBeHidden();
    await expect(page.locator("//button//p[text()=' Save ']")).toBeVisible();
    await expect(page.locator("//button//p[text()=' Save ']")).toBeEnabled();

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "8']").hover();
    await page.locator("//td[text()='" + journeyName + "8']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "8");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Verify "Email is not selected" message appears', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "9")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    const actualMsg = await page.textContent("//p[text()=' Email is not selected ']");
    const actualDescMsg = await page.textContent("//p[contains(text(), 'Please select an existing SMS')]");
    await expect(actualMsg).toBe(" Email is not selected ");
    await expect(actualDescMsg).toBe(' Please select an existing SMS or create a new one before using the "Send SMS" action. ');
    await expect(page.locator("//p[text()=' Email is not selected ']")).toBeVisible();
    await expect(page.locator("//p[contains(text(), 'Please select an existing SMS')]")).toBeVisible();

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "9']").hover();
    await page.locator("//td[text()='" + journeyName + "9']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "9");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Preview Email Before Sending', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "10")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    await page.locator("//input[@placeholder='Select email']").click();
    await page.fill("//input[@placeholder='Search...']", "freakbid@gmail.com");
    await page.locator("//p[text()=' freakbid@gmail.com ']").click();
    await page.locator("//p[text()=' New thread ']").click();
    const journeyUrl = page.url();
    await page.locator("//p[text()=' Preview ']/ancestor::button").click();
    const currentURL = await page.url();
    await expect(currentURL).toContain("/email-studio");
    await expect(currentURL).toContain("?preview=true");
    await page.locator("//button[text()=' Back ']").click();
    await expect(page.url()).toBe(journeyUrl);

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "10']").hover();
    await page.locator("//td[text()='" + journeyName + "10']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "10");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

test('Verify Create email modal window displayed correctly', async ({ page }) => {
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "11")
    await page.locator("//div[@class='footer']/descendant::p[text()=' Create journey ']/ancestor::button").click();
    //await page.waitForSelector("//p[text()=' " + journeyName + " ']");
    let viewport = page.viewportSize();
    let centerX = 0;
    let centerY = 0;
    if(viewport != null)
    {
         centerX = viewport.width / 2;
         centerY = viewport.height / 2;
    }
    await page.locator("//p[text()=' Send email ']").hover();
    await page.mouse.down();
    await page.mouse.move(centerX, centerY, { steps: 10 });
    await page.mouse.up();
    const firstElement = await page.locator('//section[@class="journeyConstructor"]//body/child::div').first();
    await firstElement.dblclick();

    await page.locator("//p[text()=' testhop@mailinator.com ']").click();
    await page.locator("//p[text()=' Create new Email ']/ancestor::button").click();
    const actualText = await page.textContent("//div[@class='header']/child::p[text()=' Create email ']");
    await expect(actualText).toBe(" Create email ");
    await expect(page.locator("//p[text()=' Create email ']/ancestor::button")).toBeDisabled();
    await expect(page.locator("//p[text()=' Cancel ']/ancestor::button")).toBeEnabled();
    await page.fill("//input[@placeholder='Enter email name here']", "test@gmail.com");
    await page.locator("//p[text()=' Create email ']/ancestor::button").click();
    const elemToWait = await page.locator('//iframe[@title="Rich Text Area"]');
    // elemToWait.waitFor();
    // await expect(page.locator("//div[@class='header']/child::p[text()=' test@gmail.com ']")).toBeVisible({ timeout: 15000 });
    // const fromField = await page.locator("//input[@placeholder='Enter email address']");
    // await expect(fromField).toBeVisible();
    // await expect(fromField).toHaveAttribute('placeholder', 'Enter email address');

    // const subjectField = await page.locator('//input[@placeholder="Subject"]');
    // await expect(subjectField).toBeVisible();
    // await expect(subjectField).toHaveAttribute('placeholder', 'Subject');

    // const bodyField = await page.frameLocator('//iframe[@title="Rich Text Area"]').locator('body');
    // await expect(bodyField).toBeVisible();
    // await bodyField.fill('This is a test email body.');
    // await expect(bodyField).toHaveText('This is a test email body.');

    //Removing Journey after case
    await page.goto("https://app.intempt.com/journeys");
    await page.locator("//td[text()='" + journeyName + "11']").hover();
    await page.locator("//td[text()='" + journeyName + "11']/following-sibling::td[@class='text-center tableActionCellClass']//button").click();
    await page.locator("//p[text()=' Delete ']").click();
    await page.fill("//input[@placeholder='Enter journey name here']", journeyName + "11");
    await page.locator("//p[text()=' Delete journey ']/ancestor::button").click();
});

