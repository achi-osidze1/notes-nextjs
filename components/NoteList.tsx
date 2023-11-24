import React from 'react';

interface NoteListProps {
  notes: any[],
  handleShow: (note: string) => void,
  deleteNote: (index: number) => void
}

const NoteList: React.FC<NoteListProps> = ({ notes, handleShow, deleteNote }) => {
  const handleClick = (note: string) => {
    handleShow(note);
  };

  return (
    <div>
      <h1>Note List</h1>
      <ul className='text-sm font-medium text-gray-900 bg-gray-200 rounded-t-lg'>
        {notes.map((note: any, index: number) => (
          <div className='flex items-center justify-between w-full px-2 py-2 border-b border-gray-300'>
            <li
              key={index}
              className='cursor-pointer'
              onClick={() => handleClick(note)}
            >
              {note}
            </li>
            <button
              className='text-white end-2.5 bottom-2.5 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 transition ease-in-out delay-10'
              onClick={() => deleteNote(index)}
            >
              Delete Note
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
