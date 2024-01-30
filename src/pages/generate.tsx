import React from 'react';
import { NextPage } from 'next';
import SidebarComponent from '../components/SideBar';
import SubjectSelectionForm from '../components/SubjectSelectionForm';


const GeneratePage: NextPage = () => {
  return (
    <>
      <SidebarComponent />

      <div style={{ marginLeft: '260px', padding: '20px' }}>
        <h1>Generate Page</h1>
        {/* Add your Generate Page content here */}
        <SubjectSelectionForm />
      </div>
    </>
  );
};

export default GeneratePage;
