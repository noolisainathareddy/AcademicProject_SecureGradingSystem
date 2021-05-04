const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const creditHours = document.querySelector("#credit-hours");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const reset = document.querySelector("#reset");

let gpArry = [];

add.addEventListener("click", () => {
  if (
    
    creditHours.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Please enter Credit hours and Grade");
  } else {
    const tr = document.createElement("tr");
    const tdCreditHours = document.createElement("td");
    tdCreditHours.innerHTML = creditHours.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCreditHours);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove("empty");
    calcGp.classList.remove("empty");
    reset.classList.remove("empty");
    gpArry.push({
      creditHours: creditHours.value,
      grade: grade.options[grade.selectedIndex].value,
    });  
    console.log(gpArry);
    creditHours.value = "";
    grade.selectedIndex = "0";
  }
});

calcGp.addEventListener("click", () => {
  let creditHours = 0,
    productOfCreditHoursAndGrades = 0,
    sumOfProductOfCreditHoursAndGrades = 0;

  gpArry.forEach((result) => {
    creditHours += parseInt(result.creditHours);
    productOfCreditHoursAndGrades =
      parseInt(result.creditHours) * parseInt(result.grade);
    sumOfProductOfCreditHoursAndGrades += productOfCreditHoursAndGrades;
  });
  const tr = document.createElement("tr");

  tdTotalCreditHours = document.createElement("td");
  tdTotalCreditHours.innerHTML = `Total Credit Hours = ${creditHours}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = ` GPA is ${(
    sumOfProductOfCreditHoursAndGrades / creditHours
  ).toFixed(2)} `;

  tr.appendChild(tdTotalCreditHours);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});

reset.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("empty");
  calcGp.classList.add("empty");
  reset.classList.add("empty");
});