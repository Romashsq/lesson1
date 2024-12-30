// var num = 5;

// var num_1 = "5";

// const numbe = "Lol";

// console.warn(numbe);

// console.log(num);

// console.error(num_1);

//Marth

var num_1 = 5;
var num_2 = 14;

console.log("Прибавление " + (num_1 + num_2));
console.log("Вычитание " + (num_1 - num_2));

var num_3 = 100;
num_3 += 70;
console.log("Прибавление без 2 переменной " + num_3);

var str_1 = Number("100");
var str_2 = Number("56");
console.log("Прибавление строк " + (str_1 + str_2));

var num_4 = 70;
console.log("Math " + (num_4 - 20 + 5 + 25 + 78 + 23));

console.log("Math min " + Math.min(5, 7, 2, 9, 6, 4, 0, 1));
console.log("Math max " + Math.max(1, 4, 6, 7, 8, 9, 0, 3));

//If, else, else if
var number = 100;

if (number == 99) {
  console.log("Yes its 100 ");
} else if (number > 101) {
  console.log("Cool >");
} else if (number < 100) {
  console.error("You eblan <100");
} else {
  console.warn("All your variant = eblans");
}

var number2 = 10;
var DavidDick = true;

if (number2 == 10 || DavidDick == true);
{
  console.log("Число = 10 Или Давид true Dick");
}

var House = 3;
var House_Windows = true;

if (House == 1 && House_Windows == true) {
  console.info("You have 3 house with windows");
} else House < 5 && House_Windows == false;
console.warn("You dont have 3 house with windows");

var house = true;

if (house == true) {
  console.log("You have true house");
} else house == false;
console.log("Your kvartira false");

var chislo = 150;

if (chislo == 100) {
  console.log("Your chislo = 150 ");
} else chislo >= 150;
{
  console.log("You have 150 or more");
}

var Kirill = "Pisun";
var David = "Pisun";
var Roma = "Pisun";

if (Kirill == "Pizda" && David == "Pisun" && Roma == "Pisun") {
  console.log("They have dicks");
} else Kirill == "Pizda";
console.log("Kirill have pizda");

var Roma = 100;
if (Roma == 5) console.log("sosi");
else {
  console.log("nety pisi");
}

var lox = 75;

if (lox == 75) console.warn("Lox have 75 money");
else lox > 75;
console.error("LOX DONT HAVVE MONEY");

//Масивы

var arr = [5, "cool", 55];
arr[1] = "very cool"; //даем новое имя масиву
console.log(arr[1]);
console.log(arr.length); //длина масива

// Многомерные масивы

var lol = [
  [100, true],
  [50, "romashsq"],
  [0, 500],
];

lol[2][1];
console.log(lol[2][1] + 500);

lol[1][1] = "inst romashsq"; //Меняем имя второго элемениа (romashsq)

console.log(lol); //Выводим весь многомерный масив
