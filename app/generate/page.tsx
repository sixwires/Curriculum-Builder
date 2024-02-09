import React from 'react';
import SubjectSelectionForm from './features/selection/SubjectSelectionForm';

export default function Generate() {
  return (
    <div>
      <h1 className='text-xl'>Generate Page</h1>
      <div className='p-4'>
        <SubjectSelectionForm />
      </div>
    </div>
  );
}
