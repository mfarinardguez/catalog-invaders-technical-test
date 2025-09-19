const fs = require('fs');

function decodedScore(codification, score) {
    const base = codification.length;
    let decodedScore = 0;

    for (const char of score) {
        const digit = codification.indexOf(char);
        if (digit === -1) {
            continue;
        }
        decodedScore = decodedScore * base + digit;

    }

    return decodedScore;
}

try {
    const data = fs.readFileSync('encoded-data.csv', 'utf8');

    const lines = data.split('\n');
    lines.map((line) => {
        const score_users = line.split(',');
        const codification = score_users[1];
        const score = score_users[2];
        let score_decoded = decodedScore(codification, score);
        console.log(score_decoded);
    })

} catch (err) {
   console.error(err);
}
