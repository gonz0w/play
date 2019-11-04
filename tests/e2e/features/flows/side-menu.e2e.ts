import { F8Utils, F8Select, F8Script } from '@dreamtsoft/test';
const { URL, loginUser } = F8Utils;

const f8script = F8Script();

fixture `Side menu flows`
    .page(URL('/'))
    .beforeEach(async t => {
        // Runs an F8 Script that sets up data needed to complete test
        await f8script.runBefore(t, 'flow_test');  

        // Logs in via default user for every test 
        await loginUser(t);
    })
    .afterEach(async (t) => {
        // Does clean up on data that the test required 
        await f8script.runAfter(t, 'flow_test');  
    });

test('Create flow and run', async t => {
    const bundleNavMenu = F8Select().nav().bundleNav().menu().get();
    const e2eTestFlow = F8Select().nav().bundleNav().link('e2etest').get();
    const notificationMessage = F8Select().notification().info().get();
        
    await t
        .click(bundleNavMenu)
        .click(e2eTestFlow)
        .expect(notificationMessage.textContent)
            .contains('SUCCESS TEST');
});