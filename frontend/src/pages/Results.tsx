import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Download, ArrowLeft, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, TrendingUp } from 'lucide-react';
import type { AdvisorResult, PortfolioPreference } from '@/types';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const [progress, setProgress] = useState(0);
  const preferences = location.state?.preferences as PortfolioPreference;

  useEffect(() => {
    if (!preferences) {
      navigate('/analyze');
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 500);

    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setResult(generateMockResult(preferences));
      setLoading(false);
    }, 3000);

    return () => clearInterval(progressInterval);
  }, [preferences, navigate]);

  const generateMockResult = (pref: PortfolioPreference): AdvisorResult => {
    return {
      portfolio: {
        name: 'AI-Generated Portfolio',
        strategy: {
          name: `${pref.goal} Strategy`,
          description: `A balanced strategy tailored for ${pref.goal.toLowerCase()}`,
          asset_allocation: {
            stocks_percentage: 60,
            bonds_percentage: 30,
            real_estate_percentage: 5,
            cash_percentage: 5,
          },
          geographical_diversification: {
            regions: [
              { region: 'North America', weight: 50 },
              { region: 'Europe', weight: 25 },
              { region: 'Asia Pacific', weight: 20 },
              { region: 'Emerging Markets', weight: 5 },
            ],
          },
          sector_diversification: {
            sectors: [
              { sector: 'Technology', weight: 25 },
              { sector: 'Healthcare', weight: 20 },
              { sector: 'Financial Services', weight: 15 },
              { sector: 'Consumer', weight: 15 },
              { sector: 'Industrial', weight: 15 },
              { sector: 'Other', weight: 10 },
            ],
          },
          stock_exchange: pref.stock_exchange,
          risk_tolerance: pref.risk_profile,
          time_horizon: pref.investment_horizon,
          expected_returns: '7-9% annually',
        },
        holdings: [
          {
            symbol: 'VTI',
            name: 'Vanguard Total Stock Market ETF',
            isin: 'US9229087690',
            asset_class: 'Stocks',
            weight: 40,
          },
          {
            symbol: 'BND',
            name: 'Vanguard Total Bond Market ETF',
            isin: 'US9219378356',
            asset_class: 'Bonds',
            weight: 30,
          },
          {
            symbol: 'VNQ',
            name: 'Vanguard Real Estate ETF',
            isin: 'US92204A1088',
            asset_class: 'Real Estate',
            weight: 20,
          },
          {
            symbol: 'VXUS',
            name: 'Vanguard Total International Stock ETF',
            isin: 'US92204A5065',
            asset_class: 'Stocks',
            weight: 10,
          },
        ],
      },
      analysis: {
        summary: {
          is_approved: true,
          strengths:
            'Well-diversified portfolio with low fees. Strong geographical and sector diversification. Alignment with risk profile is excellent.',
          weeknesses:
            'Slightly lower expected returns compared to more aggressive strategies. Limited exposure to emerging markets.',
          overall_assessment:
            'This is a solid portfolio recommendation that balances growth potential with risk management. The ETF selection provides broad market exposure with minimal costs.',
          advices:
            'Consider rebalancing quarterly. Monitor performance against benchmarks. Evaluate increasing emerging market exposure if comfortable with additional risk.',
        },
      },
    };
  };

  if (!preferences) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Analyzing Your Investment Profile
              </h2>
              <p className="text-gray-600 mb-6">
                Our AI agents are working on your personalized portfolio...
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Analyzing investment goals and risk profile</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {progress > 30 ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full animate-pulse" />
                  )}
                  <span>Generating investment strategy</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {progress > 60 ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                  )}
                  <span>Building ETF portfolio</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {progress > 90 ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                  )}
                  <span>Running performance analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const assetAllocationData = Object.entries(result.portfolio.strategy.asset_allocation)
    .filter(([_, value]) => value && value > 0)
    .map(([key, value]) => ({
      name: key.replace('_percentage', '').replace('_', ' '),
      value: value || 0,
    }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {result.portfolio.strategy.name}
            </h1>
            <p className="text-gray-600">{result.portfolio.strategy.description}</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>

        {result.analysis.summary.is_approved ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Portfolio Approved</h3>
              <p className="text-sm text-green-800">
                This portfolio meets all analysis criteria and aligns with your investment goals.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1">Review Recommended</h3>
              <p className="text-sm text-yellow-800">
                Some aspects of this portfolio may need adjustment based on the analysis.
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Risk Tolerance</h3>
            <p className="text-xl font-semibold text-gray-900">
              {result.portfolio.strategy.risk_tolerance}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Time Horizon</h3>
            <p className="text-xl font-semibold text-gray-900">
              {result.portfolio.strategy.time_horizon}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Expected Returns</h3>
            <p className="text-xl font-semibold text-gray-900">
              {result.portfolio.strategy.expected_returns}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-6">Asset Allocation</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={assetAllocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {assetAllocationData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-6">Portfolio Holdings</h2>
            <div className="space-y-4">
              {result.portfolio.holdings.map((holding) => (
                <div key={holding.symbol} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-900">{holding.symbol}</h3>
                      <p className="text-sm text-gray-600">{holding.name}</p>
                    </div>
                    <span className="font-semibold text-blue-600">{holding.weight}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${holding.weight}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-xl font-semibold mb-6">Geographical Diversification</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={result.portfolio.strategy.geographical_diversification.regions}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="weight" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-6">Analysis Summary</h2>

          <div className="space-y-6">
            {result.analysis.summary.strengths && (
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Strengths</h3>
                <p className="text-gray-700">{result.analysis.summary.strengths}</p>
              </div>
            )}

            {result.analysis.summary.weeknesses && (
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Areas for Improvement</h3>
                <p className="text-gray-700">{result.analysis.summary.weeknesses}</p>
              </div>
            )}

            {result.analysis.summary.overall_assessment && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Overall Assessment</h3>
                <p className="text-gray-700">{result.analysis.summary.overall_assessment}</p>
              </div>
            )}

            {result.analysis.summary.advices && (
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Recommendations</h3>
                <p className="text-gray-700">{result.analysis.summary.advices}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
