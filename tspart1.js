var tet = 'hgg'; //строковый тип данных 
var sum = 453; //числовой тип данных
var logi = true; //логический тип данных
var numberArr = [1, 4, 6, 7]; //массив
var numberArr2 = [1, 4, 6, 7]; //generic 
var numberStringArr = [167, 'Feder']; //tuple
var variable = 43; //any можно сменить тип данных, допустим на string
function nameFir(name) {
    console.log(name); //тип void указывает на то что функция ничего не возвращает.
}
;
nameFir('dfff');
function dr() {
    while (true) {
    }
}
;
var grey = 'fdfff'; //использование элиаса
var grey2 = 23442;
var nameLast = {
    id: '843',
    size: {
        width: 8754,
        height: 54
    }
};
nameLast.color = '#556';
var nameLast2 = {}; //присваеваем тип Name1
var nameLast3 = {}; //присваеваем тип Name1
var name2 = {
    id: '43',
    size: {
        width: 34, //заполнение нового типа NewName
        height: 54
    },
    gerArea: function () {
        return this.size.width * this.size.height;
    },
};
