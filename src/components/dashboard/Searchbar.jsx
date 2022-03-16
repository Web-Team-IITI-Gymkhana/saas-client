import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const Companies = [
  { value: 'Microsoft', label: 'Microsoft' },
  { value: 'Ubisoft', label: 'Ubisoft' },
  { value: 'Activision', label: 'Activision' }
];

export default function AnimatedMulti() {
  const [Company, setCompany] = useState({});

  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: '20px!important',
      background: '#152033',
      border: '0px!important',
      width: '200px',
      boxShadow: 'none'
    }),
    singleValue: (base) => ({
      ...base,
      color: '#ffffff'
    }),
    input: (provided) => ({
      ...provided,
      color: '#ffffff'
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? '#6A31FF'
        : state.isFocused
        ? '#301772'
        : '#152033',
      color: state.isFocused ? '#F2F5FF' : 'white'
    }),
    menu: (provided) => ({
      ...provided,
      background: '#152033',

      color: '#ffffff'
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: '#ffffff'
    }),

    ':before': {
      borderRadius: 0,
      outline: 0,
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  };

  const Placeholder = () => {
    return (
      <div className="flex items-center flex-row justify-items-start gap-x-2  ">
        <FontAwesomeIcon icon={'search'} />
        Company
      </div>
    );
  };
  return (
    <Select
      placeholder={<Placeholder />}
      isSearchable={true}
      onChange={setCompany}
      styles={customStyles}
      noOptionsMessage={() => 'No company in the database'}
      className="text-center font-bold text-white border-0"
      isClearable
      backspaceRemovesValue
      options={Companies}
      autoFocus={true}
    />
  );
}
