const activities = []
let totalUsage = 0
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const todayDate = [year, month, day].join('-');


function addActivity(date, activity, duration) {
    activities.push({ date, activity, duration })
}


function showStatus(activities) {
    for (let i = 0; i < activities.length; i++) {
        totalUsage = totalUsage += activities[i].duration
    }
    if (activities.length === 0) {
        console.log(`Add some activities before calling showStatus`)
    } else if (totalUsage >= 120) {
        console.log(`ou have reached your limit, no more smartphoning for you!`)
    } else {
        console.log(`you have added ${activities.length} activities. They amount to ${totalUsage} min. of usage`)
    }

}

addActivity(todayDate, "facebook", 20);
addActivity(todayDate, "Twitter", 30);
addActivity(todayDate, "Twitter", 30);
addActivity(todayDate, "Twitter", 30);
addActivity(todayDate, "Twitter", 30);

showStatus(activities)

totalUsage



activities