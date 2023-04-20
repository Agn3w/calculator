function addition(a,b){ 
   return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function operate()



const b1 = document.getElementById("b1")
b1.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "1";
});

const b2 = document.getElementById("b2")
b2.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "2";
});

const b3 = document.getElementById("b3")
b3.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "3";
});

const b4 = document.getElementById("b4")
b4.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "+";
    const b13 = document.getElementById("b13")
b13.addEventListener("click", decimal);
function decimal(){
    const screen = document.getElementById("screen2")
    screen.textContent += ".";
    b13.removeEventListener("click", decimal);
    }});

const b5 = document.getElementById("b5")
b5.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "4";
});

const b6 = document.getElementById("b6")
b6.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "5";
});

const b7 = document.getElementById("b7")
b7.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "6";
});

const b8 = document.getElementById("b8")
b8.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "-";
    b13.addEventListener("click", decimal);
function decimal(){
    const screen = document.getElementById("screen2")
    screen.textContent += ".";
    b13.removeEventListener("click", decimal);
}});

const b9 = document.getElementById("b9")
b9.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "7";
});

const b10 = document.getElementById("b10")
b10.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "8";
});

const b11 = document.getElementById("b11")
b11.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "9";
});

const b12 = document.getElementById("b12")
b12.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "*";
    b13.addEventListener("click", decimal);
function decimal(){
    const screen = document.getElementById("screen2")
    screen.textContent += ".";
    b13.removeEventListener("click", decimal);
}});

const b13 = document.getElementById("b13")
b13.addEventListener("click", decimal);
function decimal(){
    const screen = document.getElementById("screen2")
    screen.textContent += ".";
    b13.removeEventListener("click", decimal);
};



const b14 = document.getElementById("b14")
b14.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "0";
});

const b15 = document.getElementById("b15")
b15.addEventListener("click", operate());

const b16 = document.getElementById("b16")
b16.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent += "/";
    b13.addEventListener("click", decimal);
function decimal(){
    const screen = document.getElementById("screen2")
    screen.textContent += ".";
    b13.removeEventListener("click", decimal);
}});

const clear = document.getElementById("clear")
clear.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    screen.textContent = "";
    b13.addEventListener("click", decimal);
function decimal(){
    const screen = document.getElementById("screen2")
    screen.textContent += ".";
    b13.removeEventListener("click", decimal);
}});

const del = document.getElementById("delete")
del.addEventListener("click", function(){
    const screen = document.getElementById("screen2")
    const screenElement = screen.textContent
    const newScreen = screenElement.slice(0, -1)
    screen.innerHTML = newScreen;
});

