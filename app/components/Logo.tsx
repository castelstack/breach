import Link from 'next/link';
import LogoIcon from '../assets/breach-logo.svg';

export default function Logo() {
  return (
    <Link href={'/'}>
      <LogoIcon />
    </Link>
  );
}
import React from 'react';
