import { test, expect, Page } from 'playwright/test';

export const agentUIPageItems = {

    agentUIButton: (page: Page) => page.locator('.esm-header').getByText('AGENT UI'),
    classicButton: (page: Page) => page.locator('.esm-header').getByText('CLASSIC'),
    serviceDeskAgentButton: (page: Page) => page.getByTitle("Service Desk Agent")
};

export class AgentUIPage {

    public page: Page;
    public web_adress: string = 'https://qatestenv.efectecloud-demo.com/itsm';

    constructor(page: Page) {
        this.page = page;
    };

    async switchToAgentUI() {

        await agentUIPageItems.classicButton(this.page).click();
    }

    async openServiceDeskAgent() {
        await agentUIPageItems.serviceDeskAgentButton(this.page).click({ force: true });
        await expect.soft(agentUIPageItems.agentUIButton(this.page)).toBeVisible();
    }
}
