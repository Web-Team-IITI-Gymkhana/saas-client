import React, {useState} from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();
const Companies = [
    { value: 'Microsoft', label: 'Microsoft' },
    { value: 'Ubisoft', label: 'Ubisoft' },
    { value: 'Activision', label: 'Activision'},
      
  ];
  

export default function AnimatedMulti() {

 const [Company, setCompany]=useState({});


function customTheme(theme)
{
  return{
    ...theme,
    colors:{
     
      primary25: 'darkblue',
      primary: 'blue'
    }
  }
}

const customStyles={
    
  
  control: (base,state) => ({
    ...base,
    background: "#152033",
    border:0,
    outline:"none"
    
  }),
  singleValue: base => ({
    ...base,
    color: "#ffffff",
    boxshadow: "none",
    outline:"none"
    
  }),
    input:(provided) => ({
      ...provided,
      color:'#ffffff',
      border:0,
    outline:"none",
    boxshadow: "none",
    
      
     
      }),
     
      
           
                 menu:(provided) => ({
                      ...provided,
                      background: "#152033",
                      
                      color:'#ffffff',
                      
                      }),
                      noOptionsMessage:(provided) => ({
                        ...provided,
                        
                        color:'#ffffff',
                       }),
                      
                         
                   
}

  return (
    <Select
    components={animatedComponents}
    placeholder="Companies"
    isSearchable
    theme={customTheme}
    onChange={setCompany}
    styles={customStyles}
    noOptionsMessage={()=>"No company in the database"}
    className="text-center font-bold text-white border-0"
    isClearable
    backspaceRemovesValue
    options={Companies}
    autoFocus={false}
      
    />
  );
}