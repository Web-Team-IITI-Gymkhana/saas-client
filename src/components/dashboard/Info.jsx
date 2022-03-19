import React, { useContext } from 'react';
import InfoLayout from '../layouts/InfoLayout';
import Context from '../../context/context-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Info = (props) => {
  const myContext = useContext(Context);
  const curCompany = myContext.selectedCompany;
  const meta_data = {
    Address: curCompany['Address'],
    CompanyName: curCompany['CompanyName'],
    FaxNumber: curCompany['FaxNumber'],
    HoldingType: curCompany['HoldingType'],
    IPODate: curCompany['IPODate'],
    PhoneNumber: curCompany['PhoneNumber'],
    URL: curCompany['URL'],
    Ticker: curCompany['ticker'],
    Exchange: curCompany['exchange']
  };

  return <InfoLayout data={meta_data} />;
};

export default Info;
