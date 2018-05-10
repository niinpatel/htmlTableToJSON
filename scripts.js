//let table = document.getElementById("table");

let theads = document.getElementsByTagName("th");
let theadsLength = theads.length;
let tds = document.getElementsByTagName("td");
let tdsLength = tds.length;
let tableData = [];
let resultText = document.getElementById("result");

let iThRow;
let head;
let obj = {};
for (let i = 0; i < tdsLength; i++) {
    iThRow = tds[i].innerText;
    head = theads[i % theadsLength].innerText;
    console.log(head, iThRow);

    obj[head] = iThRow;

    if( (i+1) % theadsLength === 0){
        tableData.push(obj);
        obj = {};
    }

}


resultText.textContent = `Result = ${JSON.stringify(tableData)}`;