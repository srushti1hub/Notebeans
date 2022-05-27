const chalk = require('chalk')
const argv  = require('yargs')
const yargs = require('yargs')
const NotesUtilities = require('../NotesApp/notes.js')

//Add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body:{
            describe : 'Note Body',
            demandOption : true,
            type : 'string'
        },
    },
    handler(argv){
        console.log(chalk.yellowBright.bold('Adding note...'))
        NotesUtilities.addNote(argv.title,argv.body)
    }
})

//Read command
yargs.command({
    command : 'read',
    describe : 'Reading note',
    builder : {
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        console.log(chalk.yellowBright.bold('Reading note...'))
        NotesUtilities.readNote(argv.title)
    }
})

//Remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title: 
        {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        console.log(chalk.yellowBright.bold('Removing note...'))
        NotesUtilities.removeNote(argv.title)
    }
})

//List command
yargs.command({
    command : 'list',
    describe : 'List notes',
    handler(){
        console.log(chalk.yellowBright.bold('Listing notes...'))
        NotesUtilities.listNotes()
    }
})

yargs.parse()
