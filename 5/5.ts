interface MyArray<T> {
    [N: number]: T

    map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

const myArray: MyArray<number> = [1,2,3]

console.log(myArray.map((f) => `f + ${f}`))
console.log(myArray.map((f, index, arr) => f + 1))

function indetity<T extends Array<number>>(arg: T): T {
    return arg
}
indetity([123])
indetity(['qwerty'])



//Встроенные Generic

interface IExample<T> {
    type: string
    //T передается так же как и свойтсва в функциях
    value: T
    isEmpty: boolean
}

//Omit выбрасывает ключи из интерфейса
const omittedObj1: Omit<IExample<string>, 'isEmpty'> = {
    type: 'qwerty',
    //Ошибка на value тк в типах указали string
    value: 12345
}
const omittedObj2: Omit<IExample<string>, 'value' | 'isEmpty'> = {
    type: 'qwe',
    isEmpty: true
}

//Pick Оставляет только указанный ключи в интерфейсе
const picked1: Pick<IExample<number>, 'isEmpty'> = {
    isEmpty: true
} 
const picked2: Pick<IExample<number>, 'isEmpty'> = {
    value: 1234
} 