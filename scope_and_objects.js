let globalCount = 10;

function demonstrateLocalScope(){
    let localCount = 5;
    console.log("Inside demonstrateLocalScope:");
    console.log("Local Count :", localCount);
    console.log("Global Count:", globalCount);
}

function modifyVariables() {
    console.log("\nInside modifyVariables:");
    globalCount += 5;
    console.log("Global Count:", globalCount);
    console.log("Cannot modify localCount because it is not here.");
}

function Student(name,age,subject) {
    this.name= name;
    this.age = age;
    this.subject = subject;
    this.displayInfo = function() {
        console.log(`${this.name} - Age: ${this.age}, Subject: ${this.subject}`);
    };
}

let student1 = new Student("Imtiyaaz", 19, "Web Designer");
let student2 = new Student("Qaasim", 19, "Computer Engineer");
let student3 = new Student("Natheefah", 18, "Software Developer");
let student4 = new Student("Aiden", 23, "Cybersecurity Analyst");
let student5 = new Student("Storm", 19, "Robotics Engineer");
let student6 = new Student("Taaraa", 19, "Geologist");

console.log("\nStudent Information:");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();
student4.displayInfo();
student5.displayInfo();
student6.displayInfo();

let school = {
    name: "LD Academy",
    principle: {
        name:"Mr Mujahid Ariefdien",
        experience: "7 years"
    },
    schedule: {
        days: ["Monday", "Tuesday", "Wednesday", "Friday"],
        time: "9:00am - 4:00pm"
    },
    students: [student1, student2, student3, student4, student5, student6]

};

console.log("\nSchool Information:");
console.log("School Name:", school.name);
console.log("Principle Name:", school.principle.name);
console.log("Principle Experience:", school.principle.experience);
console.log("Schedule:", school.schedule.days.join(", "), school.schedule.time);
console.log("Students Enrolled:");
school.students.forEach(student => student.displayInfo());

console.log("\n--- SCOPE DEEMONSTRATION ---");
demonstrateLocalScope();
modifyVariables();
