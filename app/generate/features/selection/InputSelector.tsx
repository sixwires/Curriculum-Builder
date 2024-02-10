'use client';
import { useState } from 'react';

interface InputSelectorProps {
  label: string;
  onChange: (value: string) => void;
}

const InputSelector: React.FC<InputSelectorProps> = ({ label, onChange }: InputSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (event: any) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-row py-1'>
      <label htmlFor='values' className='w-32'>
        {label}:{' '}
      </label>
      <input
        type='number'
        value={selectedValue}
        onChange={handleValueChange}
        className='text-black h-6 w-44 px-2 rounded-sm outline-none'
      />
    </div>
  );
};

export default InputSelector;
