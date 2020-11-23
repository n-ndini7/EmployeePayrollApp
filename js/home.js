let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
   empPayrollList = getEmployeePayrollDataFromStorage();
  // console.log(empPayrollList);
   document.querySelector(".emp-count").textContent = empPayrollList.length;
   createInnerHtml();
   localStorage.removeItem('editEmp');
 });
 
const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
};
 const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    if(empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for(const employeePayrollData of empPayrollList){
                innerHtml =`${innerHtml}
                <tr>
                    <td><img class="profile" alt="" src="${employeePayrollData._profile}"></td>
                    <td>${employeePayrollData._name}</td>
                    <td>${employeePayrollData._gender}</td>
                    <td>${getDeptHtml(employeePayrollData._department)}</td>
                    <td>${employeePayrollData._salary}</td>
                    <td>${stringifyDate(employeePayrollData._startDate)}</td>
                    <td>
                        <img id="${employeePayrollData.id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img id="${employeePayrollData.id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
    `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
 };
 const remove = (node) => {
     var answer = window.confirm("Are you sure you want to delete the details of "+node.name+" from database ?");
   if(answer){
    var answer2 = window.confirm("Warning!! \nData once removed cannot be restored. \n Do you still wish to continue? ");
    if(answer2){
     let employeePayrollData = empPayrollList.find( empData => empData.id == node.id);
   if(!employeePayrollData) return;
   const index = empPayrollList.map(empData => empData.id).indexOf(employeePayrollData.id);
   empPayrollList.splice(index,1);
   localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
   document.querySelector(".emp-count").textContent = empPayrollList.length;
   alert("User Details of "+node.name+" deleted successfully!");
   createInnerHtml();
   location.reload();
   }else{
    location.reload();
}
}
   else {
    alert("Reloading the current page..");
    location.reload();
   }
};

const update = (node) => {
    var answer = window.confirm("Are you sure you want to update the details of "+node.name+" from database ?");
   if(answer){
       var answer2 = window.confirm("!!Warning!! \nData once updated cannot be restored. \n Do you still wish to continue? ");
        if(answer2){
    let employeePayrollData = empPayrollList.find(empData => empData.id == node.id)
    console.log(employeePayrollData);
    if(!employeePayrollData) return;
    localStorage.setItem('editEmp',JSON.stringify(employeePayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
   }else{
       location.reload();
   }
}else{
    alert("Reloading the current page..");
       location.reload();
   }
};
 const getDeptHtml = (deptList) => {
     let deptHtml = '';
     for(const dept of deptList){
         deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
     }
     return deptHtml;
 };


 // .....clearing local storage to connect to JSON server 
//localStorage.clear();