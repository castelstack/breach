import type { NextComponentType, NextPageContext } from 'next';
import Logo from '../assets/breach-logo.svg';
import Link from 'next/link';

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = () => {
  return (
    <footer className='wrapper py-10 flex items-center justify-between border-t border-dark/10'>
      <Logo />
      <aside className='flex items-center gap-8'>
        <Link href='/login' className='text-primary'>
          support@breach.example
        </Link>
        <Link href='/login'>About Breach</Link>
        <Link href='/login'>Terms</Link>
        <Link href='/login'>Privacy Policy</Link>
      </aside>
    </footer>
  );
};

export default Footer;
