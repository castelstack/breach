'use client';

import type { NextComponentType, NextPageContext } from 'next';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setCurrentTab: Dispatch<SetStateAction<number>>;
  currentTab: number;
}

const PostsTab: NextComponentType<NextPageContext, {}, Props> = ({
  setCurrentTab,
  currentTab,
}: Props) => {
  return (
    <div className='flex gap-6'>
      {['Featured', 'Popular', 'Recent'].map((tab, i) => (
        <button
          type='button'
          key={i}
          onClick={() => setCurrentTab(i)}
          className={`pb-1 ${
            currentTab === i
              ? 'text-dark border-b border-dark'
              : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PostsTab;
