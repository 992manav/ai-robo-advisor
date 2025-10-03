import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  InvestmentGoal,
  RiskProfile,
  InvestmentHorizon,
  Currency,
  StockExchange,
  type PortfolioPreference,
} from '@/types';
import { ChevronRight } from 'lucide-react';

export function Analyze() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<PortfolioPreference>>({
    currency: Currency.USD,
    stock_exchange: StockExchange.NYSE,
    initial_investment: 10000,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/results', { state: { preferences: formData } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Your Investment Strategy
          </h1>
          <p className="text-gray-600 mb-8">
            Answer a few questions to receive personalized portfolio recommendations
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Goal
              </label>
              <select
                required
                value={formData.goal}
                onChange={(e) =>
                  setFormData({ ...formData, goal: e.target.value as InvestmentGoal })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your investment goal</option>
                {Object.values(InvestmentGoal).map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk Profile
              </label>
              <select
                required
                value={formData.risk_profile}
                onChange={(e) =>
                  setFormData({ ...formData, risk_profile: e.target.value as RiskProfile })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your risk tolerance</option>
                {Object.values(RiskProfile).map((profile) => (
                  <option key={profile} value={profile}>
                    {profile}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Horizon
              </label>
              <select
                required
                value={formData.investment_horizon}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    investment_horizon: e.target.value as InvestmentHorizon,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your time horizon</option>
                {Object.values(InvestmentHorizon).map((horizon) => (
                  <option key={horizon} value={horizon}>
                    {horizon}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                <select
                  required
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value as Currency })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {Object.values(Currency).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Exchange
                </label>
                <select
                  required
                  value={formData.stock_exchange}
                  onChange={(e) =>
                    setFormData({ ...formData, stock_exchange: e.target.value as StockExchange })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {Object.values(StockExchange).map((exchange) => (
                    <option key={exchange} value={exchange}>
                      {exchange}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Initial Investment Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-600">$</span>
                <input
                  type="number"
                  required
                  min="100"
                  step="100"
                  value={formData.initial_investment}
                  onChange={(e) =>
                    setFormData({ ...formData, initial_investment: parseFloat(e.target.value) })
                  }
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="10000"
                />
              </div>
            </div>

            <div className="pt-6 border-t">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Generate Portfolio
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> This analysis uses AI to generate investment recommendations based
            on your preferences. Results are for educational purposes only and should not be
            considered financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
