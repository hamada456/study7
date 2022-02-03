(() => {

    getJSON();

    //document.getElementsByTagName("th")[0].textContent = employee.employee[0].name
    //document.getElementsByTagName("th")[1].textContent = employee.employee[0].status

    let $table = document.getElementsByClassName('table');
    let newTh = document.createElement("th");
    let newTr = document.createElement("tr");
    //newTr.textContent = employee.employee[1].name;

    //tr01
    $table[0].appendChild(newTr);
    //th
    document.getElementsByClassName("table")[0].lastElementChild.appendChild(newTh);
    document.querySelector("body > table > tr > th").textContent = employee.employee[0].name;
    //th
    document.getElementsByClassName("table")[0].lastElementChild.appendChild(newTh);
    document.querySelector("body > table > tr > th:nth-child(2)").textContent = employee.employee[0].status;
    
    //tr01
    $table[0].appendChild(newTr);
    //th
    document.getElementsByClassName("table")[0].lastElementChild.appendChild(newTh);
    document.querySelector("body > table > tr > th").textContent = employee.employee[1].name;
    //th
    document.getElementsByClassName("table")[0].lastElementChild.appendChild(newTh);
    document.querySelector("body > table > tr > th:nth-child(2)").textContent = employee.employee[1].status;

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

})();