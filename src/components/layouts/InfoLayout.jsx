import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress, Box, Typography } from '@mui/material';

const InfoLayout = ({ data }) => {
  const [progress, setProgress] = React.useState(0);
  const [color, setColor] = React.useState("red");

  const max_prog = 80;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress == max_prog ? max_prog : prevProgress + 2));
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-4/6 bg-saas-main ml-2 rounded-xl drop-shadow-sm p-6 hover:drop-shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="text-4xl text-saas-accent font-black">
            {data.CompanyName}
          </div>
          {data.URL != "NaN" ? <div className="flex flex-row pt-1">
            <div className='text-lg text-saas-primary'>
              <FontAwesomeIcon icon={'globe'} />
            </div>
            <div className="text-lg text-saas-primary pl-1">
              <a href={data.URL} target="_blank">Company Website</a>
            </div>
          </div> : null}
        </div>
        <div className='pr-10'>
          {data.HoldingType != "NaN" ? <div className="text-lg font-extrabold flex flex-row">
            <div className="text-saas-accent">Holding :</div>
            <div className="text-saas-primary pl-1">{data.HoldingType}</div>
          </div> : null}
          {data.Ticker != "NaN" ? <div className="text-lg font-extrabold flex flex-row">
            <div className="text-saas-accent">Stock Ticker :</div>
            <div className="text-saas-primary pl-1">{data.Ticker}</div>
          </div> : null}
          {data.Exchange != "NaN" ? <div className="text-lg font-extrabold flex flex-row">
            <div className="text-saas-accent">Exchange :</div>
            <div className="text-saas-primary pl-1">{data.Exchange}</div>
          </div> : null}
        </div>
      </div>
      {data.IPODate != "NaN" ? <div className="flex flex-row pt-5">
        <div className="text-xl py-0 text-saas-accent font-bold">
          IPO Date :
        </div>
        <div className="text-lg py-0.5 text-saas-primary font-semibold pl-2">
          {data.IPODate.split("T")[0]}
        </div>
      </div> : null}
      {data.Address != "NaN" ? <div className="flex flex-row pt-5">
        <div className="pt-2.5">
          <FontAwesomeIcon icon={'building'} className="pr-3 text-4xl" />
        </div>
        <div>
          <div className="text-lg py-0 text-saas-accent font-semibold">
            HeadQuarter Address
          </div>
          <div className="text-base py-0 text-saas-primary font-medium">
            {data.Address}
          </div>
        </div>
      </div> : null}
      {data.PhoneNumber != "NaN" ? <div className="flex flex-row pt-5">
        <div className="pt-2.5">
          <FontAwesomeIcon icon={'phone'} className="pr-3 text-4xl" />
        </div>
        <div>
          <div className="text-lg py-0 text-saas-accent font-semibold">
            Phone Number
          </div>
          <div className="text-base py-0 text-saas-primary font-medium">
            <a href={"tel:+" + data.PhoneNumber}>
              +{data.PhoneNumber}
            </a>
          </div>
        </div>
      </div> : null}
      {data.FaxNumber != "NaN" ? <div className="flex flex-row pt-5">
        <div className="pt-2.5">
          <FontAwesomeIcon icon={'fax'} className="pr-3 text-4xl" />
        </div>
        <div>
          <div className="text-lg py-0 text-saas-accent font-semibold">
            Fax Number
          </div>
          <div className="text-base py-0 text-saas-primary font-medium">
            <a href={"fax:" + data.FaxNumber}>
              + {data.FaxNumber}
            </a>
          </div>
        </div>
      </div> : null}
      <div className='flex flex-col pt-10'>
        <div className='text-2xl font-bold pl-2'>
          Score
        </div>
        <div className='flex flex-row pt-10'>
          <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" size={100} thickness={6} value={progress} style={{ color: "orange" }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className='text-lg font-black'>
                  {progress}
                </div>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
