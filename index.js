(() => {

    getJSON();

    let $table = document.getElementsByClassName('table');
    let newTh = document.createElement("th");
    let newTr = document.createElement("tr");

    for(index = 0 ; employee.employee.length > index ; index++ ){
    //tr001
    $table[0].appendChild(document.createElement("tr"));
    //th1
    document.getElementsByClassName("table")[0].lastElementChild.appendChild(document.createElement("th"));
    document.querySelectorAll("th")[document.querySelectorAll("th").length -1].textContent = employee.employee[index].name;
    //th2
    document.querySelectorAll("tr")[document.querySelectorAll("tr").length -1].lastElementChild.after(document.createElement("th"));
    document.querySelectorAll("th")[document.querySelectorAll("th").length -1].textContent = employee.employee[index].status;
    }

    function getJSON() {
        // XMLHttpRequest オブジェクトを生成する
        const req = new XMLHttpRequest();  
        // 実際にサーバーへリクエストを送信
        req.open("GET", "./employee.json",false);
        req.send(null);
        // JSON のデータ数分処理、値を返す
        employee = JSON.parse(req.responseText);
    }

})();