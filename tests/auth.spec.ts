import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('setup authentication', async ({ page }) => {
    const login = new LoginPage(page);

    await login.logIn('user1.training', 'SecureRandomPassword1!');
    await page.waitForURL('https://qatestenv.efectecloud-demo.com/itsm/Login.do');
    await page.context().storageState({ path: 'authState.json' });
});
