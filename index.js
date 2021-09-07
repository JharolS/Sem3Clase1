let poplimit = 20;

let fish = 0;

while (fish < poplimit) {
    fish++;
    console.log(`There's room for ${poplimit - fish} more fish` )
};

// initiate an infinite loop

//while (true) {
    // execute code forever
//}

//set a conditio to true

const iceCapsAreMelting= true
let polarBears = 8;
while(iceCapsAreMelting) {
    console.log(`There are ${polarBears} polar bears.`);
    polarBears--;
    if (polarBears === 0) {
        console.log("There are no polar bears left.")
        break;
    }
}
//set variable to 0
let x = 0

do {
    x ++;
    console.log(x);
} while(false)

let i = 0;
do {
    console.log('Hello world!');
    i ++;
} while (i < 5)

// for loop

// for(initializatiom; condition; final expression/ incremetation) {
    //execute code
// }

for (let i = 0; i < 10; i++){
    console.log(i)
}
// for (; ; i++) {
    // if (i > 5){
        //break
    //}
    // console.log(i);
//}

//initialize empty array
const arrayExample = [];

for (let i = 0; i < 6; i++) {
    arrayExample.push(i);
    console.log(arrayExample)
}

let fishList = ['goldenfish', 'clownfish', 'catfish', 'bluegill', 'pufferfish'];

for (let i = 0; i <fishList.length; i++) {
    console.log(fishList[i])
}

const shark = {
    species: 'hammerhead',
    color: 'gray',
    numberOfTeeth: Infinity
}
for (atribute in shark){
    console.log(shark[atribute])
}

for (let fishAtribute of fishList) {
    console.log(fishAtribute)
}

for (let [index, fishAtribute] of fishList.entries()){
    console.log(index, fishAtribute)
}

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    maritalStatus: 'married'
}

for (let info in person){
    console.log(`${info}: ${person[info]}`)
}

const animals = ['dog', 'cat', 'bird', 'fish', 'lizard'];

animals.forEach((animal) => {
    console.log(animal)
})

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
        console.log(`i= ${i}, j= ${j}`)
    }
}

for (let i = 0; i < animals.length; i++) {
    if(animals[i] === 'cat') break;
    console.log(`index: ${i}, value: ${animals[i]}`)
}

let n = 0;
while(n < 10) {
    if(n === 3) break;
    n++;
    console.log(n)
}

for (let i = 1; i <= 10; i++) {
    if(i % 2 === 1) continue;
    console.log(i);
}

myloop:
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0) continue myloop
    console.log(i);
}

loopOne: for (let i = 1; i <= 5; i++) {
    loopTwo: for (let j = 1; j <= 5; j++){
        if (i === 3) continue loopOne;
        if (j === 3) break loopTwo;
        console.log(`i= ${i}, j= ${j}`);
    }
}

// number of iteration
// use 100 iteration

const iteration = 100;

const arraySize = new Array(iteration);

console.log('Starting speed/execution test permance with arraySize iteration', iteration);
console.log(`arraySize ${arraySize.length}`)

// for 
console.time('for');
for(let i = 0; i<iteration; i++){}
console.timeEnd('for')

//while
console.time('while')
let y=0;
while(y < iteration){
    y++;
}
console.timeEnd('while')

//do...while
console.time('do...while')
let ie=0;
do {ie++;} while(ie < iteration);
console.timeEnd('do...while')

//for...in 
console.time('for...in')
for(let i in arraySize){}
console.timeEnd('for...in')

//for...of
console.time('for...of')
for(let i of arraySize){}
console.timeEnd('for...of');

// for...each
console.time('for...each');
arraySize.forEach((item) => {});
console.timeEnd('for...each');
