module.exports = function reverse (interA) {
    if (interA < 0) {
        interA = interA * -1;        
    }
   let joinA = interA.toString().split('').reverse().join('');
    return Number(joinA);
}
