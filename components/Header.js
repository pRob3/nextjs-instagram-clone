import React from 'react';
import Image from 'next/image';

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
      <h1>Right Side</h1>

      {/* Middle */}
      {/* Right */}
    </div>
  );
}
