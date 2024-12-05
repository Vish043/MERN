/*write a js function to manage student information throughtout the semester
Rules:
should manage personal details
        academic detail
        grade administartive details
and should delete user details when student passes out*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function setPersonalDetails(studentID, name, age, contactInfo) {
    return {
        studentID: studentID,
        name: name,
        age: age,
        contactInfo: contactInfo
    };
}

function setAcademicDetails(course, semester, GPA, subjects) {
    return {
        course: course,
        semester: semester,
        GPA: GPA,
        subjects: subjects
    };
}

function setGrades(grades) {
    return grades;
}

function setAdministrativeDetails(attendance, leaves) {
    return {
        attendance: attendance,
        leaves: leaves
    };
}
function displayDetails(student) {
    console.log('Student Details:');
    console.log(`Name: ${student.personal.name}`);
    console.log(`ID: ${student.personal.studentID}`);
    console.log(`Course: ${student.academic.course}`);
    console.log(`Semester: ${student.academic.semester}`);
    console.log(`Grades: ${JSON.stringify(student.grades)}`);
    console.log(`GPA: ${student.academic.GPA}`);
    console.log(`Attendance: ${student.administrative.attendance}%`);
}

function updateAcademicDetails(student, newAcademicDetails) {
    student.academic = { ...student.academic, ...newAcademicDetails };
}

function updateGrades(student, newGrades) {
    student.grades = { ...student.grades, ...newGrades };
}

function updatePersonalDetails(student, newPersonalDetails) {
    student.personal = { ...student.personal, ...newPersonalDetails };
}

function updateAdministrativeDetails(student, newAdminDetails) {
    student.administrative = { ...student.administrative, ...newAdminDetails };
}

function graduate(student) {
    rl.question("Do you want to delete the student details after graduation? Type 'yes' to confirm or 'no' to cancel: ", (userConfirmation) => {
        if (userConfirmation.toLowerCase() === 'yes') {
            console.log(`${student.personal.name} has graduated and their details will be removed.`);
            deleteStudentDetails(student);
        } else {
            console.log(`${student.personal.name} has graduated. Their details remain intact.`);
        }

        rl.close();
    });
}

function deleteStudentDetails(student) {
    student.personal = null;
    student.academic = null;
    student.grades = null;
    student.administrative = null;
    console.log('Student details have been successfully deleted.');
}

let student1 = {
    personal: setPersonalDetails(
        "S12345",
        "John Doe",
        20,
        { email: "johndoe@example.com", phone: "123-456-7890", address: "123 Main St, City, Country" }
    ),
    academic: setAcademicDetails(
        "Bachelor of Science in Computer Science", 
        4, 
        3.7, 
        ["Math 101", "Computer Science", "Data Structures"]
    ),
    grades: setGrades({
        "Math 101": "A",
        "Computer Science": "B+",
        "Data Structures": "A"
    }),
    administrative: setAdministrativeDetails(95, 2)  
};

displayDetails(student1);

updateAcademicDetails(student1, { GPA: 3.9, subjects: ["Math 101", "Computer Science", "Algorithms"] });

updateGrades(student1, { "Algorithms": "A" });

displayDetails(student1);

graduate(student1);