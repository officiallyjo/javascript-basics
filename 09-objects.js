var user ={
    firstname : "josie",
    lastname : "john",
    skills :"fullstack",
    Isactive :false,
    getinfo :function(role){
        return`my name is ${this.firstname} and my role is ${role}`;
    }
}
//prints the key and value pairs of the objects user
console.log(user);

//prints the value of firstname = josie
console.log(user.firstname);

//another way to print the value of a key (skills = fullstack)
console.log(user["skills"]);
//prints the key and value pair of the objects in a tabluar form
console.table (user);

//method in objects
console.log(user.getinfo("superadmin"));