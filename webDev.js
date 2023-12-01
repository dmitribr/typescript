var isCompleted = true; //логический тип
var num = 43.55; //числовой
var str = "hello ".concat(num); //строковый
var n = undefined; //неопределённый
var u = null; //null, в js null = object
var fin = function () {
    console.log('ничего не возвращает');
};
function fin2() {
    alert('function declaration');
}
var list = [232, 2, 9]; //указываем тип массива
var list1 = [23, 4444]; //generic тип
var list2 = ['dog', 34]; //tuple 
var list3 = [34, 'gg', 3]; //any любой тип
var Direct;
(function (Direct) {
    Direct[Direct["up"] = 0] = "up";
    Direct[Direct["down"] = 1] = "down";
    Direct[Direct["close"] = 7] = "close";
    Direct[Direct["open"] = 8] = "open"; //Direct.open = 8;   зависит от предыдущего значения
})(Direct || (Direct = {}));
var msg = 'Hello';
var funMsg = function (msg) {
    throw new Error(msg);
};
var infinity = function () {
    while (true) {
    }
};
var create1 = function (a) {
};
create1({ d: 23 });
var sum1 = 34;
var create2 = function (a, b) {
    return a + b; //так же дефолтный вариант b: number | string = 10
};
function create3(a) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return "".concat(a, ", my skills ").concat(skills.join(''));
}
console.log(create3('Jon', 'JS', 'TS', 'SQL'));
var mySkills; //присваеваем переменной значение функции create2
mySkills = create2;
var user = {
    name: 'Frod',
    age: 44
};
var admin = {
    name: 'Liu',
    age: 22
};
