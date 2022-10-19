'use strict';

const firstWord = ['WestCoast', 'Smooth', 'Network', 'servo', 'New', 'Heavenly', 'Giant', 'Brighter', 'Pioneer', 'AllPro']
const secondWords = ['Place', 'Technology', 'Innovations', 'Systems', 'Engine', 'Industries', 'Lab', 'Research', 'Power', 'Devices']
const randomNumber = Math.floor(Math.random() * 10);
const result = ` ${firstWord[randomNumber]} ${secondWords[randomNumber]}`
console.log(`The startup name is: (${result} ) and contains ${result.length} characters`)