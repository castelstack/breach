'use client'

import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import Logo from './Logo';
import { useUserStore } from '../store/store';

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  return (
    <header className='wrapper py-8 flex items-center justify-between'>
      <Logo />
      {isLoggedIn ? null : (
        <aside className='flex items-center gap-8'>
          <Link href='/login' className='btn-outline'>
            Log in
          </Link>
          <Link href='/sign-up' className='btn-primary'>
            Join Breach
          </Link>
        </aside>
      )}
    </header>
  );
};

export default Header;
