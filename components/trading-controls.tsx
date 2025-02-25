"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Plus,
  TrendingUp,
  Search,
  Coins,
  BarChart3,
  DollarSign,
  Gem,
  Clock,
  Star,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

// Mock data for recent and popular assets
const recentAssets = [
  { symbol: "AAPL", name: "Apple Inc.", price: 185.92, change: 1.25 },
  { symbol: "BTC", name: "Bitcoin", price: 42156.78, change: -2.3 },
  { symbol: "ETH", name: "Ethereum", price: 2284.15, change: 0.75 },
]

const popularAssets = [
  { symbol: "TSLA", name: "Tesla Inc.", price: 245.67, change: 3.2 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 476.25, change: 2.1 },
  { symbol: "AMZN", name: "Amazon.com", price: 156.92, change: -0.8 },
]

export function TradingControls() {
  const [searchQuery, setSearchQuery] = React.useState("")

  return (
    <div className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Asset
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[320px] bg-white">
          <div className="p-2">
            <Input
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9"
              // icon={<Search className="h-4 w-4" />}
            />
          </div>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel className="flex items-center">
              <Clock className="mr-2 h-4 w-4" /> Recent
            </DropdownMenuLabel>
            {recentAssets.map((asset) => (
              <DropdownMenuItem key={asset.symbol} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="ml-2">
                    <div className="font-medium">{asset.symbol}</div>
                    <div className="text-xs text-muted-foreground">{asset.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${asset.price}</div>
                  <div className={`text-xs ${asset.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {asset.change >= 0 ? (
                      <ArrowUpRight className="inline h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="inline h-3 w-3" />
                    )}
                    {Math.abs(asset.change)}%
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          {/* Asset Categories */}
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <BarChart3 className="mr-2 h-4 w-4" />
                Stocks
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="w-[320px] bg-white">
                  <DropdownMenuLabel className="flex items-center">
                    <Star className="mr-2 h-4 w-4" /> Popular Stocks
                  </DropdownMenuLabel>
                  {popularAssets.map((asset) => (
                    <DropdownMenuItem key={asset.symbol} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="ml-2">
                          <div className="font-medium">{asset.symbol}</div>
                          <div className="text-xs text-muted-foreground">{asset.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${asset.price}</div>
                        <div className={`text-xs ${asset.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {asset.change >= 0 ? (
                            <ArrowUpRight className="inline h-3 w-3" />
                          ) : (
                            <ArrowDownRight className="inline h-3 w-3" />
                          )}
                          {Math.abs(asset.change)}%
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Stocks
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Coins className="mr-2 h-4 w-4" />
                Crypto
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white">
                  <DropdownMenuItem>Bitcoin (BTC)</DropdownMenuItem>
                  <DropdownMenuItem>Ethereum (ETH)</DropdownMenuItem>
                  <DropdownMenuItem>Binance Coin (BNB)</DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-muted-foreground ">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Crypto
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub >
              <DropdownMenuSubTrigger >
                <DollarSign className="mr-2 h-4 w-4" />
                Forex
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal >
                <DropdownMenuSubContent className="bg-white">
                  <DropdownMenuItem>EUR/USD</DropdownMenuItem>
                  <DropdownMenuItem>GBP/USD</DropdownMenuItem>
                  <DropdownMenuItem>USD/JPY</DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Forex
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Gem className="mr-2 h-4 w-4" />
                Commodities
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white">
                  <DropdownMenuItem>Gold</DropdownMenuItem>
                  <DropdownMenuItem>Silver</DropdownMenuItem>
                  <DropdownMenuItem>Crude Oil</DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Commodities
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <TrendingUp className="mr-2 h-4 w-4" />
            P/L Details
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white">Profit/Loss Summary</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="text-sm font-medium text-white">Total Profit</div>
              <div className="text-right text-green-500">$1,925.30</div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="text-sm font-medium text-white">Win Ratio</div>
              <div className="text-right text-green-500">+2.3%</div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="text-sm font-medium text-white">Total Trades</div>
              <div className="text-right text-green-500">120</div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="text-sm font-medium text-white">Active Positions</div>
              <div className="text-right text-red-600">5</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

