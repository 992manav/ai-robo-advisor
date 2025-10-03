import { Link } from 'react-router-dom';
import { TrendingUp, Target, Shield, BarChart3, Brain, Zap } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <TrendingUp className="w-16 h-16" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Professional Investment Strategies,
              <br />
              Powered by AI
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Access hedge fund-level investment analysis and portfolio recommendations
              through our AI-powered robo advisor
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors text-lg border-2 border-white"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI-Driven Analysis</h3>
              <p className="text-gray-600">
                Leverage advanced AI models to analyze market data and suggest personalized
                investment strategies tailored to your goals.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Goal-Based Investing</h3>
              <p className="text-gray-600">
                Define your investment goals, risk tolerance, and time horizon to receive
                customized portfolio recommendations.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
              <p className="text-gray-600">
                Comprehensive risk analysis including diversification, volatility metrics, and
                alignment with your risk profile.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-gray-600">
                Track CAGR, Sharpe ratio, maximum drawdown, alpha, beta, and other key
                performance metrics.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Updates</h3>
              <p className="text-gray-600">
                Get instant portfolio analysis with live progress updates as our AI agents work
                on your investment strategy.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">ETF Portfolio Builder</h3>
              <p className="text-gray-600">
                Receive concrete ETF recommendations with proper asset allocation across
                geographies and sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Define Your Goals</h3>
                  <p className="text-gray-600">
                    Answer a quick questionnaire about your investment goals, risk tolerance, and
                    time horizon.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI Strategy Generation</h3>
                  <p className="text-gray-600">
                    Our investment agent creates a customized strategy with asset allocation,
                    geographical, and sector diversification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Portfolio Construction</h3>
                  <p className="text-gray-600">
                    The portfolio agent translates your strategy into concrete ETF holdings with
                    optimal weightings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Analysis</h3>
                  <p className="text-gray-600">
                    Multiple analyst agents evaluate fees, diversification, alignment, and
                    performance to provide actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Investing Smarter?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of investors using AI to make better investment decisions
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Create Your Portfolio Now
          </Link>
        </div>
      </section>
    </div>
  );
}
