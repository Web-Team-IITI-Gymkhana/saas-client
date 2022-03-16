import React from 'react';
import Searchbar from './Searchbar';

function Navbar(props) {
  return (
    <div className="flex flex-row items-center justify-between w-full h-16 pl-10 pr-10 overflow-hidden text-white bg-saasbg overflow-visible">
      <div className="text-2xl">Dashboard</div>
      <div className="">
        <Searchbar />
      </div>
    </div>
  );
}

export default Navbar;
