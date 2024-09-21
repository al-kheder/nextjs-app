'use client';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import React from 'react';

function MenuForm({ category }: { category: any }) {
  const [englishCategory, setEnglishCategory] = useState('');
  const [arabicCategory, setArabicCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(category[0].$id);
  const [close, setClose] = useState(true);
  const [file, setFile] = useState('');

  const router = useRouter();

  const handleClose = () => {
    const newQuery = '?isActive=false';
    const currentPath = window.location.pathname;
    router.replace(`${currentPath}${newQuery}`);
    setClose(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newCategory = {
      name: englishCategory,
      nameAr: arabicCategory,
      categoryId,
      price,
      file,
    };

    const formData = new FormData();
    formData.append('name', englishCategory);

    formData.append('nameAr', arabicCategory);
    formData.append('categoryId', categoryId);
    formData.append('price', price.toString());
    formData.append('file', file);

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: formData,
      });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <main>
      {close && (
        <div className="min-w-40 px-8 absolute top-10 left-50 bg-slate-100 z-10 rounded-md">
          <div className="flex justify-center py-4  px-0 gap-20">
            <h2>Add New Item</h2>
            <button onClick={handleClose}>Close</button>
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
              <label>Price</label>
              <input
                className="border-2 rounded-md border-gray-400 p-2 mt-1"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </div>

            <div className="flex flex-col">
              <label>Category</label>
              <select
                className="border-2 rounded-md border-gray-400 p-2 mt-1"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {category.map((item: any) => (
                  <option key={item.id} value={item.$id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label>File Uploader</label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="flex flex-col"></div>
            <div className="flex justify-end gap-4 mb-4">
              <button
                className="bg-green-400 text-white p-2 rounded-md"
                type="submit"
              >
                Save
              </button>
              <button
                className="bg-gray-400 text-white p-2 rounded-md"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

export default MenuForm;
