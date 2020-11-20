let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
   empPayrollList = getEmployeePayrollDataFromStorage();
   document.querySelector(".emp-count").textContent = empPayrollList.length;
   createInnerHtml();
   localStorage.removeItem('editemp');
 });
const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}
 function createInnerHtml() {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    if(empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for(const employeePayrollData of empPayrollList){
                innerHtml =`${innerHtml}
                <tr>
                    <td><img class="profile" alt="" src="${employeePayrollData._profile}"></td>
                    <td>${employeePayrollData._name}</td>
                    <td>${employeePayrollData._gender}</td>
                    <td>${getDeptHtml(employeePayrollData._department)}</td>
                    <td>${employeePayrollData._salary}</td>
                    <td>${employeePayrollData._startDate}</td>
                    <td>
                        <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img name="${employeePayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
    `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
 }
 function createEmployeePayrollJSON(){
     let employeePayrollListLocal = [
         {
             _id: new Date().getTime(),
             _name: "Raj Nandini",
              _salary: "₹ 4,36,300", 
              _gender: "female",
                _department: ["HR", "Finance"],
                _notes: "first entry!",
                _profile: "../assets/profile-images/Ellipse -7.png",
                _startDate: "9/1/2020, 12:00:00 AM"
         },
         {
             _id: new Date().getTime(),
             _name: "Ayushi Yadav", 
             _salary: "₹ 4,28,000",
              _gender: "female",
                _department: ["Finance", "Engineer"],
                _notes: "second entry!",
                _profile: "../assets/profile-images/Ellipse 1.png",
                _startDate: "7/16/2020, 12:00:00 AM"
         },
         {  
             _id: new Date().getTime(),
             _name: "Vipul Kumar Gupta",
              _salary: "₹ 4,70,000",  
                _gender: "male",
            _department: ["HR", "Engineer"],
            _notes: "third entry!",
            _profile: "../assets/profile-images/Ellipse -3.png",
            _startDate: "9/17/2020, 12:00:00 AM"
         },
         {
             _id: new Date().getTime(),
            _name: "Vaishnavi Gupta", 
            _salary: "₹ 4,68,400", 
            _gender: "female",
            _department: ["HR", "Finance", "Engineer"],
            _notes: "fourth entry!",
            _profile: "../assets/profile-images/Ellipse 1.png",
            _startDate: "8/16/2020, 12:00:00 AM"
         },
         {
             _id: new Date().getTime(),
            _name: "Kajol Bairwa",
             _salary: "₹ 4,20,700", 
             _gender: "female", 
            _department: ["Sales"],
            _notes: "fifth entry!",
            _profile: "../assets/profile-images/Ellipse 1.png",
            _startDate: "2/14/2020, 12:00:00 AM"
         },
         {
             _id: new Date().getTime(),
             _name: "Rudransh Sharms", 
             _salary: "₹ 4,42,800",
              _gender: "male",
            _department: ["HR", "Sales"],
            _notes: "sixth entry!",
            _profile: "../assets/profile-images/Ellipse -8.png",
            _startDate: "11/1/2020, 12:00:00 AM"
         }
     ];
     return employeePayrollListLocal;
 }
 const getDeptHtml = (deptList) => {
     let deptHtml = '';
     for(const dept of deptList){
         deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
     }
     return deptHtml;
 }