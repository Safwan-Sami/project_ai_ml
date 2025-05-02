import React, { useEffect, useRef } from 'react';

const Methodology: React.FC = () => {
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
    <section id="methodology" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef}>
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 transition-opacity duration-1000">
            Research Methodology
          </h2>

          {/* Workflow Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 transition-opacity duration-1000 delay-300">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Experimental Workflow</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our GA-based hyperparameter optimization followed a structured pipeline for MNIST digit recognition:
              </p>
              <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-4">
                <li>MNIST data loading and normalization (μ=0.1307, σ=0.3081)</li>
                <li>CNN architecture definition with configurable parameters</li>
                <li>Genetic algorithm initialization with population of hyperparameter sets</li>
                <li>Evolutionary search across 4 generations (2 epochs each)</li>
                <li>Final training with optimal parameters (8 epochs)</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-inner flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 bg-blue-500 text-white rounded">Data Loading</div>
                  <div className="h-2 w-8 bg-gray-400"></div>
                  <div className="p-2 bg-purple-500 text-white rounded">Model Definition</div>
                  <div className="h-2 w-8 bg-gray-400"></div>
                  <div className="p-2 bg-green-500 text-white rounded">GA Optimization</div>
                  <div className="h-2 w-8 bg-gray-400"></div>
                  <div className="p-2 bg-yellow-500 text-white rounded">Final Training</div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Methodology Workflow</p>
              </div>
            </div>
          </div>

          {/* CNN Architecture */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 transition-opacity duration-1000 delay-500">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-inner flex items-center justify-center">
              <div className="text-center">
                <div className="flex flex-col space-y-4">
                  <div className="px-4 py-2 bg-blue-500 text-white rounded">Input (28x28)</div>
                  <div className="px-4 py-2 bg-purple-500 text-white rounded">Conv2D (5x5 filters)</div>
                  <div className="px-4 py-2 bg-green-500 text-white rounded">MaxPool (2x2)</div>
                  <div className="px-4 py-2 bg-yellow-500 text-white rounded">FC Layer (10 neurons)</div>
                  <div className="px-4 py-2 bg-red-500 text-white rounded">Softmax Output</div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">CNN Architecture</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">GA Implementation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Genetic Algorithm parameters and optimization strategy:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-4">
                <li>Population size: 10 individuals per generation</li>
                <li>Optimized parameters: batch size, learning rate, filter dimensions</li>
                <li>Fitness function: Validation accuracy</li>
                <li>Mutation rate: 0.2 with adaptive adjustment</li>
                <li>4 generations of evolutionary search</li>
              </ul>
            </div>
          </div>

          {/* Hyperparameter Ranges */}
          <div className="mt-16 opacity-0 transition-opacity duration-1000 delay-700">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Hyperparameter Space</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400">Batch Size</h4>
                  <p className="text-gray-600 dark:text-gray-400">32 - 256</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400">Learning Rate</h4>
                  <p className="text-gray-600 dark:text-gray-400">0.001 - 0.1</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400">Filters</h4>
                  <p className="text-gray-600 dark:text-gray-400">3x3 to 5x5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Evaluation Metrics */}
          <div className="mt-16 opacity-0 transition-opacity duration-1000 delay-900">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                Evaluation Protocol
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Training Configuration</h4>
                  <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                    <li>60,000 training samples</li>
                    <li>10,000 test samples</li>
                    <li>Cross-entropy loss</li>
                    <li>Adam optimizer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Performance Metrics</h4>
                  <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                    <li>Classification accuracy</li>
                    <li>Training time per generation</li>
                    <li>Convergence rate</li>
                    <li>Computational efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;