'use client';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import React from 'react';
import axios from 'axios';

function MenuForm({ category }: { category: any }) {
  const [englishCategory, setEnglishCategory] = useState('');
  const [arabicCategory, setArabicCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(category[0].$id);
  const [close, setClose] = useState(true);
  const [file, setFile] = useState<File | null>(null);

  const router = useRouter();

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // Access the first selected file
    } else {
      setFile(null); // Set file to null if no file selected
    }
  };

  const handleClose = () => {
    const newQuery = '?isActive=false';
    const currentPath = window.location.pathname;
    router.replace(`${currentPath}${newQuery}`);
    setClose(false);
  };

  //handleSubmit using axios
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) {
      console.error('No files selected');
      return;
    }
    /*     const newCategory = {
      name: englishCategory,
      nameAr: arabicCategory,
      categoryId,
      price,
      files,
    }; */

    const formData = new FormData();
    formData.append('name', englishCategory);
    formData.append('nameAr', arabicCategory);
    formData.append('categoryId', categoryId);
    formData.append('price', price.toString());
    formData.append('file', file);

    try {
      // Make the POST request using Axios
      const response = await axios.post('/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('formdata client', formData);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };
  /*
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!files) {
      console.error('No files selected');
      return;
    }

        const newCategory = {
      name: englishCategory,
      nameAr: arabicCategory,
      categoryId,
      price,
      files,
    };

    const formData = new FormData();
    formData.append('name', englishCategory);
    formData.append('nameAr', arabicCategory);
    formData.append('categoryId', categoryId);
    formData.append('price', price.toString());

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      
      const response = await fetch('/api/items', {
        method: 'POST',
        body: formData,
      });l
      if (response.ok) {
        const responseData = await response.json(); 
        console.log('Server response:', responseData);
      } else {
        console.error('Error uploading files:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };
  */

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
                name="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
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
