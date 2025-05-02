import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-fade-in');
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fade-in');
      }, 300);
    }
    if (cta) {
      setTimeout(() => {
        cta.classList.add('animate-fade-in');
      }, 600);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="mb-8 opacity-0 transition-opacity duration-1000" ref={titleRef}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hyperparameter Tuning Using
            <span className="block mt-4 text-blue-600 dark:text-blue-400">Genetic Algorithm</span>
          </h1>
        </div>
        
        <p 
          ref={subtitleRef}
          className="mt-6 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-0 transition-opacity duration-1000 text-gray-700 dark:text-gray-300"
        >
          Optimizing CNN architectures for MNIST digit recognition with evolutionary strategies
        </p>

        <div className="mt-8 opacity-0 transition-opacity duration-1000" ref={ctaRef}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 inline-block">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">97.95%</span>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Final Accuracy on MNIST Dataset
            </p>
          </div>
        </div>

        <div 
          ref={ctaRef}
          className="mt-12 opacity-0 transition-opacity duration-1000"
        >
          <a 
            href="#methodology" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            View Methodology
          </a>
          <a 
            href="#results" 
            className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            See Results
          </a>
        </div>

        <div className="mt-8 text-gray-600 dark:text-gray-400 opacity-0 transition-opacity duration-1000">
          <p className="text-sm">
            Islamic University of Technology (OIC)<br/>
            Department of Electrical & Electronic Engineering<br/>
            Course: EEE 4709 | Submission: 21/03/2025
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#methodology" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;