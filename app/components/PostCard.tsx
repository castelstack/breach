import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  author: {
    id: number;
    name: string;
  };
  category?: {
    id: 1;
    name: string;
    icon: string;
  };
  series: {
    id: number;
    name: string;
  };
  createdAt: string;
  smallImage?: boolean
}

const PostCard: NextComponentType<NextPageContext, {}, Props> = ({
  createdAt,
  title,
  series,
  author,
  content,
  smallImage,
  imageUrl,
  id
}: Props) => {
  return (
    <Link href={`/blog/${id}`}>

    <main className='grid grid-cols-[max-content_1fr] gap-6'>
      <Image
        src={imageUrl}
        width={smallImage ? 184 : 266}
        height={184}
        alt={title}
        objectPosition={'center'}
        className={`${smallImage ? 'w-[184px]' : 'w-[266px]'} h-[184px] rounded-xl object-cover`}
      />
      <div className='flex flex-col gap-1'>
        <h6 className='text-6'>{series.name}</h6>
        <h3 className={smallImage ? 'text-3 text-xl' : 'text-3'}>{title}</h3>
        <h5 className={smallImage ? 'text-small' : 'text-5'}>{content}</h5>
        <p className='text-6 uppercase flex items-center text-[12px]'>
          {author.name} &#x2022; <span className='text-[11px]'>{new Date(createdAt).toDateString()}</span>
        </p>
      </div>
    </main>
    </Link>
  );
};

export default PostCard;
