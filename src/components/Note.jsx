function Note({ title, content, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow-md m-2 w-64 break-words">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 break-words overflow-auto max-h-40">{content}</p>
      <button
        onClick={onDelete}
        className="mt-2 bg-yellow-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;