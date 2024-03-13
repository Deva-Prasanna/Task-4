// 1.Create your own resume data in JSON format.
const resume =
{
    "name": "Deva prasanna A",
    "age": 23,
    "email": "prasannadevatvr@gmail.com",
    "phone": "636939564*",
    "address": "53,bajanai mada senthu, thiruvarur.",
    "education": [
      {
        "degree": "Higher Secondary",
        "major": "Computer Science",
        "university": "vs boys higher secondary school",
        "year": "2018"
      },
      {
        "degree": "Bachelor of Engineering",
        "major": "Mechanical Engineering",
        "university": "Rajalakshmi Engineering College",
        "year": "2022"
      }
    ],
    "experience": [
        {
            "position":"Assistant System engineer- ILP Trainee",
            "company": "TATA consultancy Services",
            "startDate": "03-10-2022",
            "endDate": "20-11-2022",
            "responsibilities":[
                "designing team member",
                "handling the whole team for demo project in the training period."
            ]
        },
    {
        "position": "SYSTEM ENGINEER",
        "company": "TATA consultancy Services",
        "startDate": "21-11-2022",
        "endDate": null,
        "responsibilities": [
          "drawing updates using solidworks 3d software",
          "redline checking",
          "vault and agile related work"
        ]
      }
    ]
}
// 2.For the above JSON, itreate over all for loops (for,for in ,for of,forEach).

// For loop:  
  for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
  }
 //OUTPUT:
  // name: Deva prasanna A
  //age: 23
  //email: prasannadevatvr@gmail.com
  //phone: 636939564*
  //address: 53,bajanai mada senthu, thiruvarur.
  //education: [object Object],[object Object]
  //experience: [object Object],[object Object]


//for in:
for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(`${key}: ${resume[key]}`);
    }
  }
//OUTPUT:
// name: Deva prasanna A
  //age: 23
  //email: prasannadevatvr@gmail.com
  //phone: 636939564*
  //address: 53,bajanai mada senthu, thiruvarur.
  //education: [object Object],[object Object]
  //experience: [object Object],[object Object]

// for of:
for (let education of resume.education) {
    console.log(`Degree: ${education.degree}`);
    console.log(`University: ${education.university}`);
  }

// OUTPUT:
  //Degree: Higher Secondary
  //University: vs boys higher secondary school
  //Degree: Bachelor of Engineering
  //University: Rajalakshmi Engineering College


// for Each:
resume.experience.forEach((exp) => {
    console.log(`Position: ${exp.position}`);
    console.log(`Company: ${exp.company}`);
  });
//OUTPUT:
  //Position: Assistant System engineer- ILP Trainee
  //Company: TATA consultancy Services
  //Position: SYSTEM ENGINEER
  // Company: TATA consultancy Services
  