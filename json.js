// For the given JSON iterate over all for loops (for, for in, for of, forEach)


let students = {
    name : 'ansary',
    M1 : 30,
    M2 : 40,
    M3 : 50,
    RollNo : '40000',
    isHosteler : true
}

// iterating the JSON using for in loop
console.log('output based on for in loop')
for ( key in students)
{
    console.log(key,':',students[key]);
}

// iterating the JSON using for loop
console.log('output based on for loop')
let studArr = Object.entries(students);

for (i = 0; i < studArr.length; ++i)
{
    let [key,value] = studArr[i];
    console.log(key,':',value);
}

// iterating the JSON using for of loop
console.log('output based on for of in loop')
for (val of studArr)
{
    let [key,value] = val;
    console.log(key,':',value);
}

// iterating the JSON using for each loop
console.log('output based on for each loop')
studArr.forEach(([key,value]) => console.log(key,':',value));