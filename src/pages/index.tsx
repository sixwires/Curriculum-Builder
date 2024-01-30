import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const handleGoToGenerate = () => {
    // Logic to perform any actions before navigating if needed
    console.log('Performing actions before navigating to generate page');
  };

  return (
    <div>
      <h1>Landing Page</h1>
      {/* Add your Landing Page content here */}

      {/* "Go to generate" button with Link component */}
      <Link href="/generate">
        <div onClick={handleGoToGenerate}>
          Go to Generate
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
