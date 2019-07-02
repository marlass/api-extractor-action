import * as login from '../../helpers/login';
import { formats } from '../../sample-data/viewports';
import { waitForHomePage, clickHamburger } from '../../helpers/homepage';

describe(`${formats.mobile.width + 1}p resolution - Login`, () => {
  before(() => {
    cy.window().then(win => win.sessionStorage.clear());
    cy.viewport(formats.mobile.width, formats.mobile.height);
    cy.visit('/');

    waitForHomePage();

    login.registerUser();

    waitForHomePage();

    login.signOutUser();
  });

  beforeEach(() => {
    cy.viewport(formats.mobile.width, formats.mobile.height);
  });

  it('should login successfully with correct credentials', () => {
    clickHamburger();

    login.loginUser();

    waitForHomePage();

    login.signOutUser();
  });

  it('login should fail if password is wrong', () => {
    clickHamburger();
    login.loginWithBadCredentials();
  });
});
