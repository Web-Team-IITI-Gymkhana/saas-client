import React, { useContext } from 'react';
import InfoLayout from '../layouts/InfoLayout';
import Context from '../../context/context-config';

import { DataFormatter } from '../../utils/DataFormatter';

const Info = (props) => {

  const myContext = useContext(Context)
  const curCompany = myContext.selectedCompany
  console.log(curCompany)

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
  }

  return <InfoLayout data={meta_data} />;
}

export default Info;
