
function salaryInput(){
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
output.textContent = salary.value;
});
}

function save(){
    var name= document.getElementById("name").value;

    const images = document.getElementsByName("profile");
    let profile=images[0];
    for(let i=0;i<images.length;i++){
        if(images[i].checked)
            profile=images[i].value;
    }

    let genders = document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if(genders[i].checked)
            gender=genders[i].value;
    }

    let departments = new Array();
    const departmentsForm = document.getElementsByClassName("checkbox");
    for(let i=0;i<departmentsForm.length;i++){
        if(departmentsForm[i].checked)
            departments.push(departmentsForm[i].value);
    }
    
    var salary = document.getElementById("salary").value;
   const day = document.getElementById("day").value;
   const month = document.getElementById("month").value;
   const year = document.getElementById("year").value;
    var note = document.getElementById("notes").value;
    let startDate =new Date(year+"-"+month+"-"+day);

   let employeepayrollData = new EmployeePayrollData(name, salary, gender,startDate, departments, profile, note);
  
   alert("Thanks! Your form is submitted successfully!" + "\n "+employeepayrollData.toString());
   console.log(employeepayrollData);
  }