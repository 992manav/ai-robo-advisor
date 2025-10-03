import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, PieChart, TrendingUp, Activity } from 'lucide-react';

export function Dashboard() {
  const [portfolios] = useState([
    {
      id: '1',
      name: 'Growth Portfolio',
      value: 50000,
      change: 12.5,
      lastUpdated: '2 hours ago',
    },
    {
      id: '2',
      name: 'Retirement Fund',
      value: 125000,
      change: 8.3,
      lastUpdated: '1 day ago',
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage and analyze your investment portfolios</p>
          </div>
          <Link
            to="/analyze"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            Create New Portfolio
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Portfolio Value</h3>
              <PieChart className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">$175,000</p>
            <p className="text-sm text-green-600 mt-2">+$18,250 (11.6%)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Active Portfolios</h3>
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{portfolios.length}</p>
            <p className="text-sm text-gray-600 mt-2">Across multiple strategies</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Avg. Performance</h3>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">10.4%</p>
            <p className="text-sm text-gray-600 mt-2">YTD returns</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">Your Portfolios</h2>
          </div>
          <div className="divide-y">
            {portfolios.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No portfolios yet</h3>
                <p className="text-gray-600 mb-6">
                  Create your first AI-powered investment portfolio to get started
                </p>
                <Link
                  to="/analyze"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Create Portfolio
                </Link>
              </div>
            ) : (
              portfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{portfolio.name}</h3>
                      <p className="text-sm text-gray-600">Updated {portfolio.lastUpdated}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold text-gray-900">
                        ${portfolio.value.toLocaleString()}
                      </p>
                      <p
                        className={`text-sm font-medium ${
                          portfolio.change >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {portfolio.change >= 0 ? '+' : ''}
                        {portfolio.change}%
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
