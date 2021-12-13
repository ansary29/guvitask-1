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