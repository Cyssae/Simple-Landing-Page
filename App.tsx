import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      <main className="max-w-3xl w-full space-y-10">
        
        {/* Headline and Text Content */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-center">
            YouTube Script Engineering Prompt - Prompt To Model Proven Script
          </h1>
          <div className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 space-y-4 text-left">
            <p>
              The OS (Operating System) kernel is responsible for managing the processor (CPU) as one of its key functions. It handles tasks like process scheduling, allocating CPU time to different processes, and ensuring that processes run efficiently on the CPU. The OS kernel plays a central role in managing hardware resources, and managing the processor is a critical part of this responsibility. The other options, such as loading the OS, browsing the internet, or providing cloud computing services, are not primary functions of the OS kernel.
            </p>
            <p>
              A WinRAR software file is primarily used for compressing and archiving files. WinRAR is a file archiver utility that allows you to create compressed archive files in various formats (such as RAR and ZIP) to reduce the size of files and folders. It is not designed for editing images, creating spreadsheets, or playing videos.
            </p>
            <p>
              The process state "Waiting" indicates that a process is currently waiting for an event to occur before it can continue its execution. This event could be, for example, the completion of a file I/O operation or the arrival of a specific signal or input from a user. While in the "Waiting" state, the process is not actively executing its instructions but is instead waiting for a specific condition to be met.
            </p>
            
            <h2 className="text-3xl font-bold text-slate-800 pt-6 text-center">WEEK 4</h2>
            
            <h3 className="text-xl font-semibold text-slate-700 mt-4">How does information processing contribute to innovation and technological advancement?</h3>
            <p>
              Information processing contributes to innovation and technological advancement by enabling data-driven research and development. Information processing allows organizations and researchers to collect, analyze, and interpret large volumes of data efficiently. This data can provide valuable insights, patterns, and trends, which can inform the creation of new technologies and innovative solutions.
            </p>

            <h3 className="text-xl font-semibold text-slate-700 mt-4">What is the purpose of data analytics in information processing?</h3>
            <p>
              The primary purpose of data analytics in information processing is to analyze data to uncover valuable insights, trends, and patterns that can inform informed decision-making, support business operations, and drive innovation. Data analytics helps organizations make sense of the data they have and use it to gain a competitive advantage, improve processes, and achieve their objectives.
            </p>

            <h3 className="text-xl font-semibold text-slate-700 mt-4">Which of the following is an example of information processing in healthcare?</h3>
            <p>
              Using electronic medical records (EMRs) for patient management is a prime example of information processing in healthcare. EMRs involve the collection, storage, and retrieval of patient health information in digital form. This data can be efficiently processed and analyzed to support patient care, monitor health trends, and make informed medical decisions while maintaining patient privacy and confidentiality.
            </p>
          </div>
        </div>
        
        {/* Call-to-Action Button */}
        <div className="pt-6 flex justify-center">
          <button
            className="inline-block bg-indigo-600 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={() => alert('Welcome aboard!')}
          >
            Get Started For Free
          </button>
        </div>
        
      </main>
    </div>
  );
};

export default App;
