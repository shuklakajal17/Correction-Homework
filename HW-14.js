// correction task
function findNumber(c, i, d){
    let result;
    if (c >= i && c >= d){
        result = c;
    }else {
        result = (i >= d) ? i : d;
    }

return result;
}
console.log(findNumber(12, 25, 7));
console.log(findNumber(5, 9, 11));



