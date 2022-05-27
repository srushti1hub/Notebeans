const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (Error){
        return []
    }
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) =>  note.title === title )

    if(!duplicateNotes)
    {
        notes.push ({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.greenBright.bold('Note added successfully !'))
    }

    else{
        console.log(chalk.redBright.bold('Failed to add note !   #Note title alredy exists'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) =>  note.title !== title )
    if(notes.length > notesTokeep.length)
    {
        saveNotes(notesTokeep)
        console.log(chalk.greenBright.bold('Note removed successfully !'))
    }
    else{
        console.log(chalk.redBright.bold('Failed to remove note !   #No such note title exists'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const requiredNote = notes.find((note) =>  note.title === title )
    if(requiredNote)
    {
        console.log(chalk.greenBright.bold('Note content : '))
        console.log('Title : '+requiredNote.title)
        console.log('Body : '+requiredNote.body)
    }
    else{
        console.log(chalk.redBright.bold('Failed to read note !   #No such note title exists'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.greenBright.bold('Your notes :'))
    notes.forEach(note => {
        console.log('Title : '+note.title)
    });
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}