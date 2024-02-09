'use client';
import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import LoadingSpinner from '@/common/LoadingSpinner';

const Curriculum: React.FC = () => {
  const curriculumData = useSelector((state: RootState) => state.curriculum.data);

  return (
    <section className='h-full overflow-auto'>
      {curriculumData != null ? JSON.stringify(curriculumData) : <LoadingSpinner></LoadingSpinner>}
    </section>
  );
};

export default Curriculum;
