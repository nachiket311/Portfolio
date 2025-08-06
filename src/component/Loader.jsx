import React from 'react';

const Loader = () => {
  return (
     <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-teal-500 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}

export default Loader;
