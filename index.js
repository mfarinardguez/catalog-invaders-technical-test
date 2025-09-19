const fs = require('fs');

try {
    const data = fs.readFileSync('encoded-data.csv', 'utf8');

    const lines = data.split('\n');
    lines.map((line) => {
        const score_user = line.split(',');
    })

} catch (err) {
   console.error(err);
}