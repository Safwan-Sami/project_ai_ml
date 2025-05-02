import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Team: React.FC = () => {
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
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef}>
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 transition-opacity duration-1000">
            Project Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-opacity duration-1000 delay-300">
            {/* Team Members */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-transform hover:scale-[1.02]">
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://i.ibb.co.com/8nkbVxM0/asifin.png"
                  alt="Md Ashfaqur Rahman Asif"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Md Ashfaqur Rahman Asif
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <span className="text-sm mr-2">ID:</span>
                <span className="font-mono">200021201</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <GraduationCap className="w-4 h-4 mr-2" />
                Department of EEE
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-transform hover:scale-[1.02]">
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://i.ibb.co.com/9mx3D1mD/elmo.png"
                  alt="Elmul Soad Swopno"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Elmul Soad Swopno
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <span className="text-sm mr-2">ID:</span>
                <span className="font-mono">200021219</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <GraduationCap className="w-4 h-4 mr-2" />
                Department of EEE
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-transform hover:scale-[1.02]">
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://i.ibb.co/274ZjdHc/Safwan.jpg"
                  alt="Safwan Sami"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Safwan Sami
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <span className="text-sm mr-2">ID:</span>
                <span className="font-mono">200021221</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <GraduationCap className="w-4 h-4 mr-2" />
                Department of EEE
              </div>
            </div>
          </div>

          {/* Advisor Section */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 opacity-0 transition-opacity duration-1000 delay-500">
            <div className="text-center max-w-2xl mx-auto">
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://i.ibb.co.com/hRsrppms/image.png"
                  alt="Md Arefin Rabbi Emon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Md Arefin Rabbi Emon
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Project Advisor</p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Department of Electrical & Electronic Engineering</p>
                <p>Islamic University of Technology (OIC)</p>
              </div>
            </div>
          </div>

          {/* University Section */}
          <div className="mt-16 text-center opacity-0 transition-opacity duration-1000 delay-700">
            <div className="inline-block bg-white dark:bg-gray-800 rounded-lg px-8 py-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                <span className="text-blue-600 dark:text-blue-400">IUT</span> - Islamic University of Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Organisation of Islamic Cooperation (OIC)
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Department of Electrical & Electronic Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;