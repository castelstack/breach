import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Hero: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <main className='bg-[#FCFAFF]'>
      <main className='wrapper grid grid-cols-2 gap-4 items-center pt-[89px] pb-[128px]'>
        <aside className='flex flex-col items-start gap-5'>
          <h1 className='text-1'>
            Find <span className='text-primary'>Great</span> Ideas
          </h1>
          <h4 className='text-4'>
            Subscribe to your favourite creators and thinkers. Support work that
            matters
          </h4>
          <Link href='/login' className='btn-primary mt-10'>
            Join Breach
          </Link>
        </aside>
        <Image
          src='/breach-gif.gif'
          width={641}
          height={512}
          alt='Join Breach'
        />
      </main>
    </main>
  );
};

export default Hero;
