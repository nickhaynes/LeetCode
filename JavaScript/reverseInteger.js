/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let text = x.toString();
    let result = ""

    while (text.length > 0) {
        result += text[text.length - 1];
        text = text.slice(0, text.length - 1);
    }

    num = parseInt(result, 10)

    if (x < 0) {
        num *= -1;
    }

    if (num < (Math.pow(2,31) * -1) || num > (Math.pow(2,31))) {
        return 0;
    }

    return num;
};