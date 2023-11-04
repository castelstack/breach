import type { NextComponentType, NextPageContext } from 'next';
import SideBar from './SideBar';
import { ReactNode } from 'react';
import Streams from './Streams/Streams';

interface Props {
  children: ReactNode;
}

const AuthLayout: NextComponentType<NextPageContext, {}, Props> = ({
  children,
}: Props) => {
  return (
    <main className='relative grid grid-cols-[292px_1fr_404px]'>
      <SideBar />
      <div className='py-[51px] px-[37px]'> {children}</div>
      <Streams />
    </main>
  );
};

export default AuthLayout;
