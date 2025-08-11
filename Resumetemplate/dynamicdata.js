const data = JSON.parse(localStorage.getItem("resumeData"));
if(data){
    document.getElementById("Aboutme").innerHTML = data.AboutMe;
    document.getElementById("callno").innerHTML = data.Phone;
    document.getElementById("mailid").innerHTML = data.email;
    document.getElementById("address").innerHTML = data.location;
    let language = document.getElementById("languages");
    data.languages.forEach((eachvalue) =>{
        const langele = document.createElement("li");
        langele.innerHTML = `${capitalizeWords(eachvalue)}`;
        language.appendChild(langele);
    });

    let skill = document.getElementById("skills");
    data.skills.forEach((eachvalue) => {
        const langele = document.createElement("li");
        langele.innerHTML = `${capitalizeWords(eachvalue)}`;
        skill.appendChild(langele);
    })
    document.getElementById("userName").innerHTML = capitalizeWords(data.name);
    document.getElementById("Designation").innerHTML = capitalizeWords(data.Designation);
    const eduarray = Object.keys(data.Education);
    const educontainer = document.getElementById("educationdetails");
    eduarray.forEach((value)=>{
       let temp = data.Education[value];
       let EducationSection = `
       <div class="out-edu" style="margin-top:30px;">
            <div id="Graduation">
              <h3>
                ${temp[0]} , ${temp[2]}
              </h3>
              <h3>
                ${value} - ${temp[1]}
              </h3>
            </div>
            <div class="percentage">
              <h3>${temp[3]}</h3>
              <h3>percentage:${temp[4]}/100</h3>
            </div>
          </div>
          `;
        educontainer.innerHTML += EducationSection;

    })

    const projectnames = data.PersonalProject["projectNames"];
    const aboutProject = data.PersonalProject["ProjectDetails"];
    const projectSection = document.getElementById("projectdetails");
    console.log(aboutProject);
        for(let i =0 ;i < projectnames.length;i++)
        {
            let projectsec =  `
            <div class="projectdesc" style="margin-top:30px;">
              <h3>${capitalizeWords(projectnames[i])}</h3>
              <p style="font-size:17px;">${aboutProject[i]}.</p>
            </div>
            `
            projectSection.innerHTML += projectsec;

        }

    const certifications = data.Certifications;
    certifications.forEach((val) =>
    {
        let intern = `            
        <div class="internships" style="margin-top:30px;">
              <h4>${val[0]}</h4>
              <p>Technology Used : ${val[2]}</p>
              <p>Duration : ${val[1]}</p>
        </div>`
        document.getElementById("certificationDetails").innerHTML += intern;

    })
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}