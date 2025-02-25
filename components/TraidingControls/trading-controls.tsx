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
  ReceiptEuro,
  Coins,
  BarChart3,
  Euro,
  Gem,
  Clock,
  Star,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  SearchCheck
} from "lucide-react"

const symbols = {
  currencies: [
    "AUD_USD", "EUR_USD", "GBP_USD", "USD_JPY", "USD_CAD",
    "EUR_GBP", "EUR_JPY", "GBP_JPY", "NZD_USD", "USD_CHF",
    "USD_HKD", "USD_SGD", "USD_MXN", "USD_CNH", "USD_NOK",
    "USD_SEK", "USD_TRY", "USD_ZAR", "EUR_AUD", "EUR_CAD",
    "EUR_DKK", "EUR_HUF", "EUR_NOK", "EUR_NZD", "EUR_PLN",
    "EUR_SEK", "EUR_TRY", "GBP_AUD", "GBP_CAD", "GBP_CHF",
    "GBP_NZD", "AUD_CAD", "AUD_CHF", "AUD_JPY", "AUD_NZD"
  ],
  commodities: [
    "XAU_USD", "XAG_USD", "WTICO_USD", "BCO_USD", "NATGAS_USD",
    "COPPER_USD", "PLATINUM_USD", "PALLADIUM_USD"
  ],
  indices: [
    "US30_USD", "SPX500_USD", "NAS100_USD", "DE30_EUR", "UK100_GBP",
    "JP225_USD", "FR40_EUR", "AU200_AUD", "HK33_HKD", "CH20_CHF",
    "NL25_EUR", "SG30_SGD", "ESPIX_EUR", "CN50_USD"
  ],
  bonds: [
    "USB02Y_USD", "USB05Y_USD", "USB10Y_USD", "USB30Y_USD", "DE10YB_EUR",
    "UK10YB_GBP", "JP10YB_JPY"
  ],
  cfds: [
    "XCU_USD", "EU50_EUR", "HK33_HKD", "CH20_CHF", "AU200_AUD",
    "CORN_USD", "NL25_EUR", "SG30_SGD", "SOYBN_USD", "XPT_USD",
    "CHINAH_HKD", "US2000_USD", "ESPIX_EUR", "FR40_EUR", "WHEAT_USD",
    "CN50_USD", "JP225_USD", "SUGAR_USD", "UK10YB_GBP", "JP225Y_JPY",
    "COPPER_USD", "PLATINUM_USD", "PALLADIUM_USD"
  ]
}

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

  // (Optional) Filter logic if you want searching to affect the dropdown lists
  const filteredCurrencies = symbols.currencies.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const filteredCommodities = symbols.commodities.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const filteredIndices = symbols.indices.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const filteredBonds = symbols.bonds.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const filteredCFDs = symbols.cfds.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Asset
          </Button>
        </DropdownMenuTrigger>

        {/* --------------- Dropdown Content --------------- */}
        <DropdownMenuContent align="start" className="w-[320px] bg-white">
          {/* Search Bar */}
          <div className="p-2">
            <Input
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9"
            />
          </div>
          <DropdownMenuSeparator />

          {/* Recent Assets */}
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
                  <div className="font-medium">€{asset.price}</div>
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

          {/* --------------- Categories --------------- */}
          <DropdownMenuGroup>
            {/* Stocks */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100">
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
                        <div className="font-medium">€{asset.price}</div>
                        <div
                          className={`text-xs ${
                            asset.change >= 0 ? "text-green-500" : "text-red-500"
                          }`}
                        >
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

            {/* Crypto */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100">
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

            {/* Forex (from JSON -> symbols.currencies) */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100">
                <Euro className="mr-2 h-4 w-4" />
                Forex
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white max-h-[200px] overflow-y-auto">
                  {filteredCurrencies.map((symbol) => (
                    <DropdownMenuItem key={symbol}>{symbol}</DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Forex
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            {/* Bonds (from JSON -> symbols.bonds) */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100">
                <ReceiptEuro className="mr-2 h-4 w-4" />
                Bonds
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white max-h-[200px] overflow-y-auto">
                  {filteredBonds.map((bond) => (
                    <DropdownMenuItem key={bond}>{bond}</DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Bonds
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            {/* Indices (from JSON -> symbols.indices) */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100">
                <SearchCheck className="mr-2 h-4 w-4" />
                Indices
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white max-h-[200px] overflow-y-auto">
                  {filteredIndices.map((index) => (
                    <DropdownMenuItem key={index}>{index}</DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Indices
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            {/* Commodities (from JSON -> symbols.commodities) */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100">
                <Gem className="mr-2 h-4 w-4" />
                Commodities
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white max-h-[200px] overflow-y-auto">
                  {filteredCommodities.map((commodity) => (
                    <DropdownMenuItem key={commodity}>{commodity}</DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All Commodities
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            {/* Example: CFDs (from JSON -> symbols.cfds) - add if needed */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100">
                <BarChart3 className="mr-2 h-4 w-4" />
                CFDs
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white max-h-[200px] overflow-y-auto">
                  {filteredCFDs.map((cfd) => (
                    <DropdownMenuItem key={cfd}>{cfd}</DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="flex items-center text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View All CFDs
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialog example remains the same */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-gray-100 border-2">
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
              <div className="text-right text-green-500">€1,925.30</div>
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
