'use client';
import SubjectSelectionForm from '../selection/SubjectSelectionForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Curriculum() {
  const curriculumData = useSelector((state: RootState) => state.curriculum.data);

  return (
    <section className='h-full overflow-auto'>
      <pre>{JSON.stringify(curriculumData, null, 2)}</pre>
    </section>
  );
}

/*
const res = JSON.parse(xhr.responseText);

for (const key in res){
  if(obj.hasOwnProperty(key)){
    console.log(`${key} : ${res[key]}`)
  }
}
*/
