'use client';
import React, { useState } from 'react';
import request from '../utils/requestWrapper';
import DropdownPicker from './DropdownPicker';

const subjects: Array<string> = [
  'Mathematics',
  'English Language Arts',
  'Science',
  'Social Studies',
  'History',
  'Geography',
  'Physical Education',
  'Art',
  'Music',
  'Computer Science',
  'Foreign Language',
  'Health',
];

const grades: Array<string> = [
  'Kindergarten',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
  '6th Grade',
  '7th Grade',
  '8th Grade',
  '9th Grade (Freshman)',
  '10th Grade (Sophomore)',
  '11th Grade (Junior)',
  '12th Grade (Senior)',
];

const SubjectSelectionForm: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState({
    subject: '',
    grade: '',
  });

  const handleDropdownChange = (subject: string, value: string): void => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [subject]: value,
    }));
  };

  const cleanURL = (value: string): string => {
    // take in string, replace space values with underscore
    return value.replace(/ /g, '_');
  };

  const handleSubmit = async () => {
    if (selectedValues.subject && selectedValues.grade) {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/curriculum/generate/${selectedValues.subject}-${selectedValues.grade}`;
      console.log(cleanURL(url));
      const data = await request(cleanURL(url));
      console.log(data);
    } else {
      alert('Please select all values');
    }
  };

  const isSubmitDisabled = !selectedValues.subject || !selectedValues.grade;

  return (
    <div>
      <DropdownPicker
        label='Select Subject'
        subjects={subjects}
        onChange={(value) => handleDropdownChange('subject', value)}
      />

      {selectedValues.subject && (
        <DropdownPicker
          label='Select Grade'
          subjects={grades}
          onChange={(value) => handleDropdownChange('grade', value)}
        />
      )}

      <button type='button' onClick={handleSubmit} disabled={isSubmitDisabled} className='submit'>
        Submit
      </button>
    </div>
  );
};

export default SubjectSelectionForm;
