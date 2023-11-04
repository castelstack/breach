

import Header from '@/app/components/Header';
import Image from 'next/image';
import InterestsList from './InterestsList';

export default function Interests() {
  return (
    <main className='grid grid-cols-1'>
      <Header />

      <section className='md:px-1 px-4 max-w-[732px] mx-auto w-full flex flex-col gap-2 content-center'>
        <div className='flex flex-col gap-2 items-center'>
          <Image
            src='/images/bearavatar.png'
            width={100}
            height={100}
            className='rounded-full'
            alt={'Welcome to Breach 🥳'}
          />
          <h2 className='text-2 text-center'>What are your interests?</h2>
          <h4 className='text-5 text-center'>
            Select your interests and I&apos;ll recommend some series I&apos;m
            certain you&apos;ll enjoy!{' '}
          </h4>
        </div>
        <InterestsList />
      </section>
    </main>
  );
}
