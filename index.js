const fs = require('fs');

try {
    const data = fs.readFileSync('encoded-data.csv', 'utf8');
    console.log(data);
    
} catch (err) {
   console.error(err);
}