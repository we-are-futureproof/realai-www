"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, DollarSign, Clock, Users, Target } from "lucide-react"

interface CalculatorInputs {
  numAgents: number
  agentHourlyValue: number
  avgCommission: number
  currentConversionRate: number
  adminHoursPerWeek: number
  currentResponseTime: number
  monthlyAdminCost: number
  tier: "starter" | "pro" | "enterprise"
}

interface ROIResults {
  totalInvestment: number
  annualTimeSavings: number
  annualRevenueincrease: number
  annualCostReduction: number
  totalAnnualBenefit: number
  roi: number
  paybackMonths: number
  monthlyBenefit: number
}

const tierPricing = {
  starter: { implementation: 15000, monthly: 500 },
  pro: { implementation: 25000, monthly: 750 },
  enterprise: { implementation: 50000, monthly: 1200 }
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    numAgents: 25,
    agentHourlyValue: 75,
    avgCommission: 7500,
    currentConversionRate: 15,
    adminHoursPerWeek: 8,
    currentResponseTime: 60,
    monthlyAdminCost: 3000,
    tier: "pro"
  })

  const [results, setResults] = useState<ROIResults>({
    totalInvestment: 0,
    annualTimeSavings: 0,
    annualRevenueincrease: 0,
    annualCostReduction: 0,
    totalAnnualBenefit: 0,
    roi: 0,
    paybackMonths: 0,
    monthlyBenefit: 0
  })

  useEffect(() => {
    calculateROI()
  }, [inputs])

  const calculateROI = () => {
    const pricing = tierPricing[inputs.tier]
    
    // Total Investment (implementation + first year monthly costs)
    const totalInvestment = pricing.implementation + (pricing.monthly * 12)
    
    // Time Savings Calculation
    const hoursReducedPerWeek = inputs.adminHoursPerWeek * 0.7 // 70% reduction
    const annualTimeSavings = hoursReducedPerWeek * 52 * inputs.numAgents * inputs.agentHourlyValue
    
    // Revenue Increase from better conversion
    const conversionImprovement = 0.25 // 25% improvement in conversion rate
    const improvedConversionRate = inputs.currentConversionRate * (1 + conversionImprovement)
    const additionalDeals = (improvedConversionRate - inputs.currentConversionRate) / 100 * inputs.numAgents * 20 // assume 20 leads per agent per month
    const annualRevenueincrease = additionalDeals * 12 * inputs.avgCommission
    
    // Cost Reduction (admin staff savings + marketing efficiency)
    const adminStaffReduction = inputs.monthlyAdminCost * 0.4 * 12 // 40% reduction
    const marketingEfficiency = inputs.numAgents * 200 * 12 // $200/month per agent in marketing efficiency
    const annualCostReduction = adminStaffReduction + marketingEfficiency
    
    // Total Benefits
    const totalAnnualBenefit = annualTimeSavings + annualRevenueincrease + annualCostReduction
    const monthlyBenefit = totalAnnualBenefit / 12
    
    // ROI Calculation
    const netAnnualBenefit = totalAnnualBenefit - (pricing.monthly * 12)
    const roi = (netAnnualBenefit / totalInvestment) * 100
    
    // Payback Period
    const paybackMonths = totalInvestment / (monthlyBenefit - pricing.monthly)
    
    setResults({
      totalInvestment,
      annualTimeSavings,
      annualRevenueincrease,
      annualCostReduction,
      totalAnnualBenefit,
      roi,
      paybackMonths,
      monthlyBenefit
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(1)}%`
  }

  return (
    <div className="space-y-8">
      {/* Calculator Header */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calculator className="w-8 h-8 text-blue-600" />
            RealAI ROI Calculator
          </CardTitle>
          <p className="text-slate-600">Enter your brokerage details to calculate potential returns</p>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Brokerage Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Service Tier */}
            <div className="space-y-2">
              <Label htmlFor="tier">Service Tier</Label>
              <Select value={inputs.tier} onValueChange={(value) => setInputs({...inputs, tier: value as any})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">Starter - $15K + $500/mo</SelectItem>
                  <SelectItem value="pro">Pro - $25K + $750/mo</SelectItem>
                  <SelectItem value="enterprise">Enterprise - $50K + $1,200/mo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number of Agents */}
            <div className="space-y-3">
              <Label htmlFor="numAgents">Number of Agents: {inputs.numAgents}</Label>
              <Slider
                value={[inputs.numAgents]}
                onValueChange={([value]) => setInputs({...inputs, numAgents: value})}
                max={100}
                min={5}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>5</span>
                <span>100</span>
              </div>
            </div>

            {/* Agent Hourly Value */}
            <div className="space-y-3">
              <Label htmlFor="agentHourlyValue">Agent Hourly Value: ${inputs.agentHourlyValue}</Label>
              <Slider
                value={[inputs.agentHourlyValue]}
                onValueChange={([value]) => setInputs({...inputs, agentHourlyValue: value})}
                max={200}
                min={25}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>$25</span>
                <span>$200</span>
              </div>
            </div>

            {/* Average Commission */}
            <div className="space-y-2">
              <Label htmlFor="avgCommission">Average Commission per Transaction</Label>
              <Input
                type="number"
                value={inputs.avgCommission}
                onChange={(e) => setInputs({...inputs, avgCommission: parseInt(e.target.value) || 0})}
                placeholder="7500"
              />
            </div>

            {/* Current Conversion Rate */}
            <div className="space-y-3">
              <Label htmlFor="currentConversionRate">Current Lead Conversion Rate: {inputs.currentConversionRate}%</Label>
              <Slider
                value={[inputs.currentConversionRate]}
                onValueChange={([value]) => setInputs({...inputs, currentConversionRate: value})}
                max={30}
                min={5}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Admin Hours per Week */}
            <div className="space-y-3">
              <Label htmlFor="adminHoursPerWeek">Admin Hours per Agent per Week: {inputs.adminHoursPerWeek}</Label>
              <Slider
                value={[inputs.adminHoursPerWeek]}
                onValueChange={([value]) => setInputs({...inputs, adminHoursPerWeek: value})}
                max={20}
                min={2}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>2 hrs</span>
                <span>20 hrs</span>
              </div>
            </div>

            {/* Monthly Admin Cost */}
            <div className="space-y-2">
              <Label htmlFor="monthlyAdminCost">Current Monthly Admin Staff Cost</Label>
              <Input
                type="number"
                value={inputs.monthlyAdminCost}
                onChange={(e) => setInputs({...inputs, monthlyAdminCost: parseInt(e.target.value) || 0})}
                placeholder="3000"
              />
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              ROI Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{formatPercentage(results.roi)}</div>
                <div className="text-sm text-green-700">ROI (Year 1)</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{results.paybackMonths.toFixed(1)}</div>
                <div className="text-sm text-blue-700">Payback (Months)</div>
              </div>
            </div>

            {/* Investment Breakdown */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-red-600" />
                Total Investment (Year 1)
              </h4>
              <div className="bg-red-50 p-3 rounded">
                <div className="text-lg font-semibold text-red-600">{formatCurrency(results.totalInvestment)}</div>
                <div className="text-sm text-red-700">
                  Implementation: {formatCurrency(tierPricing[inputs.tier].implementation)}<br/>
                  Annual Support: {formatCurrency(tierPricing[inputs.tier].monthly * 12)}
                </div>
              </div>
            </div>

            {/* Benefits Breakdown */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Annual Benefits
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <div>
                    <div className="font-medium text-green-700">Time Savings</div>
                    <div className="text-sm text-green-600">70% admin reduction</div>
                  </div>
                  <div className="text-green-600 font-semibold">{formatCurrency(results.annualTimeSavings)}</div>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <div>
                    <div className="font-medium text-blue-700">Revenue Increase</div>
                    <div className="text-sm text-blue-600">25% conversion improvement</div>
                  </div>
                  <div className="text-blue-600 font-semibold">{formatCurrency(results.annualRevenueincrease)}</div>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <div>
                    <div className="font-medium text-purple-700">Cost Reduction</div>
                    <div className="text-sm text-purple-600">Staff + marketing efficiency</div>
                  </div>
                  <div className="text-purple-600 font-semibold">{formatCurrency(results.annualCostReduction)}</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-slate-100 rounded border-2 border-slate-300">
                  <div className="font-semibold text-slate-700">Total Annual Benefit</div>
                  <div className="text-xl font-bold text-slate-700">{formatCurrency(results.totalAnnualBenefit)}</div>
                </div>
              </div>
            </div>

            {/* Monthly Impact */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-slate-700">Monthly Impact</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{formatCurrency(results.monthlyBenefit)}</div>
              <div className="text-sm text-slate-600">Average monthly benefit</div>
            </div>

            {/* ROI Badge */}
            {results.roi > 200 && (
              <div className="text-center">
                <Badge className="bg-green-600 text-white px-4 py-2 text-lg">
                  Excellent ROI - Highly Recommended
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Brokerage?</h3>
          <p className="text-blue-100 mb-6">
            These projections are based on conservative estimates. Many clients see even better results.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4" asChild>
            <a href="/discovery">Schedule Your Discovery Call</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}