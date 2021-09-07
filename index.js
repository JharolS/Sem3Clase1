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