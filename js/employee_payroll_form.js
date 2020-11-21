let isUpdate = false;
 let employeePayrollObj = {};
window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if(nameRegex.test(name.value)||name.value.length==0)
            textError.textContent="";
        else 
            textError.textContent="Name is invalid";
    });
    //add event listener to start date validation
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let dateError = document.querySelector(".date-error");    
    day.addEventListener('click',checkStartDate);
    month.addEventListener('click',checkStartDate);
    year.addEventListener('click',checkStartDate);
    function checkStartDate() {
        startDate = new Date(year.value+"-"+month.value+"-"+day.value);
        console.log(startDate);
        if(startDate<=new Date())
         dateError.textContent="";
        else
       dateError.textContent = "Invalid Start date ";
    }
    checkForUpdate();
});
    //added event listener to salary to display appropriate value 
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
    
    var sal = document.getElementById("salary").value;
    var salary = currencyConvertorToINR(sal);
   const day = document.getElementById("day").value;
   const month = document.getElementById("month").value;
   const year = document.getElementById("year").value;
    var note = document.getElementById("notes").value;
    let startDate =new Date(year+"-"+month+"-"+day);

   const employeepayrollData = new EmployeePayrollData(name, salary, gender,startDate, departments, profile, note);
  
   alert("Thanks! Your form is submitted successfully!" + "\n "+employeepayrollData.toString());
   console.log(employeepayrollData);
   createAndUpdateStorage(employeepayrollData);
  };
  function createAndUpdateStorage(employeepayrollData){
      let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
      if(employeePayrollList != undefined){
          employeePayrollList.push(employeepayrollData);
      }else{
          employeePayrollList = [employeepayrollData];
      }
      alert("Added Object to the local Storage"+employeePayrollList.toString());
      localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
  }
  const resetForm = () => {
    document.querySelector("#name").value = "";
    unsetSelectedValues("[name=profile]");
    unsetSelectedValues("[name=gender]");
    unsetSelectedValues("[name=department]");
    document.querySelector(".salary-output").textContent=400000;
    document.querySelector("#day").value = 01;
    document.querySelector("#month").value = 01;
    document.querySelector("#year").value = 2020;
    document.querySelector("#notes").value= "";
    document.querySelector(".date-error").textContent = "";
};

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked = false;
    });
};
const setSelectedIndex = (id,index) => {
const element = document.querySelector(id);
element.selectedIndex = index;
};
function currencyConvertorToINR($number ) {
    return (isNaN(parseInt($number))) ?  0 : '₹ ' +  parseInt($number).toLocaleString('en-IN')
  }
//console.log(currencyConvertorToINR(1000000));
//localStorage.clear();
const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson? true:false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();   
};
const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
};
const setTextValue = (id,value) => {
const element = document.querySelector(id);
element.textContent = value;
};
const setForm = () =>{
    document.querySelector('#name').value = employeePayrollObj._name;
    setSelectedValues('[name=profile]',employeePayrollObj._profile);
    setSelectedValues('[name=gender]',employeePayrollObj._gender);
    setSelectedValues('[name=department]',employeePayrollObj._department);
    console.log(employeePayrollObj._department);
    let sal = employeePayrollObj._salary.slice(1);
    document.querySelector("#salary").value = sal;
    document.querySelector(".salary-output").textContent = sal;
    document.querySelector('#notes').value = employeePayrollObj._notes;
    let date = stringifyDate(employeePayrollObj._startDate).split("/");
    document.querySelector('#day').value = date[0];
    document.querySelector('#month').value = date[1];
    document.querySelector('#year').value = date[2];
}

const stringifyDate = (date)=> {
    const options = {day: 'numeric', month: 'numeric', year:'numeric'};
    const newDate = !date ? "undefined":new Date(Date.parse(date)).toLocaleDateString('en-IN',options);
    return newDate;
}

const setSelectedValues = (propertyValue,value) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
        }
        else if(item.value == value)
            item.checked = true;
    });
}