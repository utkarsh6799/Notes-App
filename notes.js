const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes......'
}

const addNote =(title,body) => {
      const notes = loadNotes()
      const duplicateNotes = notes.filter((note) => note.title === title)
          
      

      if(duplicateNotes.length === 0){
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note Added!'))
      }else{
          console.log(chalk.red.inverse('Note title taken!'))
      }

    }

const saveNotes =(notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
    
}

// const removeNotes = function(title,body){
//     const notes = loadNotes()
//     const removeNote = notes.filter(function(){
//         return note.title !== title
//     })

//     if(removeNote.length !== 0){
//         notes.pop({
//             title : title,
//             body : body
//         })
//         saveNotes(removeNote)
//         console.log('Note removed')
//     }else{
//         console.log('Note not found!')
//     }
// }

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    
        
    if(notesToKeep.length !== 0){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }else{
         console.log(chalk.red.inverse('No Note found!'))
    }
   
}

module.exports = {

    getNotes : getNotes,
    addNote : addNote,
    removeNotes : removeNotes

}