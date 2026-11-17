function Student(name, age){
    if (age < 0){
        throw new Error("Age cannot be negative");
    }


this.name = name;
this.age = age;

this.showDetails = function (){
    console.log("Name:", this.name);
    console.log("Age:", this.age);
}
}
try{
    let Student1 = new Student("Nawaz", 23);
    Student1.showDetails();
    
   let Student2 = new Student("Ibraheem", -1);
    Student2.showDetails();

} catch(error){
    console.log("Error:", error.message);
}
