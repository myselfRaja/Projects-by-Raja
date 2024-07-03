// src/NoteList.jsx
import React from 'react';
import './NoteList.css';
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin5Fill } from "react-icons/ri";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <div className="note-buttons">
            <button onClick={() => onEdit(note)}> <LuClipboardEdit /></button>
            <button onClick={() => onDelete(note.id)}> <RiDeleteBin5Fill /> </button>
          </div>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
