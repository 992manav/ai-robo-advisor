export const Currency = {
  USD: "USD",
  EUR: "EUR",
  JPY: "JPY",
  GBP: "GBP",
  CAD: "CAD",
  AUD: "AUD",
  CHF: "CHF",
} as const;

export type Currency = typeof Currency[keyof typeof Currency];

export const StockExchange = {
  NYSE: "NYSE",
  NASDAQ: "NASDAQ",
  LSE: "LSE",
  EURONEXT: "EURONEXT",
  TSE: "TSE",
  TSX: "TSX",
  ASX: "ASX",
  SIX: "SIX",
  BORSA_ITALIANA: "BORSA_ITALIANA",
} as const;

export type StockExchange = typeof StockExchange[keyof typeof StockExchange];

export const InvestmentGoal = {
  RETIREMENT: "Retirement",
  WEALTH_BUILDING: "Wealth Building",
  INCOME_GENERATION: "Income Generation",
  CAPITAL_PRESERVATION: "Capital Preservation",
  EDUCATION_FUNDING: "Education Funding",
  HOUSE_PURCHASE: "House Purchase",
  EMERGENCY_FUND: "Emergency Fund",
  SHORT_TERM_SAVINGS: "Short Term Savings",
} as const;

export type InvestmentGoal = typeof InvestmentGoal[keyof typeof InvestmentGoal];

export const RiskProfile = {
  ULTRA_CONSERVATIVE: "Ultra Conservative",
  CONSERVATIVE: "Conservative",
  MODERATE_CONSERVATIVE: "Moderate Conservative",
  MODERATE: "Moderate",
  MODERATE_AGGRESSIVE: "Moderate Aggressive",
  AGGRESSIVE: "Aggressive",
  ULTRA_AGGRESSIVE: "Ultra Aggressive",
} as const;

export type RiskProfile = typeof RiskProfile[keyof typeof RiskProfile];

export const InvestmentHorizon = {
  SHORT_TERM: "Short Term (1-3 years)",
  MEDIUM_TERM: "Medium Term (3-7 years)",
  LONG_TERM: "Long Term (7-15 years)",
  VERY_LONG_TERM: "Very Long Term (15+ years)",
} as const;

export type InvestmentHorizon = typeof InvestmentHorizon[keyof typeof InvestmentHorizon];

export interface PortfolioPreference {
  goal: InvestmentGoal;
  risk_profile: RiskProfile;
  investment_horizon: InvestmentHorizon;
  currency: Currency;
  stock_exchange: StockExchange;
  initial_investment: number;
}

export interface AssetAllocation {
  stocks_percentage?: number;
  bonds_percentage?: number;
  real_estate_percentage?: number;
  commodities_percentage?: number;
  cryptocurrency_percentage?: number;
  cash_percentage?: number;
}

export interface Region {
  region: string;
  weight: number;
}

export interface GeographicalDiversification {
  regions: Region[];
}

export interface Sector {
  sector: string;
  weight: number;
}

export interface SectorDiversification {
  sectors: Sector[];
}

export interface Strategy {
  name: string;
  description?: string;
  asset_allocation: AssetAllocation;
  geographical_diversification: GeographicalDiversification;
  sector_diversification: SectorDiversification;
  stock_exchange: StockExchange;
  risk_tolerance: string;
  time_horizon: string;
  expected_returns: string;
}

export interface Holding {
  symbol: string;
  name: string;
  isin: string;
  asset_class: string;
  weight: number;
}

export interface Portfolio {
  name: string;
  holdings: Holding[];
  strategy: Strategy;
}

export interface AnalysisResponse {
  is_approved: boolean;
  strengths?: string;
  weeknesses?: string;
  overall_assessment?: string;
  advices?: string;
}

export interface AdvisorResult {
  portfolio: Portfolio;
  analysis: {
    summary: AnalysisResponse;
  };
}

export interface LLMModel {
  provider: string;
  model_name: string;
  display_name: string;
}

export interface AdvisorRequest {
  preferences: PortfolioPreference;
  investment_model: string;
  portfolio_model: string;
  analyst_model: string;
}
