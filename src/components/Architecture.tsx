import React, { useEffect, useRef } from 'react';

const Architecture: React.FC = () => {
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

  return (
    <section id="architecture" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef}>
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 transition-opacity duration-1000">
            System Architecture
          </h2>

          {/* Workflow Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 opacity-0 transition-opacity duration-1000 delay-300">
            {/* Data Pipeline */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Data Pipeline</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>MNIST Dataset (60k training / 10k test)</li>
                <li>Normalization (μ=0.1307, σ=0.3081)</li>
                <li>Tensor Conversion</li>
                <li>Batch Processing (Size: 133)</li>
              </ul>
            </div>

            {/* CNN Architecture */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3l3 3m0 0l3-3m-3 3V2.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">CNN Architecture</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>2 Convolutional Layers</li>
                <li>Filter Sizes: 5x5 and 3x3</li>
                <li>Max Pooling (2x2)</li>
                <li>FC Layer (10 neurons)</li>
                <li>Dropout Regularization</li>
              </ul>
            </div>

            {/* GA Optimization */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">GA Optimization</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>4 Generations</li>
                <li>Population Size: 10</li>
                <li>Mutation Rate: 0.2</li>
                <li>Fitness: Validation Accuracy</li>
              </ul>
            </div>
          </div>

          {/* Training Process */}
          <div className="mt-12 opacity-0 transition-opacity duration-1000 delay-500">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Training Pipeline</h3>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">1. Initialization</span>
                    <p className="text-sm mt-2">Random hyperparameter population</p>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">2. Evaluation</span>
                    <p className="text-sm mt-2">2 epochs per individual</p>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                    <span className="text-green-600 dark:text-green-400 font-semibold">3. Evolution</span>
                    <p className="text-sm mt-2">Crossover & mutation</p>
                  </div>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg w-full max-w-2xl text-center">
                  <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Final Training</span>
                  <p className="text-sm mt-2">8 epochs with best parameters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-16 opacity-0 transition-opacity duration-1000 delay-700">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">PyTorch</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <span className="text-purple-600 dark:text-purple-400 font-mono">PyGAD</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <span className="text-green-600 dark:text-green-400 font-mono">TorchVision</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <span className="text-yellow-600 dark:text-yellow-400 font-mono">NumPy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hardware Setup */}
          <div className="mt-12 opacity-0 transition-opacity duration-1000 delay-900">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Hardware Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">GPU</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">NVIDIA GTX 1650</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">CPU</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AMD Ryzen 7 5800HS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;