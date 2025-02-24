"use client";
import SelectBroker from '@/components/SelectBroker/SelectBroker'
import React, { useState } from 'react'

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import lines from "@/public/lines.svg"
import Image from 'next/image';

const chartData = [
  { month: "Gold", desktop: 186, mobile: 80 },
  { month: "Sukuk", desktop: 305, mobile: 200 },
  { month: "Shariah", desktop: 237, mobile: 120 },
  { month: "Islamic", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "JunGolde", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col items-center justify-center'>
        <SelectBroker />
      </div>
      <div className='mt-10 p-10 flex flex-col gap-10 items-center justify-center'>
        <button
          className={`w-40 h-12 border-2 border-[#e9d4b9] rounded-lg ${
            isActive ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
          onClick={clickHandler}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <Card className='w-[800px] p-5'>
          <CardContent>
            {isActive ? (
              <ChartContainer config={chartConfig}>
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="desktop" fill="#f15200" radius={4} />
                  <Bar dataKey="mobile" fill="#e8c468" radius={4} />
                </BarChart>
              </ChartContainer>
            ) : (
              <div className="relative flex items-center justify-center h-96 text-lg text-gray-500">
                Press start button to display analysis
                <div className='hello absolute bottom-0 w-full -z-10'>
                  <Image src={lines} alt='' width={100}  height={100} className='w-full h-full object-cover filter invert opacity-50' />
              </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
