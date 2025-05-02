import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              <span className="mr-2 font-mono">GA-CNN</span>
              Tuning
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Islamic University of Technology (OIC)<br/>
              Department of Electrical & Electronic Engineering<br/>
              Course: EEE 4709 - Hyperparameter Optimization Project<br/>
              Submission Date: 21 March 2025
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://nextjournal.com/gkoehler/pytorch-mnist" 
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Base Model Reference
                </a>
              </li>
              <li>
                <a 
                  href="http://yann.lecun.com/exdb/mnist/" 
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  MNIST Dataset
                </a>
              </li>
              <li>
                <a 
                  href="#documentation" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Project Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">Academic Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.iutoic-dhaka.edu/" 
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  University Website
                </a>
              </li>
              <li>
                <a 
                  href="#instructor" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Course Instructor
                </a>
              </li>
              <li>
                <a 
                  href="#department" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  EEE Department
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Islamic University of Technology (OIC). Project Code: EEE4709-HPT-2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;