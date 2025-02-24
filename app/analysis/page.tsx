"use client";

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
import { useState } from "react";
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


const topAssets = [
  {
    rank: 1,
    name: "Gold Bullion",
    value: "$1925.30",
    change: "+2.3%",
    type: "Gold",
  },
  {
    rank: 2,
    name: "Shariah REITs",
    value: "$452.80",
    change: "+1.8%",
    type: "Islamic Finance",
  },
  {
    rank: 3,
    name: "Gold ETF",
    value: "$185.40",
    change: "+1.5%",
    type: "Gold",
  },
  {
    rank: 4,
    name: "Sukuk Bonds",
    value: "$325.60",
    change: "+1.2%",
    type: "Islamic Finance",
  },
  {
    rank: 5,
    name: "Gold Mining Stocks",
    value: "$78.90",
    change: "+1.0%",
    type: "Gold",
  },
  {
    rank: 6,
    name: "Shariah Mutual Funds",
    value: "$245.70",
    change: "+0.9%",
    type: "Islamic Finance",
  },
  {
    rank: 7,
    name: "Gold Futures",
    value: "$1920.50",
    change: "+0.7%",
    type: "Gold",
  },
  {
    rank: 8,
    name: "Shariah-Compliant Stocks",
    value: "$156.30",
    change: "+0.6%",
    type: "Islamic Finance",
  },
  {
    rank: 9,
    name: "Gold Options",
    value: "$45.20",
    change: "+0.4%",
    type: "Gold",
  },
  {
    rank: 10,
    name: "Islamic ETFs",
    value: "$89.40",
    change: "+0.3%",
    type: "Islamic Finance",
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

export default function Dashboard() {

  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive(!isActive);
  };


  return (
    <div className="p-8 bg-[#fafafa] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center font-serif">
        Gold & Finance Assets Analysis
      </h1>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Asset Name</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Type</TableHead>
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
            <CardTitle>Monthly Performance Comparison</CardTitle>
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

        <div className='flex flex-col gap-10 items-center justify-center'>
          <button
            className={`w-40 h-12 border-2 border-[#e9d4b9] rounded-lg ${
              isActive ? "bg-red-600 text-white" : "bg-green-500 text-white"
            }`}
            onClick={clickHandler}
          >
            {isActive ? "Stop" : "Start"}
          </button>
          <Card className=''>
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
    </div>
  );
}
