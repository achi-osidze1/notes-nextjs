import NoteModal from '@/components/NoteModal'
import NoteList from '@/components/NoteList'
import { Inter } from 'next/font/google'
import { SetStateAction, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [notes, setNotes] = useState<any[]>([])
  const [inputText, setInputText] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedNote, setSelectedNote] = useState<string>("")

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const addNote = () => {
    setNotes([...notes, inputText])
    setInputText("")
  }

  const deleteNote = (index: number) => {
    const updatedNoteList = [...notes];
    updatedNoteList.splice(index, 1);
    setNotes(updatedNoteList);
  };

  const handleClose = () => setIsOpen(false);

  const handleShow = (notes: SetStateAction<string>) => {
    setSelectedNote(notes);
    setIsOpen(true);
  };

  const disableSearch = !inputText

  return (
    <div className={`mx-auto p-4 sm:px-6 lg:max-w-[1920px] ${inter.className}`}>
      <div className='max-w-xl p-3 mt-12 mx-auto bg-gray-100 rounded-lg'>
        <div className="relative my-3">
          <input
            type="text"
            className="block w-full outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out delay-10"
            placeholder="Enter Notes"
            value={inputText}
            onChange={inputChange}
            required
          />
          <button
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition ease-in-out delay-10"
            onClick={addNote}
            disabled={disableSearch}
          >
            Save Note
          </button>
        </div>
        <NoteList notes={notes} handleShow={handleShow} deleteNote={deleteNote} />
        <NoteModal isOpen={isOpen} handleClose={handleClose} selectedNote={selectedNote} />
      </div>
    </div>
  )
}
