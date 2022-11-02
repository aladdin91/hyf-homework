let notes = []

function saveNote(content, id) {
    return notes.push({ content, id })
}
saveNote('Pick up groceries', 1)
saveNote('Do laundry', 2)


function getNote(id) {
    if (typeof id !== 'number') {
        return 'id dos not exist'
    } else {
        return notes[id].content
    }
}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}  has the following note text: ${notes[i].content} `)
    }

}


logOutNotesFormatted();