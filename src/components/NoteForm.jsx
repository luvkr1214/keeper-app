function NoteForm({ title, content, setTitle, setContent, handleAddNote }) {
  return (
    <div className="bg-white p-4 rounded-b-lg shadow-md mb-4 flex flex-col md:flex-row items-center">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3"
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 mb-2 md:mb-0 w-full md:w-2/3"
      />
      <button
        onClick={handleAddNote}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default NoteForm;