import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl'>
      {/* Left */}
      <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          fill
          className='object-contain'
        />
      </div>
      <div className='cursor-pointer h-10 w-10 relative lg:hidden'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png'
          fill
          className='object-contain'
        />
      </div>
      {/* Middle */}
      <div className='relative mt-1'>
        <div className='absolute top-2 left-2'>
          <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
        </div>
        <input
          type='text'
          placeholder='Search...'
          className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
        />
      </div>
      {/* Right */}
      <h1>Right Side</h1>
    </div>
  );
}
