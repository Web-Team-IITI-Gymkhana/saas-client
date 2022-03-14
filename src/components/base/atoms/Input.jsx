import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const options = ['option1','option2']
function AutoCompleteInput() {
  return (
      <Autocomplete
          options={options}
          className="w-full"
        renderInput={(params) => (
          <div className='w-full' ref={params.InputProps.ref}>
                <input  {...params.inputProps} className='w-full rounded-large text-black' type="text" />
                <FontAwesomeIcon className='text-white' icon={'search'} />
          </div>
        )}
      />
  );
}
export default AutoCompleteInput