// перевод температуры из цельсия в фарингейт
var Ts = prompt("введите температуру в градусах цельсия");
var Tf = (9/5) * Ts + 32;

alert ('температура по фарингейту ' + Tf);

//2. Работа с переменными. Объявить две переменные:
// admin и name. Записать в name строку "Василий"; 
//Скопировать значение из name в admin. 
//Вывести admin (должно вывести «Василий»).

  var admin, name;
      name = 'Василий';
      admin = name;
    alert(admin);

//* Чему будет равно JS-выражение 1000 + "108"?

alert (1000 + "108");
//первое значение цифры второе строка *буквы*

// Самостоятельно разобраться с атрибутами тега script (async и defer).

/* script async грузится фоновом режиме на странице независимо и выполняется мам по себе
 при этом он не блокирует 
страницу как обычный скрипт. defer грузится 
в фоновом режиме и выполняется после загрузки всей страници.*/
