import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import TimelineWithTabs from './TimelineWithTabs';
import PostCategories from './PostCategories';

interface Props {}

const Posts: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <main className='wrapper py-[60px] grid grid-cols-[1fr_400px] gap-[41px]'>
      <TimelineWithTabs />
      <section className='flex flex-col gap-2'>
        <h2 className='text-2'>Categories</h2>
        <h4 className='text-5'>Discover content from topics you care about</h4>
       <PostCategories/>
      </section>
    </main>
  );
};

export default Posts;
