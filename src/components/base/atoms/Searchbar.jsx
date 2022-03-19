import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparent } from 'daisyui/src/colors';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import client from '../../../apollo/index';
import { companyList } from '../../../utils/companies';
import { query } from '../../../apollo/queries';
import Context from '../../../context/context-config';
import Loading from '../atoms/Loading';

import { ErrorBoundary } from 'react-error-boundary';

import { getCompanyDataFromCIK } from '../../../utils/utils';

const animatedComponents = makeAnimated();

export default function AnimatedMulti({ style_prop }) {
  const [searchText, setSearchText] = useState(null);
  const myContext = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompany = async () => {
      const companyCIK = `${searchText}`;
      // try {
      //   if (searchText === null || searchText === '') {
      //     return;
      //   }
      //   const res = await client.query({
      //     query: query,
      //     variables: {
      //       cik: companyCIK
      //     },
      //     // pollInterval: 500
      //     refetchQueries: [{ query }]
      //   });

      // myContext.setSelectedCompany(res.data.getCompanyByCIK);
      // setLoading(false);
      // navigate('/info');
      // } catch (err) {
      //   console.error(err);
      // }

      try {
        const { res, error } = await getCompanyDataFromCIK(companyCIK);
        // console.log(data);
        if (error) throw error;
        myContext.setSelectedCompany(res.data.getCompanyByCIK);
        setLoading(false);
        navigate('/info');
      } catch (err) {
        console.error(err);
      }
    };

    fetchCompany();
  }, [searchText]);

  const handleInputChange = (e) => {
    setSearchText(e.value);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      ...style_prop,
      borderRadius: '20px !important',
      background: '#ffffff',
      // border: '0px!important',
      width: style_prop ? style_prop.width : '200px',

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
        ? '#3547AC'
        : '#F2F5FF',
      color: state.isFocused ? '#ffffff' : '#301772'
    }),
    menu: (provided) => ({
      ...provided,
      background: '#ffffff',

      color: '#152033'
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
    const companyCIK = `${searchText}`;
    /*const { loading, error, data } = useQuery(query, {
      variables: {
        cik: companyCIK
      },
      partialRefetch: true
    });*/
    //console.log(data);
    return (
      <div className="flex items-center flex-row justify-items-start gap-x-2 ">
        <FontAwesomeIcon icon={'search'} />
        Company
      </div>
    );
  };

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
        setSearchText('');
      }}
    >
      <div className="flex 1-p">
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
        {loading && <Loading />}
      </div>
    </ErrorBoundary>
  );
}
