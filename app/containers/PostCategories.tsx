'use client';

import { useState } from 'react';
import { useBlogsCategories } from '../hooks/useUserQueries';
import { InterestsResponse } from '../types';
import { useUserStore } from '../store/store';
import Loading, {
  EmptyComponent,
  ErrorComponent,
} from '../components/LoadingAndError';

export default function PostCategories() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
    refetch,
  } = useBlogsCategories();
  const setCategory = useUserStore((state) => state.setCategory);
  const [currentCategory, setCurrentCategory] = useState('');

  const handleCategoryClick = (id: string) => {
    setCurrentCategory(id);
    setCategory(id);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <ErrorComponent
        error={error.response.data.message}
        handleRefresh={refetch}
      />
    );
  }

  if (!categories || categories.data.length === 0) {
    return <EmptyComponent title={'Categories'} />;
  }
  return (
    <div className='mt-4 flex flex-wrap gap-4'>
      {categories.data.map((category: InterestsResponse) => (
        <button
          type='button'
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`flex gap-2 items-center capitalize text-[14px] py-2 px-4 ${
            currentCategory === category.id ? 'btn-primary' : 'btn-outline'
          }`}
        >
          {category.icon}
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
