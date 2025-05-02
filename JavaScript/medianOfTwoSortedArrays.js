/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }

    let curRow = 1;
    let down = true;

    let matrix = [];

    for (let i = 0; i < numRows; i++) {
        matrix[i] = [];
    }

    for (let i = 0; i < s.length; i++) {
        matrix[curRow - 1].push(s[i]);

        if (down) {
            curRow++;

            if (curRow > numRows) {
                curRow = numRows - 1;
                down = false;
            }
        } else {
            curRow--;

            if (curRow < 1) {
                curRow = 2;
                down = true;
            }
        }
    }

    let resultString = '';

    for (let i = 0; i < numRows; i++) {
        resultString += matrix[i].join('');
    }

    return resultString;
};