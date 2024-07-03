import React, { useState, useEffect } from 'react';
import './NoteForm.css';


const NoteForm = ({ onSave, editNote }) => {
    const [ note, setNote] = useState(editNote ? editNote.text : '');


    useEffect(() => {
        if (editNote) {
            setNote(editNote.text);
        }
    }, [editNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.trim()) {
            onSave(note);
            setNote('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='note-form'>
            <textarea value={note} onChange={(e) => setNote(e.target.value)}
            placeholder='Write your notes here...'></textarea>
            <button type='submit'>{editNote ? 'Update' : 'Save'}</button>
        </form>
    );


};

export default NoteForm;