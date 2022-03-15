import React from 'react'
import { useNavigate } from 'react-router-dom'
import Chart from '../Chart'
import PageTabs from '../PageTabs'
import DashboardLayout from '@/layouts/Dashboard'
import Button from '../base/atoms/Button'
import { gql, useQuery } from '@apollo/client';

function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

const Home= () => {
  const navigate = useNavigate()
  return (
    <DashboardLayout
      className="text-gray-100"
      description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
      cta={
        <Button
          text="New Project"
          icon="plus"
          onClick={() => navigate('/app/dashboard')}
          iconClasses="text-white-100 w-3 h-3 "
          className=" btn-sm gap-1 font-bold bg-saasselected "
        />
      }
    >
      <ExchangeRates />
      <div className="ml-10">
      <PageTabs />
      </div>
      <div className="flex justify-center h-full">
          
          <div className='h-3/5 flex w-11/12 jsutify-cenetr bg-gray-900'>
          <Chart />
          </div>
          </div>
    </DashboardLayout>
  )
}

export default Home
