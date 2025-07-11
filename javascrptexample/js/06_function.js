// 선언적 함수(= 함수 선언식)
function test1(){
    alert("함수 선언식");
}

function bgChange(color){
    document.getElementById("divBg").style.backgroundColor = color;
}

function clickCount(){
    const btn = document.getElementById("btn1");
    btn.innerText = parseInt(btn.innerText) + 1;
}

function add(){
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    result = number1 + number2;

    document.getElementById("result").value = result;
}

//화살표 함수(Arrow Function)
// 1. 기본 형태 : ([매개변수]) => {}
document.getElementById("btn2-1").addEventListener("click", () => { alert("화살표 함수 기본 형태 입니다.");

});

// 2. 매개변수가 하나일 경우: 매개변수 => {}
document.getElementById("btn2-2").addEventListener("click", e => {
    console.log(e.target.id);
    e.target.style.backgroundColor = "yellow";
})

function printConsole(fn){ //매개변수로 함수가 전달됨
    // 1), 2) 실행문
    // console.log( fn(2) );
    // 3) 실행문
    console.log( fn("홍길동", 20) );
}

document.getElementById("btn2-3").addEventListener("click", () => {
    // 1) 함수 호출(익명 함수)
    // printConsole( function(num){return num * 10} );

    // 2) 함수 호출(화살표 함수)
    // printConsole( num => num * 5);

    // 3) {}, return 생략
    //printConsole( (name, age) => { "name" : name, "age" : age } ); //문법 오류
    //printConsole( (name, age) => {return {"name" : name, "age" : age} } );
    printConsole((name, age) => ({name : name, age: age}));
});

// 4) 화살표 함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click", (e) =>{
    //화살표 함수에서 this는 창 자체를 나타내는 객체(window)이다. 다시말해 this는 window를 참조함.
    console.log(e.target);

    //this.style.color = "white"; //불가능
    e.target.style.color = "red"; //가능
})

document.getElementById("fontColor").addEventListener("input", e => {
    const fontColor = e.target.value;
    document.getElementById("bicycle").style.color = fontColor;
});