let text = document.getElementById('text');
let sum = document.querySelector(".span");
let fill = document.querySelector(".fillChocolate");
let fillCaram = document.querySelector(".fillCaram");
let fillB = document.querySelector(".fillB");
let fillMarsh = document.querySelector(".marshm");
let iceСrPrice = document.querySelector(".iceСrPrice");
let allPrice = document.querySelector(".iceСrPrice");

let glass;
let price = 0;
let chocolate;
let caramel;
let berries;
let iceСreamPrice;

function chooseСup() {
    glass = prompt("1.Большой стаканчик, 2.Маленький стаканчик");
    if (glass == "1") {
        alert("Вы выбрали большой стаканчик - 25 uan.");
    }
    else if (glass == "2") {
        alert("Вы выбрали маленький стаканчик - 10 uan.");
    }
    else {
        alert("Введите цифру 1 или 2.");
    }
    console.log(price + "грн.");
    printMessage();
}

function printMessage() {
    if (glass == "1") {
        text.innerHTML = "Стоимость заказа в большом стаканчике - ";
        price += 25;
        console.log("Стоимость  большого стаканчика -  " + price + " грн.");
    }
    else if (glass == "2") {
        text.innerHTML = "Стоимость заказа в маленьком стаканчике  -";
        price += 10;
        console.log("Стоимость маленького стаканчика -  " + price + " грн.");
    }
}

function chooseFilling() {
    alert("Выберите наполнение для мороженного : одно или несколько :)");
    chocolate = prompt("Шоколад", "Да или Нет");
    console.log("Шоколад " + chocolate);
    caramel = prompt("Карамель", "Да или Нет");
    console.log("Карамель " + caramel);
    berries = prompt("Ягоды", "Да или Нет");
    console.log("Ягоды " + berries);
}


function checkAnswer(chlt, caram, berr) {
    if (chlt === "Да" || chlt === "да") {
        price += 5;
        console.log(price);
        console.log("Добавляем наполнитель шоколад плюс 5 грн итого -  " + price + " грн.");
        fill.innerHTML = "с шоколадом,";
    }
    else if (chlt == "Нет" || chlt == "нет") {
        console.log(chlt);
        console.log(price);
        fill.innerHTML = "без шоколада";
    }

    if (caram == "Да" || caram == "да") {
        price += 6;
        console.log(price);
        console.log("Добавляем наполнитель карамель плюс 6 грн итого -  " + price + " грн.");
        fillCaram.innerHTML = "с карамелью,";
    } else if (caram == "Нет" || caram == "нет") {
        console.log(caram);
        console.log(price);
    }

    if (berr == "Да" || berr == "да") {
        price += 10;
        console.log(price);
        console.log("Добавляем наполнитель ягоды плюс 10 грн итого -  " + price + " грн.");
        fillB.innerHTML = " с ягодами"
       
    } else if (berr == "Нет" || berr == "нет") {
        console.log(berr);
        console.log(price);
    }
   
}

function addMarshm() {
    let marshm = prompt("Посыпать маршмелоу?", "Да или Нет");
    if (marshm == "Да" || marshm == "да") {
        price += 5;
        console.log(price);
        console.log("Украсим маршмелоу :) плюс 5 грн итого -  " + price + " грн.");
        fillMarsh.innerHTML = " с украшением маршмелоу "
       /*  sum.innerHTML = price + " грн."; */
    }
    else if (marshm == "Нет" || marshm == "нет") {
        console.log(marshm);
        console.log(price);
        
    }
}


chooseСup();
chooseFilling();
checkAnswer(chocolate, caramel, berries);
addMarshm();
iceСrPrice.innerHTML = "Цена за порцию";

allPrice.innerHTML = `  ${price} грн.`;













