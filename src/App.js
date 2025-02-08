import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const Navigation = () => {
    return (
      <nav className="py-6 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-light">Prajwal Vijendra</div>
          <div className="flex space-x-8">
            {['Home', 'About', /* 'Projects', */ 'Contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-base font-light ${
                  activeTab === tab.toLowerCase()
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  };

  const Home = () => {
    return (
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="aspect-square rounded-full overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}/praj.jpg`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl font-serif mb-4">Data Scientist</h1>
            <p className="text-2xl font-serif text-gray-700 mb-8">
              Building high-performance data platforms and generative AI solutions
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced Data Scientist specializing in advanced ML models, high-performance big data platforms, 
              and generative AI solutions that solve real-world challenges. I'm passionate about 
              taking complex data and turning it into practical, impactful applications.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const About = () => {
    return (
      <div className="container mx-auto px-8 py-16 flex justify-center">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-serif mb-8">A Data Scientist Crafting Intelligent Solutions</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
            Hi, I'm Prajwal Vijendra, a Senior Data Scientist passionate about transforming complex data into impactful AI solutions.
            </p>

            <p>
            At Clarify Health, I helped build high-performance big data platforms processing billions of records to develop healthcare models. 
            As part of the team, I helped develop an empirical matching methodology for scalable, deterministic population clustering (patent: US 12,079,230 B1).
            </p>

            <p>
            I spearheaded the development of Physician Finder, a multi-agent AI chatbot revolutionizing doctor discovery by delivering personalized recommendations based on symptoms, provider expertise, and quality scores derived from claims data.
            </p>

            <p>
            With an M.S. in Data Science from Duke, I specialize in machine learning, NLP, deep learning, and scalable AI systems. My toolkit includes Python, R, SQL, AWS, MLOps, LLMOps, Langchain, LlamaIndex, and PyTorch.
            </p>

            <p>
            I'm driven by the challenge of pushing AI boundaries—whether it's building ML platforms, fine-tuning models, or designing AI-powered systems. I thrive on solving complex problems and developing scalable, real-world solutions.
            </p>

            <p>
            Let’s connect!
            </p>

            <p className="mt-12 text-2xl font-serif">Beyond Work</p>
            
            <p>
              Off the keyboard, you'll find me playing chess, hitting tennis balls, or watching Formula 1 races. 
              Always up for a friendly match or discussing the latest F1 strategies over coffee!
            </p>
          </div>
        </div>
      </div>
    );
  };

  // const Projects = () => {
  //   return (
  //     <div className="container mx-auto px-8 py-16">
  //       <div className="max-w-3xl">
  //         <h2 className="text-3xl font-serif mb-8">Featured Projects</h2>
  //         <div className="space-y-8">
  //           <div className="border-l-4 border-gray-200 pl-6">
  //             <h3 className="text-xl font-medium">AI-Powered Chatbot</h3>
  //             <p className="mt-2 text-gray-700">
  //               A generative AI chatbot that provides personalized recommendations based on user needs,
  //               achieving 90%+ user approval.
  //             </p>
  //           </div>
            
  //           <div className="border-l-4 border-gray-200 pl-6">
  //             <h3 className="text-xl font-medium">Predictive Analytics Platform</h3>
  //             <p className="mt-2 text-gray-700">
  //               Novel methodology for clustering similar patterns through empirical matching, 
  //               reducing processing time by 12x and lowering costs by 87%.
  //             </p>
  //           </div>

  //           <div className="border-l-4 border-gray-200 pl-6">
  //             <h3 className="text-xl font-medium">Big Data Platform</h3>
  //             <p className="mt-2 text-gray-700">
  //               High-performance data platform processing over 300 models on billions of records
  //               using Apache PySpark and Airflow.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const Contact = () => {
    return (
      <div className="container mx-auto px-8 py-16 flex justify-center">
        <div className="max-w-3xl border border-gray-300 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <a href="mailto:prajwal.vijendra@gmail.com" className="text-blue-600 hover:text-blue-800">
                prajwal.vijendra@gmail.com
              </a>
            </p>
            <p className="text-lg">San Francisco, CA</p>
            <p className="text-lg">
              <a 
                href="https://linkedin.com/in/prajwal-vijendra" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {activeTab === 'home' && <Home />}
      {activeTab === 'about' && <About />}
      {/* {activeTab === 'projects' && <Projects />} */}
      {activeTab === 'contact' && <Contact />}
    </div>
  );
};

export default App;