/*write a js to categerize the students by merits*/
function categorizeStudent(percentage) {
    if (percentage >= 90) {
        return "Excellent";
    } else if (percentage >= 75) {
        return "Very Good";
    } else if (percentage >= 60) {
        return "Good";
    } else if (percentage >= 40) {
        return "Average";
    } else {
        return "Bad";
    }
}

const marksObtained = 60
const totalMarks = 100

const obtainedMarks = parseFloat(marksObtained);
const total = parseFloat(totalMarks);

const percentage = (obtainedMarks / total) * 100;

const category = categorizeStudent(percentage);

console.log(`The student's performance is: ${category}`);
