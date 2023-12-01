const pulse: string = 'hgg';  //строковый тип данных 

const sum: number = 453;        //числовой тип данных

const logi: boolean = true;     //логический тип данных

const numberArr: number[] = [1, 4, 6, 7];    //массив
const numberArr2: Array<number> = [1, 4, 6, 7];   //generic 
const numberStringArr: [number, string] = [167, 'Feder'];   //tuple
let variable: any = 43;   //any можно сменить тип данных, допустим на string

function nameFir (name: string): void {      //в аргументе так же указываем тип данных.
    console.log(name);                       //тип void указывает на то что функция ничего не возвращает.
};
nameFir('dfff');

function dr ():never {            //тип never  
    while (true) {

    }
};

type Login = string | number;   //type создание собственных элиасов, можно указать один или несколько типов
const grey: Login = 'fdfff';    //использование элиаса
const grey2: Login = 23442;

//интерфейсы
interface Name1 {              //создаём интерфейс Name1
    readonly id: string,        //readonly только для чтения
    color?: string,             //? является тем что данное значение не обязательное
    size: {
        width: number,
        height: number
    }
}

const nameLast: Name1 = {     //присваем тип Name1
    id: '843',
    size: {
        width: 8754,
        height: 54
    }
}
nameLast.color = '#556';

const nameLast2 = {} as Name1;      //присваеваем тип Name1
const nameLast3 = <Name1>{};        //присваеваем тип Name1

interface NewName extends Name1 {    //наследование интерфейса
    gerArea: () => number;            //добавление новых свойств
}

const name2: NewName = {              
    id: '43',
    size: {
        width: 34,                     //заполнение нового типа NewName
        height: 54
    },
    gerArea(): number {
        return this.size.width * this.size.height
    },
}

interface Iclock {
    time: Date,
    setTime(data: Date): void
}

class newClock implements Iclock {    //имплементируем класс
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Icss {
    [key: string]:string           //не присваеваем конкретное число элеметнов и их значений
}

const css: Icss = {
    border: '1px',
    margin_top: '10px'
}

//Enumes помогает структурировать код
enum member {
    One,
    Two,
    three = 'err'
}

console.log(member.Two)  //в консоле отобразится порядковый номер 1
console.log(member[1])  //отобразит Two
console.log(member.three)  //отобразит err

//функции


