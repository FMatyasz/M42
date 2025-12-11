import { test } from '../fixtures/fixtures';

test('Create a new ticket', async ({ login, agentUI, ticket }) => {

  // 1. Login 
  await login.loadAppPage(); // auth.spec.ts + storageState

  // 2. Switch to Agent UI
  await agentUI.switchToAgentUI();

  // 3. Open Service Agent role views
  await agentUI.openServiceDeskAgent();

  // 4. Go to "06. Open Tickets"
  await ticket.openNewTicket();

  // 5. Open Service Agent role views
  await ticket.createNewTicket();

  // 6. Logout
  //await login.logOut();
});