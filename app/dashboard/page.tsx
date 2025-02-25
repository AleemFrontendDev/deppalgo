"use client";
import SelectBroker from '@/components/SelectBroker/SelectBroker'
import React from 'react'




const Dashboard = () => {
 

 
  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col items-center justify-center'>
        <SelectBroker />
        <h2 className="mt-[3rem] text-lg text-black-600 tracking-wide-[0.090rem]">
        Automated • Intelligent • Profitable • Deep Algo Trading
      </h2>
      </div>
      
    </div>
  );
};

export default Dashboard;
