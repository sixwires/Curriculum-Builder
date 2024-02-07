"use client";

import React, { useState } from 'react';


interface DropdownPickerProps {
  label: string;
  subjects: Array<string>;
  onChange: (value: string) => void;
}

const DropdownPicker: React.FC<DropdownPickerProps> = ({ label, subjects, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-row py-1'>
      <label htmlFor="options" className='w-32'>{label}: </label>
      <select id="options" value={selectedOption} onChange={handleSelectChange} className='text-black w-44 rounded-sm outline-none'>
        <option value="" disabled>Select a subject</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>{subject}</option>
        ))}
        <option value="custom">Custom</option>
      </select>
    </div>
  );
};

export default DropdownPicker;
