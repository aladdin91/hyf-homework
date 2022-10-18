const dogYearOfBirth = 1991;
const dogYearFuture = 2000;
const age = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
const dogYear = age + 10;
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)
} else {
    console.log(`Your dog will be ${age}  years old in ${dogYearFuture}`)
}