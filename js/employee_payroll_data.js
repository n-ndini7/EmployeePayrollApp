class EmployeePayrollData{
    get name(){
        return this._name;
    }
    //setter with regex for validation of name
    set name(name){
        let nameRegex =RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
        this._name = name;
        else {
        throw "Name is Incorrect!! "+name;
       }
    }
    get profile(){
        return this._profile;
    }
    set profile(profile){
        this._profile = profile;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
            this._gender = gender;
        }
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
            this._salary = salary;
    }
    
    get startDate(){
        return this._startDate;
    }
    //setter with regex for validation of start date
    set startDate(startDate){
         this._startDate = startDate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        }
    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes=notes;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    toString(){
        //const options = { year: 'numeric', month: 'long' , day: 'numeric'};
        //const empDate = this.startDate == undefined ? "undefined":this.startDate.toLocaleDateString("en-US",options);
       // var date = this.startDate.split(', ')[0];
        //console.log(date);
        return  "ID = "+this.id+"Name = "+this.name+", Salary = "+this.salary+" ,Gender = "+this.gender+" ,Start date = "+this.startDate+" ,Department = "+this.department+" ,Profile = "+this.profile+" ,Notes = "+this.notes;
    }
}