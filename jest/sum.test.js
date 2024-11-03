//1.
// const sum = require('./sum');

// //test('description', testFunc)
// test('Adding two numbers => add 1 and 2 gives 3', () => {
//     expect(sum(1,2)).toBe(3);
// })

//SECTION - 2. Matchers 
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

// const myFunc = require('./sum');
// test('throwing error in invalid input', ()=>{ 
//     expect(
//         ()=>{
//             // myFunc(invalidInput);
//             myFunc('input');
//         }
//     ).toThrow();
// })

//SECTION - Testing Asynchronous Code

// const fetchData = require('./sum');

// test('the data is a hi hello bye', done => {
//     function callback(data){
//         try{
//             expect(data).toBe('hi hello bye');
//             done();
//         }
//         catch(err) {
//                 done(err);
//         }
//     }

//     fetchData(callback);
// })

//NOTE - The done parameter is a callback function provided by Jest that we can call to signal that the test is complete. This is useful for asynchronous tests, where we need to wait for an operation (like fetching data) before completing the test.

const fetchPromise = require('./sum');

//to resolve
// test('the data is peanut butter',()=>{
//     return expect(fetchPromise()).resolves.toBe('peanut butter');
// })

//to reject
// test('the fetch fails with an error', ()=> {
//     return expect(fetchPromise()).rejects.toThrow('error');
// })

//-----------------async await
// test('the data is peanut butter', async ()=>{
//     const data = await fetchPromise();
//     expect(data).toBe('peanut butter');
// })


//SECTION - Mock functions and Spies
//Mock func -> fake implementations of real functions -> used to isolate the code to be tested
//Spy-> tools to track the behaviors of those functions

// test('mock implementation of a basic funtion', ()=> {
//     const mock = jest.fn(x=> 42+x);
//     expect(mock(1)).toBe(43);
//     // expect(mock(2)).toBe(44);
//     expect(mock).toHaveBeenCalledWith(1);

// })

test('spying on a method of an object', () => {
    const video = {
        play() {
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play');
    //When we create a spy func, the og func is replaced with mock func -> helps to track, call and return values of that func -> in some cases, we might want to restore the og state -> so spy.mockRestore() used
    video.play();

    expect(spy).toHaveBeenCalled(); //checks if play method is called
    spy.mockRestore(); //used to restore the original implementation of the function
})