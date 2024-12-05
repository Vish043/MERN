/*A company wants to calculate the yearly bones for its employees hased on their years of experience 
and perforos.The rules are as Follows

If the employee has more than 5 years e of experience and performance scars shovs If the employee has
 more than 3 years but less than or of their salary. equal to 5 years of experience, with performance 
 to For employees with 3 years or less experience, the bonus is St of their salary, repetir perfumance 
 What will be the bonus percentage for an employee with a years of experience and perforancasars  write
  using js program*/
function calculateBonus(yearsOfExperience, performanceScore) {
    let bonusPercentage = 0;

    if (yearsOfExperience > 5) {
        bonusPercentage = 20; 
    }
    else if (yearsOfExperience > 3 && yearsOfExperience <= 5) {
        bonusPercentage = 15; 
    }
    else if (yearsOfExperience <= 3) {
        bonusPercentage = 10;
    }
    return bonusPercentage;
}

let yearsOfExperience = 4;
let performanceScore = 85;

let bonus = calculateBonus(yearsOfExperience, performanceScore);
console.log(`The bonus percentage for an employee with ${yearsOfExperience} years of experience is: ${bonus}%`);
