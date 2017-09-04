/* eslint-disable no-unused-vars */
/* global chrome*/
var common = {
    storageKey: "queryInfos",
    get_zip5_adrs: function (adrs, callback) {
        var regex01 = new RegExp(/^\d/);
        if ((adrs != "") && (!regex01.test(adrs))) {
            var zip5_url = "https://zip5.5432.tw/zip5json.py?adrs=" + adrs + "&jsoncallback=?";
            $.getJSON(zip5_url, callback);
        }
    },
    saveToStorage: function (text, zipcode) {
        const saveData = { text: text, zipcode: zipcode };
        chrome.storage.local.get(common.storageKey, function (result) {
            var storageData = {};
            var resultData = result[common.storageKey];
            if (resultData) {
                resultData.push(saveData);
                storageData[common.storageKey] = resultData;
                chrome.storage.local.set(storageData, function () { });
            } else {
                storageData[common.storageKey] = [saveData];
                chrome.storage.local.set(storageData, function () { });
            }
        });
    }
};

