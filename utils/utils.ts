import { test, expect, Page } from 'playwright/test';
import { LoginPage, loginPageItems } from "../pages/LoginPage";
import { AgentUIPage } from "../pages/AgentUIPage";
import { TicketPage, ticketPageItems } from "../pages/TicketPage";

export const Colors = {
    red: "rgb(255, 114, 71)",
};

export const utilsItems = {

    closeNotificationButton: (page: Page) => page.getByRole('button', { name: 'Close notification' }),
};

export class Utils {

    public page: Page;
    constructor(page: Page) {
        this.page = page;
    };

    async colorCheck(locator: any, expectedColor: any) {

        const locatorColor = await locator.evaluate((el: any) => {
            return window.getComputedStyle(el).getPropertyValue('border-left-color');
        });
        expect.soft(locatorColor).toBe(expectedColor);
        console.log('Locator color:' + locatorColor + 'Expected color:' + expectedColor);
    };

    async terminateSession() {

        if (await loginPageItems.terminateButton(this.page).isVisible()) {
            await loginPageItems.terminateButton(this.page).click();
        }
    };

    async closePopup() {

        await utilsItems.closeNotificationButton(this.page).click();
    };
}
