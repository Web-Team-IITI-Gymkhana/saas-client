import React, { useContext } from 'react';
import Main from '../folder/Main';
import Context from '../../context/context-config';

function SecFilling(props) {
  const myContext = useContext(Context);
  const Company = myContext.selectedCompany;

  if (!Company) {
    return <div>No Company Selected</div>;
  }
  if (
    !Company._10k ||
    !Company._10q ||
    Company._10k.length === 0 ||
    Company._10q.length === 0
  ) {
    return <div>No Data Available</div>;
  }
  return (
    <div className="flex flex-col h-full  ml-2 rounded-xl ">
      <Main Company={Company} />
    </div>
  );
}

export default SecFilling;
