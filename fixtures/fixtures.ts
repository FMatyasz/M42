import { test as base } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import { AgentUIPage } from "../pages/AgentUIPage";
import { TicketPage } from "../pages/TicketPage";

type Fixtures = {
  login: LoginPage;
  agentUI: AgentUIPage;
  ticket: TicketPage;
};

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  agentUI: async ({ page }, use) => {
    await use(new AgentUIPage(page));
  },

  ticket: async ({ page }, use) => {
    await use(new TicketPage(page));
  },
});

export const expect = base.expect;
