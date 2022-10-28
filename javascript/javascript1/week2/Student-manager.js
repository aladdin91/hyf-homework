const class07Students = [];

function addStudentToClass(studentName) {

    if (class07Students.includes(studentName.toLowerCase())) {
        console.log(`${studentName} is in the list`)

    } else if (studentName === '' || typeof studentName == 'number') {
        console.log(`please inter a valid name`)
    } else if (class07Students.length <= 5 || studentName === 'queen') {
        class07Students.push(studentName.toLowerCase())
        console.log(class07Students)


    } else {
        console.log(`list is full`)
    }
}