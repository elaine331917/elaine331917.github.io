// Skill list

const programming = ["TypeScript", "HTML", "CSS", "SQL", "Python", "JavaScript", "Java"];
const frameworks = ["Angular", "Bootstrap", "FastAPI", "SQLAlchemy", "RxJS"]
const tools = ["Figma", "Git & GitHub", "DevTools", "PostgreSQL"]
const design = ["wireframing", "prototyping", "usability testing", "user research", "graphic design"]

const programmingList = document.getElementById("programming");
const frameworksList = document.getElementById("frameworks");
const toolsList = document.getElementById("tools");
const designList = document.getElementById("design");

function populateList(array, element) {
    array.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        element.appendChild(li);
    })
}

populateList(programming, programmingList);
populateList(frameworks, frameworksList);
populateList(tools, toolsList);
populateList(design, designList);