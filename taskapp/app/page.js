'use client';
import Task from '@/components/Task';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const SetTitle = (e) =>
    setTask({
      ...task,
      ['title']: e.target.value,
    });

  const SetDescription = (e) =>
    setTask({
      ...task,
      ['description']: e.target.value,
    });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='w-full md:w-[70%] mx-auto py-24 px-2'>
        <form action='' onSubmit={onSubmitHandler}>
          <div className='mb-3'>
            <input
              type='text'
              value={task.title}
              onChange={SetTitle}
              className='w-full px-3 py-2 h-10 outline-none border-2 border-purple-500'
              placeholder='Enter a Task'
            />
          </div>
          <div className='mb-3'>
            <textarea
              className='w-full px-3 py-2 h-10 outline-none border-2 border-purple-500'
              placeholder='Enter Description'
              rows={8}
              cols={30}
              value={task.description}
              onChange={SetDescription}
            />
          </div>
          <div className='mb-3'>
            <button className='bg-purple-500 px-12 py-3 hover:bg-purple-700 duration-300 transition-all text-white'>
              Add Task
            </button>
          </div>
        </form>

        <div className='py-10'>
          <div class='relative overflow-x-auto'>
            <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' class='px-6 py-3 font-semibold text-xl'>
                    Id
                  </th>
                  <th scope='col' class='px-6 py-3 font-semibold text-xl'>
                    Title
                  </th>
                  <th scope='col' class='px-6 py-3 font-semibold text-xl'>
                    Description
                  </th>
                  <th scope='col' class='px-6 py-3 font-semibold text-xl'>
                    Status
                  </th>
                  <th scope='col' class='px-6 py-3 font-semibold text-xl'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill(null)
                  .map((c, i) => {
                    return <Task key={i} />;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
