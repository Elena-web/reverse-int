module.exports = function reverse (n) {
    if (n <0) {
        n = n * (-1);
    }
    let str = n.toString();
    let result = str.split("").reverse().join("");
    console.log(parseInt(result));
    return parseInt(result);
}