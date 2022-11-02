const travelInformation = {
    speed: 80,
    destinationDistance: 6000,
};

function timeTodestination() {
    const result = travelInformation.destinationDistance / travelInformation.speed

    return result
}
timeTodestination()

const decimalHours = timeTodestination()
const date = new Date();

date.setMinutes(+Math.round(decimalHours * 60));


const days = (date.getDate() - 1)
const hours = date.getHours()
const minutes = date.getMinutes()


console.log(`destination will take ${days} Days, ${hours} Hours, and ${minutes} Minutes`)