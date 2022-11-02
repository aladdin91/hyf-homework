const seriesDurations = [{
    title: "breaking bad",
    days: 1,
    hours: 22,
    minutes: 30
}, {
    title: "how i met your mother",
    days: 3,
    hours: 4,
    minutes: 16
}, {
    title: "game of throne",
    days: 3,
    hours: 1,
    minutes: 0
}];

function tvTimeInLife(num) {
    const dyesToMin = seriesDurations[num].days * 24 * 60
    const hoursToMin = seriesDurations[num].hours * 60
    const result = dyesToMin + hoursToMin + seriesDurations[0].minutes
    const precntge = result / 42048000 * 100
    console.log(`${seriesDurations[num].title} took ${precntge.toFixed(3)}% of my life`)
}

tvTimeInLife(0)
tvTimeInLife(1)
tvTimeInLife(2)