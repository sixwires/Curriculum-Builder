'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import LoadingSpinner from '@/common/LoadingSpinner';

const Curriculum: React.FC = () => {
  const curriculumData = useSelector((state: RootState) => state.curriculum.data);
  const isLoading = useSelector((state: RootState) => state.curriculum.loading);

  return (
    <section className='flex flex-col my-2 lg:mx-4 lg:my-0'>
      <h1 className='text-lg'>Generated Curriculum:</h1>
      <section className='h-full overflow-auto bg-background-dark p-2 rounded'>
        {isLoading ? <LoadingSpinner></LoadingSpinner> : null}
        {!isLoading && curriculumData && (
          <div>
            {Object.keys(curriculumData).map((topic: string, index: number) => (
              <div key={index}>
                <h3 className='text-lg'>{topic}</h3>
                {curriculumData[topic].map((subtopic: string, subIndex: number) => (
                  <li key={subIndex} className='text-red pe-4'>
                    {subtopic}
                  </li>
                ))}
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default Curriculum;
