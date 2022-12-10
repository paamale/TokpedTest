import { Given, When, Then } from '@cucumber/cucumber';
import loginTraveloka from '../pageobject/login.page';

Given('User on Traveloka App onboarding', async () => {
    await loginTraveloka.homepage();
  });

When('User click Log in button in Traveloka Homepage', async () => {
    await loginTraveloka.loginButton();
});

When('User signing in to Traveloka app', async () => {
    await loginTraveloka.setEmail();
    await loginTraveloka.setPassword();
    await loginTraveloka.submitData();
});

Then('User on Traveloka homepage', async () => {
  await loginTraveloka.validateHomepage();
});
