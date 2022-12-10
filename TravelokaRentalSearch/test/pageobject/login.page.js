const homepageUrl = process.env.BASE_URL;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Login Page
const transText = $('//*[@id="__next"]/div[2]/div[3]/div/div[1]/div[1]/div/div');
const travLogo = $('//*[@id="__next"]/div[2]/div[2]/div[1]/a/img');
const loginButton = $('//*[@id="__next"]/div[2]/div[2]/div[2]/div[5]/div[1]/div');
const fieldEmail = $('#username');
const fieldPassword = $('#password');
const submitButton = $('//*[@id="__next"]/div[2]/div[2]/div[2]/div[5]/div[2]/div/div/div/div[1]/div[3]/div[1]');
const validatehomepage = $('.navbar-brand');
const validatehomepage2 = $('//*[@id="root"]/section[1]/div/div/div/div/div/a/img');

const LoginPage = function loginpage() {
  this.homepage = async () => {
    await browser.url('https://www.traveloka.com/en-id/');
    await travLogo.waitForExist({ timeout: 5000});
    await transText.waitForExist({ timeout: 5000});
  };

  this.loginButton = async () => {
    await loginButton.click();
  };

  this.setPassword = async () => {
    await fieldPassword.setValue(password);
  };

  this.setEmail = async () => {
    await fieldEmail.setValue(email);
  };

  this.submitData = async () => {
    await submitButton.click();
    await browser.pause(10000);
  };

  this.validateHomepage = async () => {
    await browser.switchWindow(homepageUrl);
    await expect(validatehomepage).toBeDisplayed();
    await expect(validatehomepage2).toBeDisplayed();
  };
};

module.exports = new LoginPage();
