import React, { useEffect, useRef } from 'react';

const Results: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = sectionRef.current?.children;
    if (children) Array.from(children).forEach((child) => observer.observe(child));

    return () => {
      if (children) Array.from(children).forEach((child) => observer.unobserve(child));
    };
  }, []);

  // Updated data from PDF
  const performanceData = [
    { metric: 'Accuracy', value: 97.95, color: 'blue' },
    { metric: 'Validation Accuracy', value: 92.83, color: 'purple' },
    { metric: 'Training Epochs', value: 8, color: 'green' },
    { metric: 'Generations', value: 4, color: 'yellow' },
  ];

  const hyperparameters = {
    batchSize: 133,
    learningRate: 0.0137,
    convFilters: [5, 26],
    hiddenSize: 10,
    filterSizes: ['5x5', '3x3']
  };

  const comparisonData = [
    { 
      method: 'Untuned CNN', 
      accuracy: 97.06, 
      trainingTime: '8 epochs',
      params: 'Default'
    },
    { 
      method: 'GA-Optimized', 
      accuracy: 97.95, 
      trainingTime: '4 generations + 8 epochs',
      params: 'Optimized'
    },
    { 
      method: 'Grid Search', 
      accuracy: 97.89, 
      trainingTime: '32 trials',
      params: 'Exhaustive'
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef}>
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 transition-opacity duration-1000">
            Experimental Results
          </h2>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 transition-opacity duration-1000 delay-300">
            {performanceData.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className={`text-${item.color}-600 dark:text-${item.color}-400 text-2xl font-bold mb-2`}>
                  {item.value}{typeof item.value === 'number' ? '%' : ''}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>

          {/* Optimized Hyperparameters */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 opacity-0 transition-opacity duration-1000 delay-500">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Optimal Hyperparameters
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Batch Size</div>
                <div className="text-lg font-semibold">{hyperparameters.batchSize}</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Learning Rate</div>
                <div className="text-lg font-semibold">{hyperparameters.learningRate}</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Conv Filters</div>
                <div className="text-lg font-semibold">{hyperparameters.convFilters.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Methodology Comparison */}
          <div className="mt-12 opacity-0 transition-opacity duration-1000 delay-700">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                Tuning Method Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Method</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Accuracy</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Training Time</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Parameters Evaluated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={item.method === 'GA-Optimized' ? 'bg-blue-50 dark:bg-blue-900/20' : ''}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">{item.method}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{item.accuracy}%</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{item.trainingTime}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{item.params}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 opacity-0 transition-opacity duration-1000 delay-900">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Research Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-2">
                  GA Efficiency
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Achieved comparable accuracy to grid search with 75% fewer evaluations
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-purple-600 dark:text-purple-400 text-lg font-semibold mb-2">
                  Convergence Pattern
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Accuracy plateau observed after 3 generations of evolution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;