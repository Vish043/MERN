import fs from 'fs';
fs.readFile('employees.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    const lines = data.trim().split('\n');
    const employees = lines.slice(1).map(line => {
        const [id, name, department, salary] = line.split(',').map(item => item.trim());
        return { id: parseInt(id), name, department, salary: parseFloat(salary) };
    });

    const action = process.argv[2];
    const param = process.argv[3];

    switch (action) {
        case 'list':
            listEmployees(param, employees);
            break;
        case 'total-salary':
            calculateTotalSalary(param, employees);
            break;
        case 'highest-paid':
            findHighestPaidEmployee(employees);
            break;
        default:
            console.log('Invalid command. Use "list <department>", "total-salary <department>", or "highest-paid".');
    }
});

function listEmployees(department, employees) {
    const filteredEmployees = employees.filter(emp => emp.department.toLowerCase() === department.toLowerCase());
    if (filteredEmployees.length === 0) {
        console.log(`No employees found in ${department} department.`);
    } else {
        console.log(`Employees in ${department} department:`);
        filteredEmployees.forEach(emp => console.log(`${emp.name} (ID: ${emp.id}, Salary: $${emp.salary})`));
    }
}

function calculateTotalSalary(department, employees) {
    const totalSalary = employees
        .filter(emp => emp.department.toLowerCase() === department.toLowerCase())
        .reduce((sum, emp) => sum + emp.salary, 0);
    
    console.log(`Total salary for ${department} department: $${totalSalary}`);
}

function findHighestPaidEmployee(employees) {
    if (employees.length === 0) {
        console.log('No employees found.');
        return;
    }
    const highestPaid = employees.reduce((max, emp) => (emp.salary > max.salary ? emp : max), employees[0]);
    console.log(`Highest paid employee: ${highestPaid.name} (Department: ${highestPaid.department}, Salary: $${highestPaid.salary})`);
}
