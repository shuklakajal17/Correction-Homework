// correction task

function myGrade(score){
    return score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" : "D";
}
console.log(myGrade(85));
console.log(myGrade(72));