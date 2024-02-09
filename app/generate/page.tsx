'use client';
import SubjectSelectionForm from './features/selection/SubjectSelectionForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Generate() {
  const curriculumData = useSelector((state: RootState) => state.curriculum.data);

  return (
    <div>
      <h1 className='text-xl'>Generate Page</h1>
      <div className='p-4'>
        <SubjectSelectionForm />
        <pre>{JSON.stringify(curriculumData, null, 2)}</pre>
      </div>
    </div>
  );
}
