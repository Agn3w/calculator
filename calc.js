function addition(a,b){ 
   return (a+b);
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    if(b === 0){
    return "RULE 37"
}else {return a/b;}
}

function operate(){
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");
    const screenText = screen1.textContent;
    if(screenText.includes("+")){
      const screenSplit = screenText.split("+");
      let string1 = screenSplit[0];
      let string2 = screenSplit[1];
      let a = parseFloat(string1);
      let b = parseFloat(string2);
      screen2.textContent = addition(a,b);
    } else if(screenText.includes("-")){
            const screenSplit = screenText.split("-");
            let string1 = screenSplit[0];
            let string2 = screenSplit[1];
            let a = parseFloat(string1);
            let b = parseFloat(string2);
            screen2.textContent = subtraction(a,b);
          } else if(screenText.includes("*")){
        const screenSplit = screenText.split("*");
        let string1 = screenSplit[0];
        let string2 = screenSplit[1];
        let a = parseFloat(string1);
        let b = parseFloat(string2);
        screen2.textContent = multiplication(a,b);
      } else if(screenText.includes("/")){
        const screenSplit = screenText.split("/");
        let string1 = screenSplit[0];
        let string2 = screenSplit[1];
        let a = parseFloat(string1);
        let b = parseFloat(string2);
        screen2.textContent = division(a,b);
      }}



const b1 = document.getElementById("b1")
b1.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "1";
});

const b2 = document.getElementById("b2")
b2.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "2";
});

const b3 = document.getElementById("b3")
b3.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "3";
});

const b4 = document.getElementById("b4")
b4.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    const screen1 = document.getElementById("screen1")
    if(screen1.textContent.includes("+") || screen1.textContent.includes("-") || screen1.textContent.includes("*") || screen1.textContent.includes("/")){
        screen1.textContent += screen2.textContent;
        operate();
        screen1.textContent = screen2.textContent + "+"
        screen2.textContent = ""

    } else {screen1.textContent += screen2.textContent + "+";
    screen2.textContent = "";
}}) 

const b5 = document.getElementById("b5")
b5.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "4";
});

const b6 = document.getElementById("b6")
b6.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "5";
});

const b7 = document.getElementById("b7")
b7.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "6";
});

const b8 = document.getElementById("b8")
b8.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    const screen1 = document.getElementById("screen1")
    if(screen1.textContent.includes("+") || screen1.textContent.includes("-") || screen1.textContent.includes("*") || screen1.textContent.includes("/")){
        screen1.textContent += screen2.textContent;
        operate();
        screen1.textContent = screen2.textContent + "-"
        screen2.textContent = ""

    } else {screen1.textContent += screen2.textContent + "-";
    screen2.textContent = "";
}}) 


const b9 = document.getElementById("b9")
b9.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "7";
});

const b10 = document.getElementById("b10")
b10.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "8";
});

const b11 = document.getElementById("b11")
b11.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "9";
});

const b12 = document.getElementById("b12")
b12.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    const screen1 = document.getElementById("screen1")
    if(screen1.textContent.includes("+") || screen1.textContent.includes("-") || screen1.textContent.includes("*") || screen1.textContent.includes("/")){
        screen1.textContent += screen2.textContent;
        operate();
        screen1.textContent = screen2.textContent + "*"
        screen2.textContent = ""

    } else {screen1.textContent += screen2.textContent + "*";
    screen2.textContent = "";
}}) 


const b13 = document.getElementById("b13")
function decimal(){
        const screen2 = document.getElementById("screen2")
        const screen2Text = screen2.textContent
        if(screen2Text.includes(".")) {
            b13.removeEventListener("click", decimal);
        } else {screen2.textContent += ".";
    }};
b13.addEventListener("click", decimal)



const b14 = document.getElementById("b14")
b14.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    screen2.textContent += "0";
});

const b15 = document.getElementById("b15")
b15.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    const screen1 = document.getElementById("screen1")
    screen1.textContent += screen2.textContent;
    operate();
});

const b16 = document.getElementById("b16")
b16.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    const screen1 = document.getElementById("screen1")
    if(screen1.textContent.includes("+") || screen1.textContent.includes("-") || screen1.textContent.includes("*") || screen1.textContent.includes("/")){
        screen1.textContent += screen2.textContent;
        operate();
        screen1.textContent = screen2.textContent + "/"
        screen2.textContent = ""

    } else {screen1.textContent += screen2.textContent + "/";
    screen2.textContent = "";
}}) 


const clear = document.getElementById("clear")
clear.addEventListener("click", function(){
   location.reload();})

const del = document.getElementById("delete")
del.addEventListener("click", function(){
    const screen2 = document.getElementById("screen2")
    const screenElement = screen2.textContent
    const newScreen = screenElement.slice(0, -1)
    screen2.innerHTML = newScreen;
});

