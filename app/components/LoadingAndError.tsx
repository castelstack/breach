export default function Loading() {
  return (
    <main className='grid place-content-center py-12 px-2'>
      <div className='spinner'></div>
    </main>
  );
}

export function ErrorComponent({ error, handleRefresh }: any) {
  return (
    <main className='grid place-content-center py-12 px-2'>
      <h2 className='text-4 font-semibold text-center'>Whoops!</h2>
      <h2 className='text-5 text-dark text-center'>
        {error || 'Something went wrong :('}
      </h2>
      <button
        type='button'
        onClick={() => handleRefresh()}
        className='btn-dark mt-12 py-2 w-max mx-auto !px-8'
      >
        Refresh
      </button>
    </main>
  );
}

export function EmptyComponent({ title }: { title: string }) {
  return (
    <main className='grid place-content-center py-12 px-2'>
      <h2 className='text-4 font-semibold text-center'>{`No ${title} found`}</h2>
    </main>
  );
}
