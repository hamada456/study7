(() => {

getJSON();

document.getElementsByTagName("th")[0].textContent = employee.employee[0].name
document.getElementsByTagName("th")[1].textContent = employee.employee[0].status

let $table = document.getElementsByClassName('table');
let newRow = $table.insertRow();
let newCell = newRow.insertCell();
//newCell.appendChild(document.createTextNode("a");
// //クラスを新規に付与
// newRow.className = "basket";
// newCell = newRow.insertCell();
// newCell.appendChild($doc.createTextNode($clickProductText.getElementsByClassName("productPrice")[0].innerText));

function getJSON() {
    // XMLHttpRequest オブジェクトを生成する
    const req = new XMLHttpRequest();  
    // 実際にサーバーへリクエストを送信
    req.open("GET", "./employee.json",false);
    req.send(null);
    // JSON のデータ数分処理、値を返す
    employee = JSON.parse(req.responseText);
}

//window.open("",width=50 ,heigth=50);

console.log(employee);



})();