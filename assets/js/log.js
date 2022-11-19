function check() {
    comp1 = document.getElementById("va1").value;
    comp2 = document.getElementById("va2").value;
    let requestURL = 'acc.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            ExtractData(JSON.parse(request.responseText));
        } };
    request.open("GET", requestURL, true);
    request.send();

    function ExtractData(data) {

    }

}