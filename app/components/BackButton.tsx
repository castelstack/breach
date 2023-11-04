'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const route = useRouter();
  return (
    <button type='button' onClick={() => route.back()} className='flex items-center '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-3 h-3'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 19.5L8.25 12l7.5-7.5'
        />
      </svg>
      Back
    </button>
  );
}
