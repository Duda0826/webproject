function btn() {
    const kor = Number(document.getElementById("kor").value);
    const eng = Number(document.getElementById("eng").value);
    const math = Number(document.getElementById("math").value);

    const sum = kor + eng + math;
    const avg = sum / 3;

    let grade = "";

    if (avg >= 90) grade = "A";
    else if (avg >= 80) grade = "B";
    else if (avg >= 70) grade = "C";
    else if (avg >= 60) grade = "D";
    else grade = "F";

    document.getElementById("sum").value = sum;
    document.getElementById("avg").value = avg.toFixed(2);
    document.getElementById("grade").value = grade;
}


function cycle(){
    const go = document.getElementById("re");
    const go1 = document.getElementById("rere");

    for(let i = 1; i <= 6; i++){
        go.innerHTML += `<h${i}>Hello JavaScript </h${i}>`;
    }

    for(let i = 1; i <= 3; i++){
        go1.innerHTML += `<img src="/javascrptexample/image/${i}.jpg">`;
    }
}

const computerNumber = Math.floor((Math.random() * 10) + 1);
let nGuessess = 0;
let gameOver = false;

function guess() {
    if (gameOver) return;

    //아래 초기화 작업이 존재하지 않는다면
    //let number = parseInt(document.getElementById("user").value);

    let input = document.getElementById("user");
    let number = parseInt(input.value);
    let result = "";

    // 입력값 유효성 검사
    if(isNaN(number) || number < 1 || number > 10) {
        alert("1부터 10 사이의 숫자를 입력해 주세요.")
        input.value = "";
        input.focus();
        return;
    }
    nGuessess++;

    if(number === computerNumber){
        result = "성공입니다! 🥳";
        gameOver = true;
    }else if(number < computerNumber){
        result = "입력한 숫자가 너무 낮습니다."
    }else{
        result = "입력한 숫자가 너무 높습니다."
    }

    document.getElementById("result").value = result;
    document.getElementById("guesses").value = nGuessess;

    input.value = "";
    input.focus();
}

function gugudanPrint() {
    let data = "";
    const gugudan = document.getElementById("gugudan");
    
    for(let i = 1; i <= 9; i++){
        data += "<table>";
        data += `<tr><th>${i}단</th></tr>`;
        for(let j = 1; j <= 9; j++){
            data += `<tr><td>${i} X ${j} = ${i * j}</td></tr>`;
        }
        data += "</table>";
    }
    gugudan.innerHTML = data;
}