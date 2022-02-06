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