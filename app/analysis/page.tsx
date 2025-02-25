"use client";
import React, { useState } from 'react'

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
import { TradingControls } from '@/components/TraidingControls/trading-controls';

const topAssets = [
  {
    rank: 1,
    rankChange: "No Change",
    username: "DeepAlgo",
    profitLoss: "£15,500",
    winRate: "90%",
    trades: 130,
    risk: "1%"
  },
  {
    rank: 2,
    rankChange: "-2",
    username: "TraderX",
    profitLoss: "£12,350",
    winRate: "88%",
    trades: 120,
    risk: "2%"
  },
  {
    rank: 3,
    rankChange: "+1",
    username: "PipMaster",
    profitLoss: "£9,270",
    winRate: "86%",
    trades: 98,
    risk: "2%"
  },
  {
    rank: 4,
    rankChange: "+2",
    username: "FXWarrior",
    profitLoss: "£7,880",
    winRate: "85%",
    trades: 110,
    risk: "1%"
  },
  {
    rank: 5,
    rankChange: "+1",
    username: "MarketMogul",
    profitLoss: "£5,560",
    winRate: "84%",
    trades: 85,
    risk: "3%"
  },
  {
    rank: 6,
    rankChange: "-2",
    username: "TradeTitan",
    profitLoss: "£4,800",
    winRate: "83%",
    trades: 75,
    risk: "1%"
  },
  {
    rank: 7,
    rankChange: "-1",
    username: "BullBear",
    profitLoss: "£3,750",
    winRate: "82%",
    trades: 60,
    risk: "2%"
  },
  {
    rank: 8,
    rankChange: "+2",
    username: "RiskReaper",
    profitLoss: "£2,100",
    winRate: "81%",
    trades: 55,
    risk: "3%"
  },
  {
    rank: 9,
    rankChange: "+2",
    username: "TrendHunter",
    profitLoss: "£1,250",
    winRate: "81%",
    trades: 45,
    risk: "1%"
  },
  {
    rank: 10,
    rankChange: "+3",
    username: "AlgoKing",
    profitLoss: "-£500",
    winRate: "80.50%",
    trades: 40,
    risk: "3%"
  },
  {
    rank: 11,
    rankChange: "-3",
    username: "VolatilityViper",
    profitLoss: "-£1,200",
    winRate: "80.20%",
    trades: 30,
    risk: "1%"
  }
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


interface RankChangeIndicatorProps {
  rankChange: string;
}

function getRankChangeIndicator({ rankChange }: RankChangeIndicatorProps) {
  if (rankChange.startsWith("+")) {
    const numericPart = rankChange.replace("+", "").trim();
    return (
      <span className='text-emerald-600' style={{ display: "inline-flex", alignItems: "center" }}>
        &#x25B2; 
        &nbsp;{numericPart}
      </span>
    );
  } 
  else if (rankChange.startsWith("-")) {
    const numericPart = rankChange.replace("-", "").trim();
    return (
      <span style={{ color: "red", display: "inline-flex", alignItems: "center" }}>
        &#x25BC;
        &nbsp;{numericPart}
      </span>
    );
  } 
  else if (rankChange.includes("No Change") || rankChange === "0") {
    return (
      <span className='text-emerald-600' style={{ display: "inline-flex", alignItems: "center" }}>
        No Change
      </span>
    );
  } 
  else {
    return <span>{rankChange}</span>;
  }
}


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
      <TradingControls />   
    <div className='pr-[5px]'>
        <button
          className={`w-40 h-12 border-2 rounded-lg ${
            isActive ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
          onClick={clickHandler}
        >
          {isActive ? "Stop Traiding" : "Start Traiding"}
        </button></div>
    </div>
    <div className='my-10 flex flex-col gap-10 items-center justify-center'>
        <Card>
          <CardContent className='p-0'>
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
                          <TableHead>Rank Change</TableHead>
                          <TableHead>User Name</TableHead>
                          <TableHead>Profit/Loss $</TableHead>
                          <TableHead>Win Ratio (%)</TableHead>
                          <TableHead>Trades</TableHead>
                          <TableHead>Risk</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {topAssets.map((asset) => (
                          <TableRow key={asset.rank}>
                            <TableCell>{asset.rank}</TableCell>

                            {/* Here’s where we call the utility function */}
                            <TableCell>{getRankChangeIndicator({ rankChange: asset.rankChange })}</TableCell>

                            <TableCell>{asset.username}</TableCell>
                            <TableCell className="text-emerald-600">
                              {asset.profitLoss}
                            </TableCell>
                            <TableCell>{asset.winRate}</TableCell>
                            <TableCell>{asset.trades}</TableCell>
                            <TableCell>{asset.risk}</TableCell>
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
          </CardContent>
        </Card>
      </div>
    
    </>
  );
}
