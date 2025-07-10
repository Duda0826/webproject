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