import React from 'react';
import SidebarComponent from './components/SideBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Curriculum Builder',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-row'>
          <SidebarComponent />
          {children}
        </div>
      </body>
    </html>
  );
}
