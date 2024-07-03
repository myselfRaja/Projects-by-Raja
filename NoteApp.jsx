import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './NoteApp.css';


const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [editNote, setEditNote] = useState(null);


    const addNote = (text) => {
        const newNote = { id: Date.now(), text };
        setNotes([newNote, ...notes]);
    };


    const updateNote = (text) => {
        setNotes(notes.map((note) => (note.id === editNote.id ? { ...note, text } : note)));
        setEditNote(null);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const handleSave = (text) => {
        if (editNote) {
            updateNote(text);
        } else {
            addNote(text);
        }
    };


    return (
        <div className="note-app">
            <h1>Note Taking App</h1>
            <NoteForm onSave={handleSave} editNote={editNote} />
            <NoteList notes={notes} onEdit={setEditNote} onDelete={deleteNote} />
        </div>
    );
};

export default NoteApp;