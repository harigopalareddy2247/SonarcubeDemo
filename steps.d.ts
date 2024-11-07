/// <reference types='codeceptjs' />
type demoSiteSteps = typeof import('./stepDefinitions/demoSiteSteps.js');
type cartPage = typeof import('./pages/cartPage.js');
type homePage = typeof import('./pages/homePage.js');
type loginPage = typeof import('./pages/loginPage.js');
type plp = typeof import('./pages/plp.js');
type registerPage = typeof import('./pages/registerPage.js');
type safeActions = typeof import('./utils/safeActions.js');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I, current: any,
    _: safeActions,
    cartPage:cartPage,
    homePage:homePage,
    loginPage:loginPage,
    plp:plp,
    registerPage:registerPage,
    demoSiteSteps:demoSiteSteps,
  }
  interface Methods extends WebDriver { }
  interface I extends ReturnType<steps_file> { }
  namespace Translation {
    interface Actions { }
  }
}
