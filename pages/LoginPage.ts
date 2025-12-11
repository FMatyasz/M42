import { test, expect, Page } from 'playwright/test';
import { Utils } from "../utils/utils";

export const loginPageItems = {

  terminateButton: (page: Page) => page.getByRole('button', { name: "Terminate the other session" }),
  usernameField: (page: Page) => page.getByRole('textbox', { name: "Username" }),
  passwordField: (page: Page) => page.getByRole('textbox', { name: "Password" }),
  directoryLoginButton: (page: Page) => page.getByRole('button', { name: "Login with Directory account" }),
  userProfile: (page: Page) => page.locator('.avatar'),
  logout: (page: Page) => page.locator('.button-label').getByText('Log out'),
};

export class LoginPage {

  public page: Page;
  public web_adress: string = 'https://qatestenv.efectecloud-demo.com/itsm';

  constructor(page: Page) {
    this.page = page;
  };

  async loadAppPage() {

    await this.page.goto(this.web_adress)
    const util = new Utils(this.page);
    await util.terminateSession();
  };

  async logIn(username: string, password: string) {

    await this.loadAppPage();
    await loginPageItems.usernameField(this.page).click();
    await loginPageItems.usernameField(this.page).fill(username);
    await loginPageItems.passwordField(this.page).click();
    await loginPageItems.passwordField(this.page).fill(password);
    await loginPageItems.directoryLoginButton(this.page).click();
  }

  async logOut() {

    await loginPageItems.userProfile(this.page).click();
    await loginPageItems.logout(this.page).click();
  }
}
