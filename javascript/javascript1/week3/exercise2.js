// Create an object to represent one of your favourite bands. The required members are:
// name: A string representing the band name.
// nationality: A string representing the country the band comes from.
// genre: What type of music the band plays.
// members: A number representing the number of members the band has.
// formed: A number representing the year the band formed.
// split: A number representing the year the band split up, or false if they are still together.
// albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
// name: A string representing the name of the album.
// released: A number representing the year the album was released.
// Include at least two albums in the albums array.

// Bonus step: create variable called bandInfo which is a string that describes your favorite band
// You can either use string concatenation or string interpolation 
// e.g. my favorite band is called ${band.name} and ...
const myFavBand = {
    name: 'Cairokee',
    nationality: 'Egypt',
    genre: 'rock',
    members: 5,
    formed: 2003,
    split: false,
    albums: [{
        name: 'Matloob Zaeem',
        released: 2011
    }, {
        name: 'Nas w Nas',
        released: 2015
    }, {
        name: 'Roma',
        released: 2022
    }, ]
}
const bandInfo = `${myFavBand.name} is an Egyptian ${myFavBand.genre} band that was officially launched in ${myFavBand.formed} but came to prominence with its revolutionary music following the Egyptian Revolution of 2011 due to its politically-inspired lyrics and protest songs released following the uprising. the successful album ${myFavBand.albums[0].name} released in ${myFavBand.albums[0].released} and the last album ${myFavBand.albums[2].name} was released in ${myFavBand.albums[2].released}`

console.log(bandInfo)