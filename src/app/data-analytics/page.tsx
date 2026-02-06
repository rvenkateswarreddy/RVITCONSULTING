import { Metadata } from 'next';
import { BarChart3, TrendingUp, Database, Brain, CheckCircle, ArrowRight, PieChart, Activity, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Analytics Services | RV IT Consulting',
  description: 'Transform your data into actionable insights. Advanced analytics, business intelligence, machine learning, and data visualization solutions.',
};

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data <span className="text-yellow-300">Analytics</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Transform raw data into actionable insights that drive business growth. 
                Our advanced analytics solutions help you make data-driven decisions 
                with confidence and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Insights
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1PB+</div>
                    <div className="text-purple-100">Data Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">85%</div>
                    <div className="text-purple-100">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-purple-100">Analytics Models</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-purple-100">Real-time Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock the Power of Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive data analytics solutions help you discover patterns, 
              predict trends, and make informed business decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <BarChart3 className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Intelligence</h3>
              <p className="text-gray-600">
                Transform complex data into intuitive dashboards and reports that 
                provide real-time business insights.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Brain className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
              <p className="text-gray-600">
                Leverage AI and ML algorithms to automate decision-making and 
                uncover hidden patterns in your data.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">
                Forecast future trends and outcomes with advanced statistical models 
                and predictive algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Analytics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end data solutions from collection to visualization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Database className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Engineering</h3>
                  <p className="text-gray-600 mb-4">
                    Build robust data pipelines and infrastructure to collect, process, 
                    and store data efficiently.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">ETL Pipeline Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Data Warehouse Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Real-time Data Processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <PieChart className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Visualization</h3>
                  <p className="text-gray-600 mb-4">
                    Create interactive dashboards and visualizations that make complex 
                    data easy to understand and explore.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Custom Dashboard Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Interactive Reports</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Mobile-friendly Visualizations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Activity className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Statistical Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Apply advanced statistical methods to uncover insights and validate 
                    hypotheses with rigorous analysis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Hypothesis Testing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Regression Analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Time Series Analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Target className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Analytics</h3>
                  <p className="text-gray-600 mb-4">
                    Transform business data into strategic insights that drive growth 
                    and operational efficiency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Customer Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Financial Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Operational Analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver powerful analytics solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>AWS Analytics</li>
                <li>Google BigQuery</li>
                <li>Azure Synapse</li>
                <li>Snowflake</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Visualization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Tableau</li>
                <li>Power BI</li>
                <li>Looker</li>
                <li>D3.js</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
                <li>MLflow</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Programming</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python</li>
                <li>R</li>
                <li>SQL</li>
                <li>Scala</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Analytics Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications across different business functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer Segmentation',
                desc: 'Identify and target specific customer groups with personalized strategies.'
              },
              {
                title: 'Sales Forecasting',
                desc: 'Predict future sales trends and optimize inventory management.'
              },
              {
                title: 'Risk Assessment',
                desc: 'Evaluate and mitigate business risks with data-driven models.'
              },
              {
                title: 'Operational Efficiency',
                desc: 'Optimize processes and reduce costs through performance analytics.'
              },
              {
                title: 'Market Analysis',
                desc: 'Analyze market trends and competitive landscape for strategic planning.'
              },
              {
                title: 'Fraud Detection',
                desc: 'Identify and prevent fraudulent activities using anomaly detection.'
              }
            ].map((useCase) => (
              <div key={useCase.title} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Analytics Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                Understand business objectives and data requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collection</h3>
              <p className="text-gray-600">
                Gather and integrate data from various sources.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
              <p className="text-gray-600">
                Clean, transform, and prepare data for analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">
                Apply analytical models and extract insights.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visualization</h3>
              <p className="text-gray-600">
                Present insights through interactive dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transform Your Data into Decisions
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's help you unlock the full potential of your data with advanced analytics solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Analytics Journey
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
