/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let start;
    let stop;
    let checker = true;
    for(let i = 0; i < str.length; i++) {
        start = str[i];
        stop = str[str.length - (i+1)];
        if (start != stop) {
            checker = false;
            break;
        }
    }
    return checker;
};