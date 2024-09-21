'use client';
import React, { useEffect, useState } from 'react';
import AddNewCategory from './AddNewCategory';
import { set } from 'zod';
import Link from 'next/link';

function DisplayData() {
  const [close, setClose] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoaded(true);
      const response = await fetch('http://localhost:3000/api/categories');
      const data = await response.json();
      console.log('data from useEffect', data);
      setData(data);
    };
    getCategories();
  }, []);

  const handleDeleteCategory = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/categories/${id}`,
        {
          method: 'DELETE',
        }
      );
      console.log('response', response);

      if (response.ok) {
        setData((prev) => prev?.filter((item) => item.$id !== id));
      } else {
        console.error('Failed to delete category from Displaydata component');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const onClose = () => {
    setClose(!close);
  };

  return (
    <main className="flex justify-center flex-col">
      <div className="bg-blue-100 flex justify-center p-1 m-1">
        <button onClick={onClose} className="bg-green-300 p-2 rounded-md m-1 ">
          Add New Category
        </button>
      </div>

      <div className="text-gray-900 bg-gray-200 mt-1">
        <div className="p-4 flex justify-between">
          <h1 className="text-3xl">Category</h1>
          <button
            className="p-4 bg-green-500 text-white font-extrabold text-xl rounded-full w-14 cursor-pointer"
            onClick={onClose}
          >
            +
          </button>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">NameAr</th>
                <th className="text-left p-3 px-5">Sequence</th>
                <th></th>
              </tr>
              {data.map((category) => (
                <tr
                  key={category.id}
                  className={`border-b hover:bg-orange-100 'bg-gray-100' : ''}`}
                >
                  <td className="p-3 px-5">{category.name}</td>
                  <td className="p-3 px-5">{category.nameAr}</td>
                  <td className="p-3 px-5">{category.sequence}</td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(category.$id)}
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddNewCategory onClose={onClose} close={close} />
    </main>
  );
}

export default DisplayData;
