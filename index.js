(() => {

    const $doc = document;
    const $table = document.getElementsByClassName('table');

    getJSON();
    
    //社員の数だけループ
    for ( index = 0 ; employee.employee.length > index ; index++ ) {
        let thElementEndNum = document.querySelectorAll("th").length;
        let trElementEndNum = document.querySelectorAll("tr").length;
        let newTh = document.createElement("th");

        //tr001、大枠を作成
        $table[0].appendChild(document.createElement("tr"));
        //th1、枠を作成
        document.getElementsByClassName("table")[0].lastElementChild.appendChild(newTh);
        //名前を代入
        document.querySelectorAll("th")[thElementEndNum].textContent = employee.employee[index].name;
        //th2、枠を作成
        document.querySelectorAll("tr")[trElementEndNum].lastElementChild.after(document.createElement("th"));
        //状態を代入
        document.querySelectorAll("th")[thElementEndNum + 1].textContent = employee.employee[index].status;
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