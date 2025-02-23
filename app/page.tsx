import SelectBroker from '@/components/SelectBroker/SelectBroker'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full flex flex-col items-center justify-center'>
          <SelectBroker/>
        </div>
    </div>
  )
}

export default Home