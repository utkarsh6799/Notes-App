const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//customize yargs
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
        
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//Create list comment
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()











// const add = require('./utils')


// const sum = add(4,-2)
// console.log(sum)