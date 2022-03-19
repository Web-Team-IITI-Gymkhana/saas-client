import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparent } from 'daisyui/src/colors';
import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import client from '../../../apollo/index';
import { companyList } from '../../../utils/companies';
import { gql } from '@apollo/client';
import Context from '../../../context/context-config';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  const [Company, setCompany] = useState();
  const [searchText, setSearchText] = useState('');
  const myContext = useContext(Context);

  /*query getCompanyByCIK($cik: String!) {
          getCompanyByCIK(cik: $cik) {
            CompanyName
          }
  }*/

  useEffect(() => {
    const fetchCompany = async () => {
      const companyCIK = `${searchText}`;
      console.log(companyCIK);
      const query = gql`
        query getCompanyByCIK($cik: String!) {
          getCompanyByCIK(cik: $cik) {
            id
            CompanyName
            Address
            FaxNumber
            HoldingType
            PhoneNumber
            URL
            IPODate
            exchange
            ticker
            _10k {
              id
              DocURL
              FilingDate
              FilingForDate
              features {
                ARR
                CashAndCashEquivalents
                CostOfSales
                GAAPRevenue
                Goodwill
                GrossProfit
                GrossPropertyAndEquipment
                MRR
                MarketableSecurities
                NetIncome
                NetLoss
                NonGAAPEarnings
                OperatingIncome
                PropertyAndEquipmentNet
                RecurringRevenue
                Revenues
                SalesAndMarketing
                SharesOutstanding
                StockPrice
                TotalAssets
                TotalCurrentAssets
                TotalCurrentLiabilities
                TotalDebt
                TotalEquity
                TotalOperatingExpenses
                TotalStockholdersEquity
              }
              sec_filing {
                name
                url
              }
            }
            _10q {
              id
              DocURL
              FilingDate
              FilingForDate
              features {
                ARR
                CashAndCashEquivalents
                CostOfSales
                GAAPRevenue
                Goodwill
                GrossProfit
                GrossPropertyAndEquipment
                MRR
                MarketableSecurities
                NetIncome
                NetLoss
                NonGAAPEarnings
                OperatingIncome
                PropertyAndEquipmentNet
                RecurringRevenue
                Revenues
                SalesAndMarketing
                SharesOutstanding
                StockPrice
                TotalAssets
                TotalCurrentAssets
                TotalCurrentLiabilities
                TotalDebt
                TotalEquity
                TotalOperatingExpenses
                TotalStockholdersEquity
              }
              sec_filing {
                name
                url
              }
            }
          }
        }
      `;

      const res = await client.query({
        query: query,
        variables: {
          cik: companyCIK
        }
      });

      myContext.setSelectedCompany(res.data.getCompanyByCIK);
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
