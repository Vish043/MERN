/*checks whether eligible for exam or not*/
function isEligibleForExam(totalClasses, attendedClasses) {
   
    const attendancePercentage = (attendedClasses / totalClasses) * 100;

   
    if (attendancePercentage >= 75) {
        return true;
    } else {
        return false;
    }
}

const totalClasses = 100;
const attendedClasses = 70;

const total = parseInt(totalClasses);
const attended = parseInt(attendedClasses);

if (isEligibleForExam(total, attended)) {
    console.log("The student is eligible for the semester exam.");
} else {
    console.log("The student is not eligible for the semester exam.");
}
