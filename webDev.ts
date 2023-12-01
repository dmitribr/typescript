let isCompleted: boolean = true;   //логический тип
const num: number = 43.55;          //числовой
const str: string = `hello ${num}`; //строковый
const n: undefined = undefined;     //неопределённый
const u: null = null;               //null, в js null = object

const fin = (): void => {           //void тип отсуствует
    console.log('ничего не возвращает')
};
function fin2(): void {
    alert('function declaration')
}

let list: number[] = [232, 2, 9];         //указываем тип массива
let list1: Array<number> = [23, 4444];     //generic тип
let list2: [string, number] = ['dog', 34];  //tuple 
let list3: Array<any> = [34, 'gg', 3];      //any любой тип

enum Direct {               //enum - набор численных занчений
    up,                     //Direct.up = 0;
    down,                   //Direct[1] = down;
    close = 7,              //Direct.close = 7;
    open                    //Direct.open = 8;   зависит от предыдущего значения
}

const msg: string = 'Hello';
const funMsg = (msg: string): never => {    //never когда функция возвращает ошибку, или никогда не заканчивается
    throw new Error(msg);
}
const infinity = (): never => {
    while(true) {
    }
}

const create1 = (a: object | null): void => {  //object .  в аргументе указана способ объединения типов через |
};
create1({d: 23});

type NameType = number;                 //создаени типа, элиасы
const sum1: NameType = 34;


const create2 = (a: string, b?: number | string): string => {       //если аргумент не обязательный то ?
    return a + b;                                                   //так же дефолтный вариант b: number | string = 10
}

function create3 (a: string, ...skills: Array<string>) {            //массив аргументов
    return `${a}, my skills ${skills.join(' ')}`
}
console.log(create3('Jon', 'JS', 'TS', 'SQL'));

let mySkills: (name: string, last?: number | string) => string;     //присваеваем переменной значение функции create2
mySkills = create2; 


let user: {name: string, age: number} = {           //типизируем объект
    name: 'Frod',
    age: 44
};

type Person = {name: string, age: number, getpass?: () => string};      //создаём тип, gerpass не обязательный метод

let admin: Person = {
    name: 'Liu',
    age:22
};