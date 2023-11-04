import Header from '@/app/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  return (
    <main className='grid grid-cols-1'>
      <Header />
      <section className='md:px-1 px-4 max-w-[1053px] mx-auto w-full mt-9 grid grid-cols-1 gap-4 justify-items-center'>
        <Image
          src='/images/bear.png'
          width={270}
          height={270}
          alt={'Welcome to Breach 🥳'}
        />
        <h2 className='text-2 text-center'>Welcome to Breach 🥳</h2>
        <h5 className='text-5 text-center md:w-[50%] w-full'>
          Just a few quick questions to help personalise your Breach experience.
          Are you ready?
        </h5>
        <Link href={'/interests'} className='btn-dark mt-10'>
          Let&apos;s begin!
        </Link>
      </section>
    </main>
  );
}
