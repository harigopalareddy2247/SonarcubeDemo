exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      url: 'https://demowebshop.tricentis.com',
      browser: 'firefox',
      restart: true,
      show: true,
      windowSize: '1920x1680',
    }
  },
  include: {
    demoSiteSteps: './stepDefinitions/demoSiteSteps.js',
    _: './utils/safeActions.js',
    cartPage: './pages/cartPage.js',
    homePage: './pages/homePage.js',
    loginPage: './pages/loginPage.js',
    plp: './pages/plp.js',
    registerPage: './pages/registerPage.js',
    I: './steps_file.js',
  },
  name: 'amplifyDemo',
  gherkin: {
    features: ["./tests/*.feature"],
    steps: ["./stepDefinitions/demoSiteSteps.js"],
  }
}