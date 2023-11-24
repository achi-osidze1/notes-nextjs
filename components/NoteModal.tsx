import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import jsPDF from 'jspdf';

interface NoteModalProps {
  isOpen: boolean,
  handleClose: () => void,
  selectedNote: string
}

export default function NoteModal({ isOpen, handleClose, selectedNote }: NoteModalProps) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(selectedNote, 10, 10);
    doc.save(`${selectedNote}.pdf`);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 border-b"
                >
                  Note
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-gray-500 text-2xl">
                    {selectedNote}
                  </p>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition ease-in-out delay-10"
                    onClick={generatePDF}
                  >
                    Download PDF
                  </button>
                  <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition ease-in-out delay-10"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>

  )
}
