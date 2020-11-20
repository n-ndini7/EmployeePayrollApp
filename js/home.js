window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });

 function createInnerHtml() {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    let employeePayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
                <tr>
                    <td><img class="profile" alt="" src="${employeePayrollData._profile}"></td>
                    <td>${employeePayrollData._name}</td>
                    <td>${employeePayrollData._gender}</td>
                    <td><div class="dept-label">${employeePayrollData._department[0]}</div>
                    <div class="dept-label">${employeePayrollData._department[1]}</div></td>
                    <td>${employeePayrollData._salary}</td>
                    <td>${employeePayrollData._startDate}</td>
                    <td>
                        <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img name="${employeePayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
    `;
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
         }
     ];
     return employeePayrollListLocal;
 }