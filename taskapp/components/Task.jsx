import React from 'react';

const Task = () => {
  return (
    <>
      <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
        <th
          scope='row'
          class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
        >
          1
        </th>
        <td class='px-6 py-4'>Learn Rust</td>
        <td class='px-6 py-4'>Complete introduction and basic syntax</td>
        <td class='px-6 py-4'>complete</td>
        <td class='px-6 py-4'>
          <button className='bg-red-500 px-12 py-3 hover:bg-red-700 duration-300 transition-all text-white'>
            Delete
          </button>
          <button className='bg-green-500 px-12 py-3 hover:bg-green-700 duration-300 transition-all text-white'>
            Update
          </button>
        </td>
      </tr>
    </>
  );
};

export default Task;
