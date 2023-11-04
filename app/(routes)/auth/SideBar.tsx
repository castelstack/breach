'use client';

import {
  DashboardIcon,
  HomeIcon,
  PublicationIcon,
  WriteIcon,
} from '@/app/components/Iconset';
import Logo from '@/app/components/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideBar() {
  const pathname = usePathname();
  return (
    <main className='py-[51px] px-[37px] sticky top-0 left-0 w-[292px] h-screen border-r border-stroke'>
      <Logo />
      <Link
        href='/sign-up'
        className='btn-primary mt-[70px] flex gap-1 justify-center'
      >
        <WriteIcon />
        Start writing
      </Link>
      <div className='flex flex-col gap-6 mt-8'>
        <Link
          href='/'
          className={`py-4 px-4 flex items-center hover:bg-bglight hover:text-primary rounded-lg transition-item gap-2 ${
            pathname === '/auth/home'
              ? 'text-primary bg-bglight'
              : 'text-gray-500'
          }`}
        >
          <HomeIcon />
          Home
        </Link>
        <Link
          href='/'
          className={`py-4 px-4 flex items-center  hover:bg-bglight hover:text-primary rounded-lg transition-item gap-2 ${
            pathname === '/auth/dashboard'
              ? 'text-primary bg-bglight'
              : 'text-gray-500'
          }`}
        >
          <DashboardIcon />
          Dashboard
        </Link>
        <Link
          href='/'
          className={`py-4 px-4 flex items-center  hover:bg-bglight hover:text-primary rounded-lg transition-item gap-2 ${
            pathname === '/auth/publication'
              ? 'text-primary bg-bglight'
              : 'text-gray-500'
          }`}
        >
          <PublicationIcon />
          Publication
        </Link>
      </div>
    </main>
  );
}

export default SideBar;
