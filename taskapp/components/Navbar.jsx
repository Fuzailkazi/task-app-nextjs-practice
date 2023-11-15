import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <header className='w-full md:w-[70%] mx-auto py-3 px-2 '>
        <nav className='w-full flex justify-between'>
          <Link href={'/'} className='font-bold text-2xl'>
            CRUD App
          </Link>
          <ul className='flex gap-x-4 font-semibold items-center'>
            <li>
              <Link href={'/'} className=''>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className=''>
                About
              </Link>
            </li>
            <li>
              <Link href={'/'} className=''>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
