document.getElementById('numerology-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    if (name) {
        const nameNumber = calculateNameNumber(name);
        // const lifePathNumber = calculateLifePathNumber(dob);

        displayResult(nameNumber);
    }
});

function calculateNameNumber(name) {
    const letterValues = {
        a: 1, b: 2, c: 3, d: 4, e: 5, u: 6, o: 7, f: 8,
        i: 1, k: 2, g: 3, m: 4, h: 5, v: 6, z: 7, p: 8,
        j: 1, r: 2, l: 3, t: 4, n: 5, w: 6,
        q: 1,       s: 3,       x: 5,
        y: 1,
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
        '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
    };

    let sum = 0;
    name.toLowerCase().replace(/\s+/g, '').split('').forEach(char => {
        if (char in letterValues) {
            sum += letterValues[char];
        }
    });

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
    }

    return sum;
}

function calculateLifePathNumber(dob) {
    const digits = dob.replace(/-/g, '').split('');
    let sum = digits.reduce((acc, val) => acc + parseInt(val), 0);

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
    }

    return sum;
}

function displayResult(nameNumber) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Keyword Number: ${nameNumber}</p>
    `;
}
