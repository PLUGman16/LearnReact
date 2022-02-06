enum Methods {
    add = 0,
    sub = 1,
}


function Calculate(method: Methods, left: number, right: number): number {
    switch(method) {
        case Methods.add: return left + right
        case Methods.sub: return left - right
    }
}

console.log(Calculate(Methods.add, 2, 5))

interface Ifn {
    (a:number, b?:string): string
}

const item1:Ifn = (a) => {
    return `${a}`
}