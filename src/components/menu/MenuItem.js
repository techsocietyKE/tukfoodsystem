import React from 'react';

export default function MenuItem() {
  return (
    <div className="max-w-xs mx-auto">
      <div className="bg-gray-200 hover:bg-gray-300 hover:shadow-xl transition-all cursor-pointer p-4 rounded-lg text-center">
        <div className="text-center">
          <img 
            src="/friedrice.png" 
            alt="Fried Rice" 
            className="w-full h-36 object-cover block mx-auto rounded-lg"
          />
        </div>
        <h4 className="font-semibold my-2 text-xl text-gray-800">Fried Rice</h4>
        <p className="text-gray-600 text-sm">
          Fried rice together with eggs mixed together.
        </p>
        <button className="bg-primary hover:bg-primary-dark transition-colors my-3 text-white rounded-full px-6 py-2 focus:outline-none">
          Add to Cart Ksh 50
        </button>
      </div>
    </div>
  );
}
