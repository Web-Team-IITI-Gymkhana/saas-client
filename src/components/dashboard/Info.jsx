import React from 'react';
import InfoLayout from '../layouts/InfoLayout';

import { DataFormatter } from '../../utils/DataFormatter';

const df = new DataFormatter('1459417');
const meta_data = df.getCompanyMetaData();

function Info(props) {
  return <InfoLayout data={meta_data} />;
}

export default Info;
