// alert 확인
function fnAlert() {
    alert("alert 버튼 클릭됨");
}

// write 확인
function documentWrite() {
    document.write("자바스크립트<br />");
    document.write("<b>안녕하세요</b><br /><h2>반가워요</h2>");
}

// interText 읽어오기
function getInnerText() {
    const test1 = document.getElementById("test1");
    console.log(test1.innerText);
}

// innerText로 변경하기
function setInnerText() {
    document.getElementById("test1").innerText = "innerText <br /> 변경된 내용입니다.";
}

// innerHTML로 읽어오기
function getInnerHTML1() {
    const test2 = document.getElementById("test2");
    console.log(test2.innerHTML);
}

//innerHTML로 변경하기
function setInnerHTML1() {
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<strong>innerHTML</strong>로 변경된 내용<br /> 반갑습니다.";
}

// innerHTML 예제
function print() {
    const title = document.getElementById("title");
    title.innerHTML = "test";
    // title.style.color = "red"
    // title.style.borderRadius = "10px"
    // title.style.border = "1px solid #000"
    // title.style.backgroundColor = "gray"
    // title.style.padding = "10px";
    // title.style.width = "150px";
    // title.style.textAlign = "center";
    title.className = "box1"
}

//confirm 확인하기
function fnConfirm() {
    const confirmBtn = document.getElementById("confirmBtn")

    if (confirm("버튼 배경색을 오렌지색으로 바꾸시겠습니까?")) {
        confirmBtn.style.backgroundColor = "orange";
    } else {
        confirmBtn.style.backgroundColor = "green";
    }
}

// prompt 확인하기
function fnPrompt1() {
    const name = prompt("당신의 이름은 무엇입니까?", "홍길동");
    const age = prompt("당신의 나이는 몇살입니까?", "30");

    console.log(name);
    console.log(age);

    const divEl = document.getElementById("area2");
    // divEl.innerHTML = "<b>앗, 당신이 바로 " + age + "살 " + name + "님군요..!</b>";
    if (name !== null && name.trim() !== "" && age !== null && age.trim() !== "") {
        divEl.innerHTML = `<b>앗, 당신이 바로 ${age}살 ${name}님이군요..!</b>`;
    } else {
        alert("이름과 나이를 모두 입력해주세요");
        divEl.innerHTML = "";
    }

}

function fnPrompt2() {
    const input = prompt("이름을 입력해주세요.", "");
    const promptResult = document.getElementById("area3");

    console.log(input);

    if (input !== null && input.trim() !== "") {
        promptResult.innerHTML = `<b> ${input} ㅎㅇ </b>`;
    } else {
        promptResult.innerText = "";
        alert("돌아가");
    }
}

function fnInput() {
    const id = document.getElementById("userId").value;
    const pwd = document.getElementById("userPwd").value;

    const result = document.getElementById("result");

    if (id != "" && pwd != "") {
        result.value = `아이디${id}, 비밀번호${pwd}`;
    } else {
        result.value = "다시 확인해 주세요";
        alert("오류");
    }
}

function fnChange() {
    const inputNum1 = document.getElementById("number1");
    const inputNum2 = document.getElementById("number2");
    const temp = inputNum1.value;
    inputNum1.value = inputNum2.value;
    inputNum2.value = temp;
}

document.getElementById("btn").onclick = function(){
    document.getElementById("namePrint").innerHTML = document.getElementById("name").value;
    const a = document.getElementById("namePrint");
    a.style.backgroundColor = "darkgray";
    a.style.width = "auto";
    a.style.boxSizing = "200px"
}

