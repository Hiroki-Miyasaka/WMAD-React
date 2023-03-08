import React from 'react'
import "./Sidebar.css"

const Sidebar = (props) => {
  
  const noteElements = props.notes.map((note, index) => (
    <div key={index}>
      <div 
      className={`note ${note.id === props.currentNote.id ? "selected-note" : ""}`}
      onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className='note--text'>Note {index + 1}</h4>
      </div>
    </div>
  ))

  return (
    <section className='pane sidebar'>
        <div className='sidebar--header'>
            <h3 className='sidebar--header--title'>Note</h3>
            <button className='sidebar--header--btn' onClick={props.newNote}>+</button>
        </div>
        {noteElements}
    </section>
  )
}

export default Sidebar