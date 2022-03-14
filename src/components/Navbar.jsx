import React from 'react';
import AutoCompleteInput from './base/atoms/Input';

function Navbar(props) {
    return (
        <div className="flex flex-row items-center justify-between w-full h-16 pl-10 pr-10 overflow-hidden text-white bg-saasbg">
            <div className='text-2xl'>
                Dashboard
            </div>
            <div className='w-2/6'>
                <AutoCompleteInput />
            </div>
        </div>
    );
}

export default Navbar;