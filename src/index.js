var qtdChar = document.querySelector("#qtd-char");
var form = document.querySelector("#form");
var vals = [];

function calcs(n) {
    vals = [];

    for (var i = 0; i < n; i++) {
        var arr = [];
        for (var j = 0; j < Math.floor(Math.random() * 20); j++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        vals.push(arr);
    }
}

function appendResults() {
    var target = document.querySelector(".results");
    target.innerHTML = "";
    calcs(parseInt(qtdChar.value));
    vals.forEach(function (item) {
        var res = 0;
        item.forEach(function (i) {
            res += i;
        });
        target.insertAdjacentHTML("beforeend", `<div> ${item.join(" + ")} = <strong>${res}</strong></div>`);
    });
}

var strong = document.querySelectorAll(".results div strong");
for(var i = 0; i < strong.length; i++){
    var n = strong[i].innerText.split("");
    strong[i].innerHTML = n[0] + "<span>" + n[1] + "</span>"
} 

function showPassword(){
    var pass = document.querySelectorAll(".results div strong");
    var password = document.querySelector(".password");
    password.innerText = "";
    for(var i = 0; i < pass.length; i++){
        var passVal = pass[i].innerText.split("");
        password.innerText += passVal[passVal.length - 1];
    }
}

function highLight(){
    var strong = document.querySelectorAll(".results div strong");
for(var i = 0; i < strong.length; i++){
    var n = strong[i].innerText.split("");
    if(n[1]){
        strong[i].innerHTML = n[0] + "<span>" + n[1] + "</span>"
    }else{
        strong[i].innerHTML = "<span>" + n[0] + "</span>"
    }
    
} 
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    appendResults();
    document.querySelector("h2").style.display = "block";
    showPassword();
    highLight();
    
    console.log(vals);
});



