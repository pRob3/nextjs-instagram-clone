import Image from 'next/image';
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { HomeIcon } from '@heroicons/react/24/solid';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
      <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        {/* Left */}
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
            fill
            className='object-contain'
            alt='logo'
          />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png'
            fill
            className='object-contain'
            alt='logo'
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
        <div className='flex space-x-4 items-center'>
          <HomeIcon className='hidden md:inline-flex h-6 w-6 cursor-pointer hover:scale-125 transition.transform duration-200 ease-out' />
          {session ? (
            <>
              <PlusCircleIcon className='h-6 w-6 cursor-pointer hover:scale-125 transition.transform duration-200 ease-out' />
              <img
                onClick={signOut}
                src={session.user?.image}
                alt='user-image'
                className='h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition.transform duration-200 ease-out'
              />
            </>
          ) : (
            <button
              onClick={signIn}
              className='text-sm font-semibold text-blue-500'
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
