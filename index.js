(() => {

    getJSON();

    const $table = document.getElementsByClassName('table');
    const newTh = document.createElement("th");
    const newTr = document.createElement("tr");
    let thElementNum = document.querySelectorAll("th").length -1
    let trElementNum = document.querySelectorAll("tr").length -1

    for( index = 0 ; employee.employee.length > index ; index++ ){
        //tr001、大枠を作成
        $table[0].appendChild(document.createElement("tr"));
        //th1、枠を作成
        document.getElementsByClassName("table")[0].lastElementChild.appendChild(document.createElement("th"));
        //名前を代入
        document.querySelectorAll("th")[document.querySelectorAll("th").length -1].textContent = employee.employee[index].name;
        //th2、枠を作成
        document.querySelectorAll("tr")[document.querySelectorAll("tr").length -1].lastElementChild.after(document.createElement("th"));
        //状態を代入
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