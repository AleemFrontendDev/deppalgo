"use client";
import React, { useState } from 'react'
import lines from "@/public/lines.svg"
import Image from 'next/image';

import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TradingControls } from '@/components/trading-controls';

const topAssets = [
  {
    rank: 1,
    name: "Jack",
    value: "$1925.30",
    change: "+2.3%",
    type: "120",
  },
  {
    rank: 2,
    name: "Smith",
    value: "$452.80",
    change: "+1.8%",
    type: "98",
  },
  {
    rank: 3,
    name: "Dorsel",
    value: "$185.40",
    change: "+1.5%",
    type: "67",
  },
  {
    rank: 4,
    name: "Sukuk",
    value: "$325.60",
    change: "+1.2%",
    type: "49",
  },
  {
    rank: 5,
    name: "Jamson J.",
    value: "$78.90",
    change: "+1.0%",
    type: "77",
  },
  {
    rank: 6,
    name: "Alex",
    value: "$245.70",
    change: "+0.9%",
    type: "127",
  },
  {
    rank: 7,
    name: "Alesa M.",
    value: "$1920.50",
    change: "+0.7%",
    type: "85",
  },
  {
    rank: 8,
    name: "Saim jacob",
    value: "$156.30",
    change: "+0.6%",
    type: "103",
  },
  {
    rank: 9,
    name: "Good Jone",
    value: "$45.20",
    change: "+0.4%",
    type: "106",
  },
  {
    rank: 10,
    name: "Gorge",
    value: "$89.40",
    change: "+0.3%",
    type: "107",
  },
];

const monthlyData = [
  { month: "Jan", gold: 1850, islamic: 2200 },
  { month: "Feb", gold: 1890, islamic: 2300 },
  { month: "Mar", gold: 1920, islamic: 2250 },
  { month: "Apr", gold: 1950, islamic: 2400 },
  { month: "May", gold: 1930, islamic: 2350 },
  { month: "Jun", gold: 1960, islamic: 2500 },
];

const performanceData = [
  { category: "Gold", performance: 85 },
  { category: "Sukuk", performance: 72 },
  { category: "Shariah REITs", performance: 68 },
  { category: "Islamic ETFs", performance: 64 },
  { category: "Gold Mining", performance: 58 },
];
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

export default function Dashboard() {
  const [isActive, setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
    <div className='flex items-center justify-between px-12'>
      <TradingControls />   <div className='pr-[5px]'><button
          className={`w-40 h-12 border-2 border-[#e9d4b9] rounded-lg ${
            isActive ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
          onClick={clickHandler}
        >
          {isActive ? "Stop" : "Start"}
        </button></div>
    </div>
    <div className='my-10 flex flex-col gap-10 items-center justify-center'>
        <Card>
          <CardContent className='p-0'>
            {isActive ? (
              <div className="p-6 bg-[#fafafa] min-h-screen">
              <h1 className="text-3xl font-bold mb-6 text-center ">
                Leader Board
              </h1>
        
              <div className="mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Top 10 Rankings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Rank</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Profit/Loss $</TableHead>
                          <TableHead>Win Ratio (%)</TableHead>
                          <TableHead>Trades</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {topAssets.map((asset) => (
                          <TableRow key={asset.rank}>
                            <TableCell>{asset.rank}</TableCell>
                            <TableCell>{asset.name}</TableCell>
                            <TableCell>{asset.value}</TableCell>
                            <TableCell className="text-emerald-600">
                              {asset.change}
                            </TableCell>
                            <TableCell>{asset.type}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
        
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Performance Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        gold: {
                          label: "Gold Assets",
                          color: "hsl(24, 100%, 50%)",
                        },
                        islamic: {
                          label: "Finance Assets ",
                          color: "hsl(16, 100%, 50%)",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <LineChart
                        data={monthlyData}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="gold"
                          stroke="var(--color-gold)"
                        />
                        <Line
                          type="monotone"
                          dataKey="islamic"
                          stroke="var(--color-islamic)"
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
        
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Asset Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        performance: {
                          label: "Performance Score",
                          color: "hsl(24, 100%, 50%)",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <BarChart
                        data={performanceData}
                        layout="vertical"
                        margin={{ top: 20, right: 20, bottom: 20, left: 100 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="category" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="performance" fill="var(--color-performance)" />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
            ) : (
              <div className="relative flex items-center justify-center h-screen w-[1250px] text-lg text-gray-500">
                Press start button to display analysis
                <div className='hello absolute bottom-0 w-full -z-10'>
                    <Image src={lines} alt='' width={100}  height={100} className='w-full h-full object-cover filter invert opacity-50' />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    
    </>
  );
}
