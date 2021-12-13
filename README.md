# guvitask-3

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



// Create your own resume data in JSON format


const Myresume = {
    personalInfo : {
        name :{
            firstName : 'mohamed',
            lastName : 'ansary'
        },
        emailId : 'thamimansary29@gamil.com',
        contactNo : ['9944175086'],
        degree : 'BE',
        department : 'mechanical',
        yearOfpassing : '2016',
        collegeName : 'chendu college of engineering and techonology',
        CGPA : 6.0
    },
    skillSets : ['js','HTML5','CSS3','SQL'],
   
    workExperience : [
        {
            companyName : 'wabco india limited',
            Designation : 'production',
            location : 'Chengalpattu',
            WorkingPeriod : '18/04/2017 - 30/10/2017'
        },
        {
            companyName : 'Spectro analytical lab limited',
            Designation : 'inspection engineer',
            location : 'Chennai',
            WorkingPeriod : '07/03/2019 to 30/09/2019'
        }

    ],
   
    OtherDetails : {
        currentCity : 'chengalpattu',
        Gender : 'Male',
        NoOfArrears : 'NIL'
    }
    

}

console.log(Myresume);
