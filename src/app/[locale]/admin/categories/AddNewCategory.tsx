'use client';
import toast, { Toaster } from 'react-hot-toast';
import React, { useState, type FormEvent } from 'react';

function AddNewCategory({
  close,
  onClose,
}: {
  close: boolean;
  onClose: () => void;
}) {
  const [englishCategory, setEnglishCategory] = useState('');
  const [arabicCategory, setArabicCategory] = useState('');
  const [sequence, setSequence] = useState('');
  const [color, setColor] = useState('primary');

  const notify = () => toast.success('Added successfully.');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newCategory = {
      name: englishCategory,
      nameAr: arabicCategory,
      sequence: Number(sequence),
      color,
    };

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategory),
      });

      const result = await response.json();
      notify();
      console.log('Category submitted:', result);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <main className="flex justify-center">
      {/* Show the form based on the "close" prop */}
      {close && (
        <div className="min-w-40 px-8 absolute top-30 mx-auto bg-slate-100 z-10 rounded-md">
          <div className="flex justify-center py-4  px-0 gap-20">
            <h2>Add New Category</h2>
            {/* Call onClose to toggle the form visibility */}
            <button onClick={onClose}>Close</button>
          </div>
          <hr />
          <form className="flex gap-10 flex-col mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label>English Category Name</label>
              <input
                className="border-2 rounded-md border-gray-400 p-2 mt-1"
                type="text"
                placeholder="English Category Name"
                value={englishCategory}
                onChange={(e) => setEnglishCategory(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Arabic Category Name</label>
              <input
                className="border-2 rounded-md border-gray-400 p-2 mt-1"
                type="text"
                placeholder="Arabic Category Name"
                value={arabicCategory}
                onChange={(e) => setArabicCategory(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Sequence</label>
              <input
                className="border-2 rounded-md border-gray-400 p-2 mt-1"
                type="text"
                placeholder="Sequence"
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Color</label>
              <select
                className="border-2 rounded-md border-gray-400 p-2 mt-1"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="danger">Danger</option>
              </select>
            </div>

            <div className="flex justify-end gap-4 mb-4">
              <button
                className="bg-green-400 text-white p-2 rounded-md"
                type="submit"
              >
                Save
              </button>
              {/* Call onClose to close the form */}
              <button
                className="bg-gray-400 text-white p-2 rounded-md"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
      <Toaster />
    </main>
  );
}

export default AddNewCategory;
