"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className='font-bold text-lg text-gray-500'>No tasks available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className='flex items-center justify-between mb-4 p-4 bg-white shadow-md rounded-lg'>
        <div className='flex flex-col w-2/3'>
          <h5 className='text-2xl font-semibold text-gray-800'>{t.title}</h5>
          <h4 className='text-lg font-medium text-gray-600'>{t.desc}</h4>
        </div>
        <button
          onClick={() => deleteHandler(i)}
          className='px-4 py-2 bg-red-500 hover:bg-red-600 font-bold rounded text-white shadow-md'
        >
          Delete
        </button>
      </li>
    ));
  }

  return (
    <>
      <div className='bg-green-900 p-5'>
        <h1 className='text-white text-5xl font-bold text-center'>My Todo List</h1>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col items-center mt-8'>
        <input
          type='text'
          className='px-4 py-2 m-2 w-1/2 text-2xl border-4 border-zinc-800 border-double rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          className='px-4 py-2 m-2 w-1/2 text-2xl border-4 border-zinc-800 border-double rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600'
          placeholder='Enter description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='bg-emerald-900 text-white px-6 py-3 mt-4 text-2xl font-bold rounded-lg shadow-md hover:bg-emerald-800'>
          Add task
        </button>
      </form>
      <hr className='my-8' />
      <div className='p-8 bg-green-100 rounded-lg shadow-lg'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
