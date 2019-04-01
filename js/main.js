"use strict";

let budgetOneDay;
let appData ={
  money: "",
  time: "",
  expenses: {},
  optionalExpenses: "",
  income: "",
  saving: false
};

appData.money = parseInt(prompt("Ваш бюджет на месяц?"));
appData.time = prompt("YYYY-MM-DD");
appData.expenses[String(prompt("Введите обязательную статью расходов в этом месяце"))] = String([prompt("Во сколько обойдется?")]);
budgetOneDay = appData.money/30;

alert(budgetOneDay);

// типы данных:
// Boolean (Булев, Логический тип)
// Null (Null тип )
// Undefined (Неопределенный тип)
// Number (Число)
// String (Строка)
// Symbol (в ECMAScript 6)
// Object (Объект)

// console.log

// || - логическое или. Если выполняется одно из условий, то возвращается true, проверка идет до первого true
// && - логическое и. Если не выполняется одно из условий, то возвращается false, проверка идет до первого false или до конца





