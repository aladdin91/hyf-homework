// Create a function called getFullname that returns a fullname.It should have two parameters: firstname and surname.
function getFullName(firstName = 'firstname', surName = 'surname', useFormalName = true, gender) {
    if (useFormalName && gender === 'male') {
        console.log(`Lord ${firstName} ${surName}`);
    } else if (useFormalName && gender === 'female') {
        console.log(`Lady ${firstName} ${surName}`);
    } else {
        console.log(`${firstName} ${surName}`)
    }
}
getFullName('Ned', 'stark', true, 'male')
getFullName('Catelyn', 'stark', true, 'female')
getFullName('Robb', 'stark', false, 'male')