//1.
// const sum = require('./sum');

// //test('description', testFunc)
// test('Adding two numbers => add 1 and 2 gives 3', () => {
//     expect(sum(1,2)).toBe(3);
// })

//2. Matchers 
// test('2+2 is 4', ()=>{
//     // expect(2+2).toBe(4); -> toBe used with numbers, strings booleans
//     expect(2+2).toEqual(4);
// })

// test('object assignment', ()=>{
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one:1, two:2});       //for objects-> it's toEqual
// })

// test('null is falsy', ()=>{
//     // const n = null;
//     const n = '';
//     // const n = 0;
//     expect(n).toBeFalsy();
// })

// test('n is truthy', ()=>{
//     // const n = 1;
//     // const n = 'hi';
//     const n = 0;
//     expect(n).toBeTruthy();
// })

const myFunc = require('./sum');
test('throwing error in invalid input', ()=>{ 
    expect(
        ()=>{
            // myFunc(invalidInput);
            myFunc('input');
        }
    ).toThrow();
})