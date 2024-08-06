/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let highestNum = 0
    let output = 0
    const symbolMap = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }    

    for (let i = s.length-1; i >= 0; i--) {
        if (symbolMap[s[i]] >= highestNum) {
            highestNum = symbolMap[s[i]]
            output += symbolMap[s[i]]
        } else {
            output -= symbolMap[s[i]]
        }
    }

    return output
};