import { F8Utils, F8Select } from '@dreamtsoft/test';
const { URL, loginUser, currentUrl } = F8Utils;

fixture `Pages basic crud`
    .page(URL('/'))
    .beforeEach(async t => {
        // Helper 
        await loginUser(t);
    });
    
const pageName = 'myAwesomeNewPage';

test(`Create page and add calendar component`, async t => {
    const createPageButton = F8Select().add('create-page').get();
    const pageConfigureCalendarComponent = F8Select().widget('page_layout', 'page_layout', 'component-calendar').get();
    const pageConfigureDropArea =  F8Select().widget('page_layout', 'page_layout', 'drop').get();
    const calendarComponent = F8Select().component('calendar').get();

    await t
        .navigateTo(URL(`/ds.base/${pageName}`)) // Go to new page
        .click(createPageButton)
        .dragToElement(
            pageConfigureCalendarComponent,
            pageConfigureDropArea,
        )
        // Two confirmations to click
        .click(F8Select().dialogAction('ok').get({ timeout: 0 })) // Pass in testCafe options to the Selector 
        .click(F8Select().dialogAction('ok').get())
        .expect(calendarComponent.exists) 
            .ok();
        
});

test(`Delete page`, async t => {
    const searchMenu = F8Select().nav().search().menu().get();
    const searchInput = F8Select().nav().search().input().get();
    const searchResultItem = F8Select().nav().search().firstResult().get();
    const detailsDeleteBtn = F8Select().component('details').action('delete-record').get();
    const okDialogBtn = F8Select().dialogAction('ok').get();
    const pageCreateBtn = F8Select().add('create-page').get();

    await t
        .click(searchMenu)
        .typeText(searchInput, pageName)
        .click(searchResultItem)
        .click(detailsDeleteBtn)
        .click(okDialogBtn)
        .navigateTo(URL(`/ds.base/${pageName}`))
        .expect(pageCreateBtn.exists)
            .ok()
        .expect(currentUrl())
            .eql(URL(`/ds.base/${pageName}`));
});





