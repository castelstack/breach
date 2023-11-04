'use client';

import Loading from '@/app/components/LoadingAndError';
import TimelineWithTabs from '@/app/containers/TimelineWithTabs';
import { useUserStore } from '@/app/store/store';
import Image from 'next/image';

export default function HeadlineAndTimeline() {
  const topPick = useUserStore((state) => state.topPick);

  if (topPick.loading) {
    return <Loading />;
  }
  return (
    <main className=''>
      <div className='flex flex-col gap-2 mb-16'>
        <h2 className='text-2'>Top picks</h2>
        <h5 className='text-5'>Experience the best of Breach</h5>
        {topPick.loading ? (
          <Loading />
        ) : (
          <>
            <Image
              src={topPick.imageUrl}
              alt={topPick.title}
              width={400}
              height={481}
              className='w-full bg-black rounded-xl h-[481px]'
            />
            <h4 className='text-3'>{topPick.title}</h4>
            <h5 className='text-5'>{topPick.content}</h5>
          </>
        )}
      </div>
      <div className='sticky top-0'>
        <TimelineWithTabs smallImage />
      </div>
    </main>
  );
}
