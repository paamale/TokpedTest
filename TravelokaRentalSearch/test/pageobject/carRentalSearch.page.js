const clickCar = $('//*[@id="__next"]/div[5]/div/div[1]/div/div/div[1]/div/div/div[11]/div/div[2]');
const driver = $('//*[@id="__next"]/div[5]/div[2]/div[1]/div/div/div[3]/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]');
const setLok = $('//*[@id="__next"]/div[5]/div[2]/div[1]/div/div/div[3]/div/div/div[3]/div[2]/div[1]/input');
const setLokSpek = $('//*[@id="__next"]/div[5]/div[2]/div[1]/div/div/div[3]/div/div/div[3]/div[2]/div[2]/div/div[2]/div/div[1]/div[2]');
const search = $('//*[@id="__next"]/div[5]/div[2]/div[1]/div/div/div[3]/div/div/div[4]/div[9]/div');
const transText = $('//*[@id="__next"]/div[2]/div[3]/div/div[1]/div[1]/div/div');
const travLogo = $('//*[@id="__next"]/div[2]/div[2]/div[1]/a/img');
const validatehomepage = $('//h2[contains(text(), "Car Rental With Driver")]');

const LoginPage = function loginpage() {
  this.homepage = async () => {
    await browser.url('https://www.traveloka.com/en-id/');
    await travLogo.waitForExist({ timeout: 10000});
    await transText.waitForExist({ timeout: 10000});
  };

  this.clickCarRental = async () => {
    await clickCar.click();
    await browser.pause(5000);
  };

  this.setDriver = async () => {
    await driver.click();
    await browser.pause(5000);
  };

  this.setLoc = async () => {
    await setLok.setValue('Jakarta');
    await browser.pause(5000);
  };

  this.searchButton = async () => {
    await search.click();
    await browser.pause(5000);
  }

  this.validateHomepage = async () => {
    await validatehomepage.waitForExist({ timeout: 5000});
    await expect(validatehomepage).toBeDisplayed();
    await browser.pause(5000);
  };
};

module.exports = new LoginPage();
