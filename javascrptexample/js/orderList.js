// const num1 = document.getElementById("tData1Num");
// const num2 = document.getElementById("tData2Num");
// const num3 = document.getElementById("tData3Num");
// const num4 = document.getElementById("tData4Num");

// const total1 = document.getElementById("tData1Total");
// const total2 = document.getElementById("tData2Total");
// const total3 = document.getElementById("tData3Total");
// const total4 = document.getElementById("tData4Total");

// const price1 = Number(document.getElementById("t1Pr").innerText.replace(/[^\d]/g, ""));
// const price2 = Number(document.getElementById("t2Pr").innerText.replace(/[^\d]/g, ""));
// const price3 = Number(document.getElementById("t3Pr").innerText.replace(/[^\d]/g, ""));

// document.getElementById("btn1").addEventListener("click", (e) => {
//     total1.value = Number(price1 * num1.value);
//     total2.value = Number(price2 * num2.value);
//     total3.value = Number(price3 * num3.value);

//     num4.value = parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value);
//     total4.value = parseInt(total1.value) + parseInt(total2.value) + parseInt(total3.value);
// });

/**/

// 숫자형 추출하는 메서드
const uncomma = function(str) {
    return str.replace(/[^\d]+/g, '');
};

const update = function() {
    // 총수량 구하기
    let totalNumber = 0;
    // 속성 선택자 : input[type='number'] input 태그의 속성 중에 type="number"인 대상만.
    const number = document.querySelectorAll("input[type='number']");
    /*for(let i =0; i < number.length; i++){
        totalNumber += parseInt(number[i].value);
    }*/

    number.forEach(num => {
        totalNumber += parseInt(num.value);
    });
    document.getElementById("totalNumber").value = totalNumber;
    
    // 총합계 구하기
    let totalPrice = 0;
    // 속성 선택자 : input[name$='Total'] input 태그의 속성 중에 name 속성의 값이
    // ~Total로 끝나는 대상만.
    const price = document.querySelectorAll("input[name$='Total']");
    /*for(let i =0; i < price.length; i++){
        totalPrice += parseInt(price[i].value);
    }*/

    price.forEach(num => {
        totalPrice += parseInt(num.value);
    });

    document.getElementById("totalPrice").value = totalPrice;
};

document.getElementById("btn").addEventListener("click", update);

const input = document.querySelectorAll("input[type='number']");
input.forEach((target) => { 
    target.addEventListener("input", function(e){
        console.log(e.target);
        const id = e.target.id;
        const price = id.replace("Number", "Price");
        const total = id.replace("Number", "Total");
        document.getElementById(total).value = uncomma(document.getElementById(price).innerHTML) * parseInt(this.value);
        update();
    });
});