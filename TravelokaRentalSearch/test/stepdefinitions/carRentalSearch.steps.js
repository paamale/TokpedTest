import { Given, When, Then } from '@cucumber/cucumber';
import rentalTraveloka from '../pageobject/carRentalSearch.page';

Given('User on Traveloka App Homepage', async () => {
    await rentalTraveloka.homepage();
  });


When('User click Car Rental on car homepage', async () => {
    await rentalTraveloka.clickCarRental();
    
});

When('User click with driver', async () => {
    await rentalTraveloka.setDriver();
});

When('User click select location', async () => {
    await rentalTraveloka.setLoc();
});

// When('User choose Jakarta region', async () => {
//     await rentalTraveloka.setLokSpec();
// });

When('User click search button', async () => {
    await rentalTraveloka.searchButton();
});

Then('User will navigate to cars in Jakarta page', async () => {
  await loginTraveloka.validateHomepage();
});
