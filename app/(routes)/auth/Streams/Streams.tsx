'use client';

import { useState } from 'react';
import WebSocketClient from './WebSocket';
import StreamCard from './StreamCard';
import { CardProps } from '@/app/types';
import Loading from '@/app/components/LoadingAndError';

type StreamProps = Omit<CardProps, 'imageUrl'>;

export default function Streams() {
  const [data, setData] = useState<StreamProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDataReceived = (newData: any, loading: boolean) => {
    setData((prevData: any) => [...prevData, newData]);
    setIsLoading(loading);
  };

  return (
    <main className='py-[51px] px-[37px] sticky top-0 left-0 w-[404px] h-screen border-l border-stroke'>
      <h2 className='text-2 font-grotesk'>Streams</h2>
      <h4 className='text-5'>
        Discover trending content from topics you care about in real time
      </h4>
      <div className='grid grid-cols-1 gap-6 pt-4 mt-6 border-t border-stroke items-start content-start min-h-[80vh] overflow-y-auto'>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((stream: StreamProps) => (
            <StreamCard
              key={stream.id}
              id={stream.id}
              createdAt={stream.createdAt}
              series={stream.series}
              title={stream.title}
              content={stream.content}
              author={stream.author}
            />
          ))
        )}
      </div>

      <WebSocketClient
        onDataReceived={handleDataReceived}
        setIsLoading={setIsLoading}
      />
    </main>
  );
}
