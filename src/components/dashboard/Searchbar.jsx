import React, { useState } from 'react';

import Select from 'react-select';

const Companies = [
  { value: 'Microsoft', label: 'Microsoft' },
  { value: 'Ubisoft', label: 'Ubisoft' },
  { value: 'Activision', label: 'Activision' }
];

const Searchbar = () => {
  const [Company, setCompany] = useState({});
  return (
    <Select
      className="shadow-none"
      placeholder="Companies"
      onChange={setCompany}
      isClearable
      options={Companies}
    />
  );
};
export default Searchbar;
