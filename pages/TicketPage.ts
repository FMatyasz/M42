import { test, expect, Page } from 'playwright/test';
import { loginPageItems } from "../pages/LoginPage";
import { Utils, Colors } from "../utils/utils";

export const ticketPageItems = {

    openTicketsButton: (page: Page) => page.locator('.e-list-item').getByTitle("06. Open Tickets"),
    openTicketsLabel: (page: Page) => page.locator('.info-section').getByTitle("06. Open Tickets"),
    newTicketButton: (page: Page) => page.getByRole('button', { name: 'New' }),
    buttonBorder: (page: Page) => page.locator('.esm-ui-input.required').first(),
    quickfillButton: (page: Page) => page.locator('#reference-dropdown-wrapper-7792477-undefined'),
    bitLockerButton: (page: Page) => page.locator('#reference-dropdown-option-7792477-8063545'),
    ticketTypeButton: (page: Page) => page.getByRole('combobox', { name: 'dropdownlist' }),
    requestForInformationButton: (page: Page) => page.getByRole('option', { name: 'Request for Information' }),
    closeNotificationButton: (page: Page) => page.getByRole('button', { name: 'Close notification' }),
    customerListButton: (page: Page) => page.locator('#reference-dropdown-wrapper-7793318-undefined'),
    saveTicketButton: (page: Page) => page.getByText('Albrecht Peter')
};

export class TicketPage {

    public page: Page;
    public web_adress: string = 'https://qatestenv.efectecloud-demo.com/itsm';

    constructor(page: Page) {
        this.page = page;
    };

    async openNewTicket() {

        const util = new Utils(this.page);

        await ticketPageItems.openTicketsButton(this.page).click();
        await expect.soft(ticketPageItems.openTicketsLabel(this.page)).toBeVisible();
    }

    async createNewTicket() {

        const util = new Utils(this.page);
        const redBorder = ticketPageItems.buttonBorder(this.page);

        await ticketPageItems.newTicketButton(this.page).first().click();
        await util.colorCheck(redBorder, Colors.red);
        await ticketPageItems.quickfillButton(this.page).first().click();
        await ticketPageItems.bitLockerButton(this.page).click();
        await ticketPageItems.ticketTypeButton(this.page).click();
        await ticketPageItems.requestForInformationButton(this.page).click();
        await util.closePopup();
        await ticketPageItems.customerListButton(this.page).click();
        await ticketPageItems.saveTicketButton(this.page).click();
    }
}
