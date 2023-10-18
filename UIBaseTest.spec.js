import { test, expect } from '@playwright/test';
//Project task
// Task: implement web UI auto test for ticket search To do:
// ********************************************************************
// - Navigate to https://www.aviasales.com/
// - Enable Night Theme
// - For FROM field set NEW York, Kennedy airport
// - For TO field set Berlin
// - For DATE field set October, 30
// - No returning ticket
// - Passengers
// – 2 adults, economy
// - Click search flight Assert that:
// - New search page is opened All previous data is displayed on the new page Additional requirements:
// - Browser - Chrome - Use JavaScript + framework 
//*************** Dharmendra Buragapu (Authour)************************

test.only('ind Deals on Flights at Aviasales.com', async ({page})=>
{
    //chrome -Plugins /cookies 
    //const context = browser.newContext();
    //const page = (await context).newPage();
    await page.goto("https://www.aviasales.com/");
    //get title -assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Cheap Flights, Airline Tickets & Airfares - Find Deals on Flights at Aviasales.com");
    await page.locator('[data-test-id="switch"]').click();
    //Enter FROM field set NEW York, Kennedy airport
    await page
    .locator('[data-test-id="origin-autocomplete-field"]')
    .fill('John F. Kennedy International Airport');
    await page.getByText('JFK').hover();
    await page.getByText('JFK').press('Enter')
    //or TO field set Berlin
    await page.locator('[data-test-id="destination-autocomplete-field"]')
    .fill('Berlin');
    //Date picker from Departure Dates 
    //await page.selectDate();
   await page.locator("//input[@placeholder='Depart']").dblclick();
   //page.fill('Tue Oct 10 2023');
   //await page.hover();
   await page.mouse.down();
   await page.dblclick();
   page.fill('Tue Oct 10 2023').click( { force : true });
    await page.click("(//div[@class='calendar__day-cell'])//div[text()='30'])");
    //const daySelector = '.trip-duration__date-input --active';
   // await page.waitForSelector(daySelector);   
    //const elements = await page.$('.');
    //const el = Array.from(elements).filter(el => {
   // return el.dataset.usrDate === 'Mon, 30 October';
   // })[0];
   // console.log(el);
    //await el.click();
    //Retunrn Ticket
    await page.locator('[data-test-id="no-return-ticket"]').click();
    await page.locator('[data-test-id="passengers-field"]').click();
    //2 adults, economy Increment as per scenario validation
    await page.locator('//a[@class="additional-fields__passenger-control --increment"]').click();
    await page.press('Enter');
    //Search Flights
    await page.getByRole('button', { name: 'Submit' }).click();
    //Navigate to Pre-filled details with All the informations about passangers and filled details
    //Assertions
    await expect(page.getByTestId('[data-test-id="form-submit"]')).toHaveText('Submitted');
});