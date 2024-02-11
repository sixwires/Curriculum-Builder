import Curriculum from './features/curriculum/Curriculum';
import SubjectSelectionForm from './features/selection/SubjectSelectionForm';

const Generate: React.FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <h1 className='text-xl'>Generate Page</h1>
      <section className='flex flex-col grow overflow-hidden lg:flex-row px-4'>
        <SubjectSelectionForm />
        <Curriculum />
      </section>
    </div>
  );
};

export default Generate;
