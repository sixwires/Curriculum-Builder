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
    <div>
      <label htmlFor="options">{label}: </label>
      <select id="options" value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>Select a subject</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>{subject}</option>
        ))}
        <option value="custom">Custom</option>
      </select>

      {/* {showCustomInput && (
        <div>
          <label htmlFor="customOption">Enter a custom subject:</label>
          <input
            type="text"
            id="customOption"
            value={selectedOption}
            onChange={handleCustomOptionChange}
          />
        </div>
      )} */}
    </div>
  );
};

export default DropdownPicker;
