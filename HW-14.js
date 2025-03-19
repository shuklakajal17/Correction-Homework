// correction task

function findLargestNum(a, b, c){
    return a > b && a > c ? a : (b > c ? b : c);
}
console.log(findLargestNum(12, 25, 7));
console.log(findLargestNum(5, 9, 11));


