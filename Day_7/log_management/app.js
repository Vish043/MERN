import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function logError(error) {
    const logFile = path.join(__dirname, 'error.log');
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0]; // Format: YYYY-MM-DD HH:mm:ss
    const logEntry = `\n[${timestamp}] Error:\n${error.message}\n\nStack Trace:\n${error.stack}\n-------------------------\n`;

    fs.appendFile(logFile, logEntry, 'utf8', (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        } else {
            console.log('Error logged successfully.');
        }
    });
}

// Example Usage
try {
    // Simulate an error
    throw new Error("Something went wrong in the application!");
} catch (error) {
    logError(error);
}
