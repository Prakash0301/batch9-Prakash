//create array
var favcolors = ["red", "white", "black"]
favcolors[4] = "yellow"
favcolors[5] = "50"
console.log(favcolors);

//create a object
var person = {
    name: "shankar",
    age: 25,
    gender: "Male",
    address: "india",
}
console.log(person);

//If, If-else statement

var mark = 85;
if (mark >= 75) {
    console.log('your are pass');
}
else {
    console.log('your are failed!');
}

//If, else-if statement
var whoIsHere = 'not anyone'
if (whoIsHere == 'student') {
    console.log('hi i am a student');
}
else if (whoIsHere == 'teacher') {
    console.log('hi i am a teacher');
}
else if (whoIsHere == 'headmaster') {
    console.log('hi i am a headmaster');
}
else {
    console.log('dont no you are');
}

//for loop statement

for (var i = 0; i <= 6; i++) {
    if (i % 2 == 0) {
        console.log("EvenNumber#", i);
    }
}

//while loop statement

var i = 1;
while (i <= 10) {
    if (i % 2 !== 0) {
        console.log('Odd Number#', i);
    }
    i++;
}

//Do while loop statement

var i = 1;
while (i <= 10) {
    if (i % 2 !== 0) {
        console.log('Odd Number#', i);
    }
    i++;
}
do {
    console.log(i);
    if (i % 2 !== 0) {
        console.log('do while Number', i)
    }
    i++;
} while (i <= 10)


//Switch case, break , continue statement
var grade = "a";
switch (grade) {
    case "a":
        console.log("super grade");
        break;
    case "b":
        console.log("Excellent");
        break;
    case "d":
        console.log("Good");
        break;
    case "e":
        console.log("Just pass");
        break;
    case "f":
        console.log("Failed!");
        break;
    default:
        console.log("Unknow grade");
}

// continue statement

for (var i = 0; i < 6; i++) 
{
    if (i == 3)
        continue;
    console.log("EvenNumber#", i);

}