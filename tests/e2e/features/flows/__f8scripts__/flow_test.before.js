/*
    This script sets up data for test
*/

var Flow = require("dranvas/Flow");

var navFlow = new Flow();
navFlow.setFlowType('96be53bad37c4862adcc6bc75223eb41'); // menu flow type
navFlow.setAsync(false);

navFlow.addFlowObject({
    "data": {},
    "output": {},
    "type": "box",
    "id": "start",
    "static_routes": true,
    "text": "Start",
    "left": 0,
    "top": 0,
    "stuck": true,
    "width": 100,
    "height": 40,
    "routes": [{
        "text": "Always",
        "condition": "",
        "order": 0,
        "type": "always",
        "to": "75e0d313129cdab8a0a3c2b27a0ffdbe"
    }]
});

navFlow.addFlowObject({
    "data": {
        "name": "Run Script",
        "id": "75e0d313129cdab8a0a3c2b27a0ffdbe",
        "script": "console.log('e2eTest'); $flow.e2eMessage = 'SUCCESS TEST';"
    },
    "output": {},
    "type": "script",
    "text": "Run Script",
    "left": 180,
    "top": 10,
    "id":  "75e0d313129cdab8a0a3c2b27a0ffdbe",
    "width": 100,
    "height": 40,
    "routes": [{
        "text": "Success",
        "condition": "success:eq:1:true",
        "order": 0,
        "type": "success",
        "to": "fe40ee71dd8c6c92b6016df4e7407b4d"
    }, {
        "text": "Failure",
        "condition": "success:eq:0:false",
        "order": 1,
        "type": "error"
    }]
});

navFlow.addFlowObject({
    "data": {
        "growl_type": "info",
        "name": "Notification",
        "id": "fe40ee71dd8c6c92b6016df4e7407b4d",
        "send_growl": true,
        "growl_message": "%{$flow.e2eMessage}"
    },
    "output": {},
    "type": "send_notification",
    "text": "Notification",
    "left": 390,
    "top": 10,
    "id": "fe40ee71dd8c6c92b6016df4e7407b4d",
    "width": 100,
    "height": 40,
    "routes": [{
        "text": "Always",
        "condition": "success:eq:1:true",
        "order": 0,
        "type": "ok"
    }]
});

const flowObjectSerialized = JSON.stringify(navFlow.toData());

var navObj = {
    bundle: "ds.base",
    id: "",
    items: [
        {
            bucket: "third_party_license",
            collapsible: "",
            color: "",
            condition: "[]",
            description: "",
            flow: flowObjectSerialized,
            group: "",
            icon: "fontawesome:android",
            id: "",
            label: "e2eTest",
            menu_name: "",
            newId: "5d5c703ac70453b0d33971054e8c8b55",
            sort_by: "",
            sort_direction: "ascending",
            submenu: "0",
            subpage: "",
            type: "navigator_item_flow",
            url: "",
            view: "",
            visibility: "admins"
        }
    ],
    specify_access: true
}

var fr = new FRecord('bundle_navigation');
fr.setValue('icon', 'fontawesome:android');
fr.setValue('name', 'e2eTest');
fr.setValue('nav', navObj);
fr.setValue('position', '0');
fr.setValue('nav_type', 'default');
fr.insert();