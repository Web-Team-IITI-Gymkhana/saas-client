import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
      cta={
        <Button
          text="New Project"
          icon="plus"
          onClick={() => navigate('/app/dashboard')}
          iconClasses="text-gray-550 w-3 h-3"
          className="bg-black btn-sm gap-1 font-light"
        />
      }
    >
      <ExchangeRates />
    </DashboardLayout>
  )
}

export default Home
