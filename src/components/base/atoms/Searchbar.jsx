import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparent } from 'daisyui/src/colors';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import client from '../../../apollo/index';
import { companyList } from '../../../utils/companies';
import { gql } from '@apollo/client';

// const GET_COMPANY = async(e.value) => {
//   if (e.value == '') {
//     return [];
//   }
// }
// const res = await client.query({
//   query {
//   getCompanyByCIK(cik: "1013462") {
//     CompanyName
//   }
// }
// });

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  const [Company, setCompany] = useState();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchCompany = async () => {
      const companyCIK = `${searchText}`;
      console.log(companyCIK);
      const query = gql`
        query getCompanyByCIK($cik: String!) {
          getCompanyByCIK(cik: $cik) {
            CompanyName
          }
        }
      `;

      const res = await client.query({
        query: query,
        variables: {
          cik: companyCIK
        }
      });

      console.log(res.data);
    };

    fetchCompany();
  }, [searchText]);

  const handleInputChange = (e) => {
    setSearchText(e.value);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: '20px !important',
      background: transparent,
      // border: '0px!important',
      width: '200px',
      // boxShadow: 'none',
      border: '1px solid black',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid black'
      }
    }),
    singleValue: (base) => ({
      ...base,
      color: '#3547ac'
    }),
    input: (provided) => ({
      ...provided,
      color: '#000000'
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
      <div className="flex items-center flex-row justify-items-start gap-x-2 ">
        <FontAwesomeIcon icon={'search'} />
        Company
      </div>
    );
  };

  return (
    <Select
      placeholder={<Placeholder />}
      label="Single select"
      isSearchable={true}
      onChange={(e) => {
        handleInputChange(e);
      }}
      styles={customStyles}
      noOptionsMessage={() => 'No company in the database'}
      className="text-center font-bold text-white border-0 focus:ring-0"
      isClearable
      backspaceRemovesValue
      options={companyList}
      autoFocus={true}
      on
    />
  );
}
