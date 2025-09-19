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

    const results = [];
    const lines = data.split('\n');
    lines.map((line) => {
        const score_users = line.split(',');
        const codification = score_users[1];
        const score = score_users[2];
        let score_decoded = decodedScore(codification, score);
        console.log(score_decoded);

        results.push([score_users[0], score_decoded].join(': '));
    })

    const csvOutput = ['user: score', ...results].join('\n');

    fs.writeFileSync('decoded-data.csv', csvOutput, 'utf8');
    console.log('Archivo CSV creado: decoded-data.csv');

} catch (err) {
   console.error(err);
}
