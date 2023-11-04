'use client';

import { InterestsResponse } from '@/app/types';
import Link from 'next/link';
import useInterests from './useInterests';
import Loading, {
  EmptyComponent,
  ErrorComponent,
} from '@/app/components/LoadingAndError';

export default function InterestsList() {
  const {
    categories,
    isLoading,
    isError,
    error,
    handleInterestsSubmit,
    handleCategoryClick,
    isSubmitting,
    selectedCategories,
    refetch,
  } = useInterests();

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
    return <EmptyComponent title={'Interests'} />;
  }
  return (
    <>
      <div className='mt-4 flex flex-wrap gap-6 justify-center'>
        {categories.data.map((category: InterestsResponse) => (
          <button
            type='button'
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex gap-2 items-center capitalize text-[14px] py-2 px-4 ${
              selectedCategories.includes(category.id)
                ? 'btn-primary'
                : 'btn-outline'
            }`}
          >
            {category.icon}
            <span> {category.name}</span>
          </button>
        ))}
      </div>
      <button
        type='button'
        onClick={handleInterestsSubmit}
        className='btn-dark mt-20 w-max mx-auto !px-8 '
        disabled={isSubmitting}
      >
        Next
      </button>
      {!isSubmitting ? (
        <Link
          href={'/auth/home'}
          className='text-center text-gray-500 mt-4 w-max mx-auto'
        >
          Skip for later
        </Link>
      ) : null}
    </>
  );
}
