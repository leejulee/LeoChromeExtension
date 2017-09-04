/* eslint-disable no-unused-vars */
/* global chrome common*/

(function () {
    chrome.storage.local.get(common.storageKey, function (result) {
        const data = result[common.storageKey];
        if (data) {
            var ele = "";
            data.forEach(function (info) {
                ele += `<li>${info.zipcode} (${info.text})</li>`;
            }, this);
            $("#result").append(ele);
        }
    });

    var cbtn = document.querySelector("#c-history");
    cbtn.onclick = function () {
        chrome.storage.local.remove(common.storageKey, function () { });
        $("#result").empty();
    };
}());
