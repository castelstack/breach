'use client';

import { useEffect, useState } from 'react';
import PostsTab from './PostsTab';
import PostCard from '../components/PostCard';
import { CardProps } from '../types';
import { useAllBlogs } from '../hooks/useUserQueries';
import { useUserStore } from '../store/store';
import Loading, {
  EmptyComponent,
  ErrorComponent,
} from '../components/LoadingAndError';

export default function TimelineWithTabs({
  smallImage,
}: {
  smallImage?: boolean;
}) {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <section className='flex flex-col gap-10'>
      <PostsTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TimelineView smallImage={smallImage} />
    </section>
  );
}

function TimelineView({ smallImage }: { smallImage?: boolean }) {
  const store = useUserStore((state) => state);
  const {
    data: blogs,
    isLoading,
    isError,
    error,
    refetch,
    isSuccess,
  } = useAllBlogs(store.category);

  useEffect(() => {
    store.setCategory('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.setCategory]);

  useEffect(() => {
    if (isSuccess) {
      store.setTopPick({ loading: false, ...blogs.data[0] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, store.setTopPick]);

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

  if (!blogs || blogs.data.length === 0) {
    return <EmptyComponent title={'Blog'} />;
  }

  return (
    <main className='grid grid-cols-1 gap-16'>
      {blogs.data.map((post: CardProps) => (
        <PostCard
          key={post.id}
          id={post.id}
          createdAt={post.createdAt}
          series={post.series}
          title={post.title}
          content={post.content}
          author={post.author}
          imageUrl={post.imageUrl}
          smallImage={smallImage}
        />
      ))}
    </main>
  );
}
