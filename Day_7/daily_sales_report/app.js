
import fs from 'fs';
import path from 'path';


function generateSalesReport(sales) {
    const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const fileName = `sales_report_${date}.txt`;
    const filePath = path.join( fileName);

    let reportContent = `Date: ${date}\n\nItems Sold:\n\n`;
    let totalRevenue = 0;

    sales.forEach(({ item, quantity, price }) => {
        reportContent += `${item} Quantity: ${quantity}, Price: $${price}\n`;
        totalRevenue += quantity * price;
    });

    reportContent += `\nTotal Revenue:\n$${totalRevenue.toFixed(2)}`;

    fs.writeFile(filePath, reportContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing sales report:', err);
        } else {
            console.log(`Sales report saved to ${fileName}`);
        }
    });
}

// Example Usage
const salesData = [
    { item: 'Laptop', quantity: 2, price: 1200 },
    { item: 'Mouse', quantity: 5, price: 25 },
    { item: 'Keyboard', quantity: 3, price: 45 }
];

generateSalesReport(salesData);