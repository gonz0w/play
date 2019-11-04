/*
    This script cleans up data after test
*/

var fr = new FRecord('bundle_navigation');
fr.addSearch('name', 'e2eTest');
fr.search(function (item) {
    item.del();
});