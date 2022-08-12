let grades = [33, 34, 35, 36, 37, 44, 45, 46, 47, 48, 49, 50];
function gradingStudents(grades) {
    let resultArray = [];
    for (let grade of grades) {
        if (grade < 38) {
            resultArray.push(grade);
        }
        else if (grade % 5 === 4) {

            resultArray.push(grade + 1);
        }
        else if (grade % 5 === 3) {

            resultArray.push(grade + 2);
        }
        else {
            resultArray.push(grade);
        }
    }
    return resultArray;
}
const result = gradSt(grades);
console.log(result);