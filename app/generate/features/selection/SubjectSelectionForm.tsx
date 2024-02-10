'use client';
import { useState } from 'react';
import request from '../../../utils/requestWrapper';
import DropdownPicker from './DropdownPicker';
import { useDispatch } from 'react-redux';
import { setData, setLoading } from '../curriculum/curriculumSlice';
import InputSelector from './InputSelector';

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
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState({
    subject: '',
    grade: '',
    numUnits: -1,
  });

  const handleInputChange = (subject: string, value: string): void => {
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
      dispatch(setLoading(true));
      const url = `${process.env.NEXT_PUBLIC_API_URL}/curriculum/generate/${selectedValues.subject}-${selectedValues.grade}`;
      const data = await request(cleanURL(url));

      // set the data in the store
      dispatch(setData(data.response));
    } else {
      alert('Please select all values');
    }
    dispatch(setLoading(false));
  };

  const isSubmitDisabled =
    !selectedValues.subject || !selectedValues.grade || selectedValues.numUnits == -1;

  return (
    <section>
      <DropdownPicker
        label='Select Subject'
        subjects={subjects}
        onChange={(value) => handleInputChange('subject', value)}
      />

      <DropdownPicker
        label='Select Grade'
        subjects={grades}
        onChange={(value) => handleInputChange('grade', value)}
      />

      <InputSelector
        label='Number of units'
        onChange={(value) => handleInputChange('numUnits', value)}
      />

      <button type='button' onClick={handleSubmit} disabled={isSubmitDisabled} className='submit'>
        Submit
      </button>
    </section>
  );
};

export default SubjectSelectionForm;
