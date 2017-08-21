let numbers = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

function *gen(n) {
    for(let i=0; i<n; i++)
        yield i;
}
//map function 总是和iterable绑定在一起
let numbers2 = Array.from(gen(10), (value) => value + 1);
//slice函数左闭右开
let arr = numbers2.slice(1,5)
console.log(arr);              // 2,3,4

let ints = new Int16Array([25, 50]),
    mapped = ints.map(v => v * 2);

console.log(mapped.length);        // 2
console.log(mapped[0]);            // 50
console.log(mapped[1]);            // 100

console.log(mapped instanceof Int16Array);  // true

let items = Array.of(1, 2);
console.log(items.length);          // 2
console.log(items[0]);              // 1
console.log(items[1]);              // 2

items = Array.of(2);
console.log(items.length);          // 1
console.log(items[0]);              // 2

items = Array.of("2");
console.log(items.length);          // 1
console.log(items[0]);              // "2"