const PeterHouseWidth = 8
const PeterHouseDepth = 10
const PeterHouseHeight = 10
const PeterGardenSizeInM2 = 100
const PeterHouseCost = 2500000
const PeterVolumeInMeters = PeterHouseWidth * PeterHouseDepth * PeterHouseHeight
const PeterHousePrice = PeterVolumeInMeters * 2.5 * 1000 + PeterGardenSizeInM2 * 300;


if (PeterHouseCost < PeterHousePrice) {
    console.log(`Peter paid too little`)
} else {
    console.log(`Peter paid too much`)
}

const JuliaHouseWidth = 5
const JuliaHouseDepth = 11
const JuliaHouseHeight = 8
const JuliaGardenSizeInM2 = 70
const JuliaHouseCost = 1000000
const JuliaVolumeInMeters = JuliaHouseWidth * JuliaHouseDepth * JuliaHouseHeight
JuliaHousePrice = JuliaVolumeInMeters * 2.5 * 1000 + JuliaGardenSizeInM2 * 300;

if (JuliaHouseCost < JuliaHousePrice) {
    console.log(`Julia paid too little`)
} else {
    console.log(`Julia paid too much`)
}