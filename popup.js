/// <reference path="./jquery.js" />
/// <reference path="./utilities.js" />
/* global common */

(function () {
    //reference http://zip5.5432.tw/js/zip5.js
    var qbtn = document.querySelector("#query");
    qbtn.onclick = function () {
        var qaddr = document.querySelector("#addr");
        common.get_zip5_adrs(qaddr.value, function (data) {
            var qresult = document.querySelector("#result");
            qresult.innerText = "";
            qresult.innerText = `ZipCode: ${data.zipcode}`;
            common.saveToStorage(qaddr.value, data.zipcode);
        });
    };
}());