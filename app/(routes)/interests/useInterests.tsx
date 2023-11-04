'use client';

import {
  useBlogsCategories,
  useCreateInterests,
} from '@/app/hooks/useUserQueries';
import { useUserStore } from '@/app/store/store';
import { useRouter } from 'next/navigation';
import Notiflix from 'notiflix';
import { useState } from 'react';

export default function useInterests() {
  const route = useRouter();
  const { data: categories, isLoading, isError, error, refetch } = useBlogsCategories();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const { mutate: createInterests, isLoading: isSubmitting } =
    useCreateInterests();
  const userId = useUserStore((state) => state.userId);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategories((prevSelected: string[]) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  const handleInterestsSubmit = () => {
    createInterests(
      { id: userId, values: selectedCategories },
      {
        onSuccess() {
          Notiflix.Notify.success('Successful!');
          route.push('/auth/home');
        },
        onError(error: any) {
          if (error.response.status === 409) {
            Notiflix.Notify.warning(error.response.data.message);
          } else {
            Notiflix.Notify.failure(error.response.data.message);
          }
        },
      }
    );
  };

  return {
    categories,
    isLoading,
    isError,
    error,
    refetch,
    handleInterestsSubmit,
    handleCategoryClick,
    isSubmitting,
    selectedCategories,
  };
}
