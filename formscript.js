let addproject = document.getElementById("addproject");
      let PersonalProject =
        document.getElementsByClassName("Personal-Project")[0]; // main container
      var count = 1;
      addproject.addEventListener("click", () => {
        // Create outer wrapper
        const projectDiv = document.createElement("div");

        const projectnumber = document.createElement("h6");
        projectnumber.innerHTML = `project${++count}`;

        // Delete (❌) button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "❌";
        deleteBtn.style.position = "absolute";
        deleteBtn.style.top = "5px";
        deleteBtn.style.right = "5px";
        deleteBtn.style.border = "none";
        deleteBtn.style.background = "transparent";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.fontSize = "16px";

        deleteBtn.addEventListener("click", () => {
          projectDiv.remove();
        });

        // Project Name input
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("form-floating", "mb-3");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.classList.add("form-control");
        nameInput.placeholder = "Project name";
        nameInput.name = "ProjectName";

        const nameLabel = document.createElement("label");
        nameLabel.textContent = "Project Name";

        nameDiv.appendChild(nameInput);
        nameDiv.appendChild(nameLabel);
        nameDiv.style.marginBottom = "10px";

        // About Project textarea
        const aboutDiv = document.createElement("div");
        aboutDiv.classList.add("form-floating", "mb-3");

        const aboutTextarea = document.createElement("textarea");
        aboutTextarea.classList.add("form-control");
        aboutTextarea.placeholder = "Enter about your project.";
        aboutTextarea.style.height = "100px";
        aboutTextarea.name = "ProjectDetails";

        const aboutLabel = document.createElement("label");
        aboutLabel.textContent = "About Project";

        aboutDiv.appendChild(aboutTextarea);
        aboutDiv.appendChild(aboutLabel);

        // Append all
        projectDiv.appendChild(projectnumber);
        projectDiv.appendChild(deleteBtn);
        projectDiv.appendChild(nameDiv);
        projectDiv.appendChild(aboutDiv);
        projectDiv.style.marginTop = "20px";

        PersonalProject.appendChild(projectDiv);
      });




        let internshipContainer = document.getElementById("internship-container");
        let addInternshipBtn = document.getElementById("addInternship");
        console.log(addInternshipBtn);

        addInternshipBtn.addEventListener("click", () => {
    // Create main wrapper
        let internshipCard = document.createElement("div");
        internshipCard.classList.add("internship-card");

    // Company
    internshipCard.innerHTML = `
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="intern_company" placeholder="Company Name">
            <label>Company</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="intern_duration" placeholder="Duration">
            <label>Duration</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="intern_tech" placeholder="Technology Worked In">
            <label>Technology Worked In</label>
        </div>
    `;

let deleteBtnn = document.createElement("span");
deleteBtnn.innerHTML = "Delete Section";
deleteBtnn.classList.add("delete-internship");
deleteBtnn.style.cursor = "pointer";
deleteBtnn.style.fontSize = "15px";
deleteBtnn.style.color = "red";
deleteBtnn.style.display = "inline-block"
deleteBtnn.style.padding = "5px"
deleteBtnn.style.border = "2px solid black";
deleteBtnn.style.marginBottom = "5px"
deleteBtnn.style.borderRadius = "15px"

// Delete functionality
deleteBtnn.addEventListener('click', () => {
    console.log("I am clicked");
    internshipCard.remove();
});

    internshipCard.append(deleteBtnn);

    internshipContainer.appendChild(internshipCard);
});


let currentStep = 1;
const formSteps = document.querySelectorAll(".form-step");
console.log(formSteps)
function showStep(step) {
  formSteps.forEach((section, index) => {
    section.classList.toggle("active", index === step - 1);
  });
}

document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep++;
    if (currentStep > formSteps.length) currentStep = formSteps.length;
    showStep(currentStep);
  });
});

document.querySelectorAll(".prev-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep--;
    if (currentStep < 1) currentStep = 1;
    showStep(currentStep);
  });
});


// when submit is clicked.
const submit = document.getElementById("formsubmit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    

    const obj = {
        name: document.getElementsByName("Username")[0].value,
        Designation: document.getElementsByName("Designation")[0].value,
        AboutMe: document.getElementsByName("AboutMe")[0].value,
        Phone: document.getElementsByName("phone")[0].value,
        email: document.getElementsByName("email")[0].value,
        location: document.getElementsByName("location")[0].value,
        languages: (() => {
            // console.log(lang)
            let lang = document.getElementsByName("languages")[0].value;
            return lang.split(",").map(lang => lang.trim());
        })(),
        "skills": (() => {
            let lang = document.getElementsByName("skills")[0].value;
            return lang.split(",").map(lang => lang.trim());
        })() , 
        "Education":{
            "10th": (() => {
                let arr = [];
                let tenthDetails = document.getElementsByName("10th");
                Array.from(tenthDetails).forEach((val) =>
                {
                    arr.push(val.value);
                })
                return arr ;
            })(),
            "12th": (() => {
                let arr = [];
                let tenthDetails = document.getElementsByName("12th");
                Array.from(tenthDetails).forEach((val) =>
                {
                    arr.push(val.value);
                })
                return arr ;
            })() , 
            "Graduation" : (() => {
                let arr = [];
                let tenthDetails = document.getElementsByName("grad");
                Array.from(tenthDetails).forEach((val) =>
                {
                    arr.push(val.value);
                })
                return arr ;
            })()
        },
        "PersonalProject": {
            "projectNames" : (() => {
                let arr = []
                let names = document.getElementsByName("ProjectName");
                Array.from(names).forEach((val) => {
                    arr.push(val.value);
                })
                return arr;
            })(),
            "ProjectDetails" :(() => {
                let arr = []
                let names = document.getElementsByName("ProjectDetails");
                Array.from(names).forEach((val) => {
                    arr.push(val.value);
                })
                return arr;
            })()
        },
        "Certifications":(() =>{
            const intern_company = document.getElementsByName("intern_company");
            const intern_duration = document.getElementsByName("intern_duration");
            const intern_tech = document.getElementsByName("intern_tech");

            let temp = [];
            for(let i =0 ; i < intern_company.length;i++)
            {
                let noofcertification = [];
                noofcertification.push(intern_company[i].value , intern_duration[i].value , intern_tech[i].value);
                temp.push(noofcertification);
            }
            return temp;
        })()


    };

    console.log(obj);
    localStorage.setItem("resumeData", JSON.stringify(obj));

  // now open the desired page
    window.location.href = "./Resumetemplate/temp1.html";
});
