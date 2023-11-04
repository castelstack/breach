import { CardProps } from '@/app/types';
import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

type StreamProps = Omit<CardProps, 'imageUrl'>;

function StreamCard({ createdAt, title, author, content, id }: StreamProps) {
  return (
    <Link href={`/blog/${id}`}>
      <main className='flex flex-col gap-1'>
        <h3 className={'text-3 !text-base'}>{title}</h3>
        <h5 className={'text-small !text-sm'}>{content}</h5>
        <p className='text-6 uppercase flex items-center text-[11px]'>
          {author.name} &#x2022;{' '}
          <span className='text-[11px]'>
            {new Date(createdAt).toDateString()}
          </span>
        </p>
      </main>
    </Link>
  );
}

export default StreamCard;
