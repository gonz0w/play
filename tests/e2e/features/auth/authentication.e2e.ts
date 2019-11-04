import { F8Utils, F8Auth } from '@dreamtsoft/test';
const { currentUrl, URL } = F8Utils;

fixture `User authentication`
    .page(URL(`/`));

test('Login', async t => {
    // F8Auth helper class to login 
    await F8Auth.login(t, 'admin', 'admin');
    await t.expect(currentUrl())
        .contains(URL(`/ds.base/bundles`));
});

test('Logout', async t => {
    await F8Auth.login(t, 'admin', 'admin');
    // F8Auth helper class to logout 
    await F8Auth.logout(t);

    // currentUrl() retrieves current url of the page 
    await t.expect(currentUrl())
        .contains(URL(`/`));
});