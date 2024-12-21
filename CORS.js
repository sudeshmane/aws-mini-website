 window.onload = function () {
    readJsonFile('https://dvpjjw7lm7cue.cloudfront.net/new21.txt', function (QuoteJson) {
        let QuoteObj = "YOU FROM CROSS ORIGIN";
        document.getElementById("Quote").innerHTML =
            "<i>" + QuoteObj + "</i>";
        
       document.getElementById('myImage').src = 'https://dvpjjw7lm7cue.cloudfront.net/top-se.gif';
    }); 
}

function readJsonFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

