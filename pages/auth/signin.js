import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className='flex justify-center space-x-7 mt-20'>
        <img
          className='hidden object-cover rotate-6 md:inline-flex md:w-48'
          src='https://like4like.com/img/hero-x750.png'
          alt='instagram image'
        />
        <div className=''>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className='flex flex-col items-center'>
              <img
                className='w-32 object-cover'
                src='https://starpng.com/public/uploads/preview/instagram-logo-png-by-akshay-jondhale-115777308175dxll6lbew.png'
                alt='instagram logo'
              />
              <p className='text-sm italic my-10 text-right'>
                This app is only for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
