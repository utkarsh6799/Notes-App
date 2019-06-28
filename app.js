const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//customize yargs
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function(){
        console.log('Removing a note!')
    }
})

//Create list comment
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all note')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})

console.log(yargs.argv)











// const add = require('./utils')


// const sum = add(4,-2)
// console.log(sum)