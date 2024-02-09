import Curriculum from './features/curriculum/Curriculum';
import SubjectSelectionForm from './features/selection/SubjectSelectionForm';

const Generate = () => {
  return (
    <div>
      <h1 className='text-xl'>Generate Page</h1>
      <section className='flex flex-col md:flex-row px-4 h-screen'>
        <SubjectSelectionForm />
        <Curriculum />
      </section>
    </div>
  );
};

export default Generate;
