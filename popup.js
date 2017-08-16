/// <reference path="./jquery.js" />
(function () { 
    //reference http://zip5.5432.tw/js/zip5.js
    function get_zip5_adrs(adrs) {
        var regex01 = new RegExp(/^\d/);
        if ((adrs != "") && (!regex01.test(adrs))) {
            var zip5_url = "https://zip5.5432.tw/zip5json.py?adrs=" + adrs + "&jsoncallback=?";
            $.getJSON(zip5_url,
                function (data) {
                    var qresult = document.querySelector("#result");
                    qresult.innerText = "";
                    qresult.innerText = `ZipCode: ${data.zipcode}`;
                }
            );
        }
    }

    var qbtn = document.querySelector("#query");
    qbtn.onclick = function () {
        var qaddr = document.querySelector("#addr");
        get_zip5_adrs(qaddr.value);
    };
}());