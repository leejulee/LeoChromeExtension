/* global chrome common*/
// https://eslint.org/docs/rules/no-console
/*eslint no-console: ["error", { allow: ["info", "error"] }] */
const nid = "id_001";

function contentMenuOnClick(info) {
    const selectionText = info.selectionText;
    common.get_zip5_adrs(selectionText, function (data) {
        const zipcode = data.zipcode || "No found!";

        chrome.notifications.create(nid, {
            iconUrl: chrome.runtime.getURL("icon48.png"),
            title: "Result",
            type: "basic",
            message: zipcode,
            buttons: [{ title: "History" }],
            isClickable: false,
            priority: 0
        }, function () { });

        common.saveToStorage(selectionText, zipcode);
    });
}

chrome.contextMenus.create({
    "title": "query zipcode", "contexts": ["selection"],
    "onclick": contentMenuOnClick
});

chrome.notifications.onButtonClicked.addListener(function () {
    chrome.notifications.clear(nid, function () { });
    chrome.tabs.create({
        url: chrome.extension.getURL("Management.html"),
        selected: true
    });
});