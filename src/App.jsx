import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty!");
      return;
    }
    setNotes([...notes, { title, content, id: Date.now() }]);
    setTitle('');
    setContent('');
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-grow p-4">
        <NoteForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          handleAddNote={handleAddNote}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {notes.map(note => (
            <Note
              key={note.id}
              title={note.title}
              content={note.content}
              onDelete={() => handleDeleteNote(note.id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;