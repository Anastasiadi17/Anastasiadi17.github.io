let param = {
    "Options": {
    "option1": 1000,
    "option2": 2000,
    "option3": 3000
    },
    "checkbox1": {
    "prop1": 600
    },
    "prodType":
    [1000, 6500, 35000]
};
console.log(param);
let pr=0; //Для радиокнопок
let pch=0; //Для чекбокса
window.addEventListener("DOMContentLoaded", function (event) {
    let p1 = document.getElementsByName("pole1"); //Количество товара
    let r = document.getElementById("Stoimost"); //Результат(конечная стоимость)
    let s = document.getElementsByName("prodType"); //Изначальный выбор(1, 2 или 3)
    s[0].addEventListener("change", function(event) {
      let select = event.target; //Делегирование событий
      console.log(select.value);
      let re = /^\s*\d+\s*$/;
      if(re.exec(p1[0].value))
      {
        if (select.value == "1")
        {r.innerHTML=param.prodType[0]*p1[0].value;}
        if (select.value == "2")
        {
          r.innerHTML=(param.prodType[1]+pr)*p1[0].value;
          let rad = document.querySelectorAll(".prodOptions input[type=radio]"); //Все элементы для селектора радиокнопок
          rad.forEach(function(radio) { //Функция для каждой радиокнопки(по очереди для всех)
          radio.addEventListener("change", function(event) {
          rad = event.target;
          console.log(rad.value);
          if(re.exec(p1[0].value))
          {
            if(document.getElementById("option1").checked)
            {
                r.innerHTML=(param.prodType[1]+
                             param.Options.option1)*p1[0].value;
                pr=param.Options.option1;
            }
            if(document.getElementById("option2").checked)
            {
                r.innerHTML=(param.prodType[1]+
                             param.Options.option2)*p1[0].value;
                pr=param.Options.option2;
            }
            if(document.getElementById("option3").checked)
            {
                r.innerHTML=(param.prodType[1]+
                             param.Options.option3)*p1[0].value;
                pr=param.Options.option3;
            }
        }
        else {alert("Некорректный ввод");}
        });    });
        }
        if (select.value == "3")
        {
          r.innerHTML=(param.prodType[2]+pch)*p1[0].value;
          let ch = document.querySelectorAll(".checkbox1 input[type=checkbox]");
          ch.forEach(function(checkbox) {
          checkbox.addEventListener("change", function(event) {
          ch = event.target;
          console.log(ch.value);
          if(re.exec(p1[0].value))
          {
            if(document.getElementById("ch1").checked)
            {
                r.innerHTML=(param.prodType[2]+
                             param.checkbox1.prop1)*p1[0].value;
                pch=param.checkbox1.prop1;
            }
            else
            {
                r.innerHTML=(param.prodType[2])*p1[0].value;
                pch=0;
            }
          }
          else alert("Некорректный ввод");
        });
      });
      }
    }
  else {alert("Некорректный ввод");}
    });
    return false;
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("prodType");
s[0].addEventListener("change", function(event) {
let select = event.target;
let radios = document.getElementById("prodOptions");
console.log(select.value);
radios.style.display = (select.value == "2" ? "block" : "none");
});
let r = document.querySelectorAll(".prodOptions input[type=radio]");
r.forEach(function(radio) {
radio.addEventListener("change", function(event) {
  let r = event.target;
  console.log(r.value);
});
});
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("prodType");
s[0].addEventListener("change", function(event) {
  let select = event.target;
  let checkboxes = document.getElementById("checkbox1");
  console.log(select.value);
  checkboxes.style.display = (select.value == "3" ? "block" : "none");
});
let r = document.querySelectorAll(".checkbox1 input[type=checkbox]");
c.forEach(function(checkbox) {
  checkbox.addEventListener("change", function(event) {
    let c = event.target;
    console.log(r.value);
  });
});
});