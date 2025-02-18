import http from 'http';

const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Happy Birthday Gagan\n');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})
############<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday</title>
</head>
<body style="text-align: center; font-family: Arial, sans-serif; background-color: #ffebcd; padding: 50px;">

    <h1 style="color: #ff4500;">🎉 Happy Birthday! 🎂</h1>
    <p style="font-size: 18px; color: #333;">
        Wishing you a day filled with love, joy, and laughter. May this year bring you happiness and success! 🎈🥳
    </p>
    <img src="https://source.unsplash.com/400x300/?birthday,cake" alt="Birthday Cake" 
         style="border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.2); margin-top: 20px;">
    
</body>
</html>
