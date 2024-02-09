import React from 'react';
import Link from 'next/link';

const SidebarComponent: React.FC = () => {
  return (
    <div className='flex flex-col w-32 h-screen p-4 bg-background-dark'>
      <Link href='/'>
        <div>Home</div>
      </Link>
      <Link href='/generate'>
        <div>Generate</div>
      </Link>
    </div>
  );
};

export default SidebarComponent;
