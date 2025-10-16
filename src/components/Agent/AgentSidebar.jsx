import React from 'react';

const propertyTypes = [
  { name: 'Residential', count: 12 },
  { name: 'Commercial', count: 5 },
  { name: 'Land', count: 8 },
  { name: 'Villa', count: 3 },
  { name: 'Office', count: 7 },
  { name: 'Apartment', count: 10 },
];

const AgentSidebar = () => {
  return (
    <div className="max-w-md mx-auto md:max-w-none md:w-[470px] px-4 md:px-0">
      {/* Property Filter Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-md shadow-sm">
        <h1 className="text-3xl font-semibold mb-8 text-center">Property Filter</h1>
        <hr className="text-gray-300 mb-9" />
        <div className="flex flex-col gap-3 items-center">
          {propertyTypes.map(({ name, count }) => (
            <div
              key={name}
              className="w-full md:w-[400px] p-4 border text-xl border-gray-300 rounded flex justify-between items-center cursor-pointer transition-transform duration-300 hover:translate-x-1"
            >
              <span>{name}</span>
              <span className="font-semibold px-2 rounded text-white bg-orange-400">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Property Attachment Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-md shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">Property Attachment</h2>
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            className="flex items-center justify-between p-4 border border-gray-300 rounded w-full md:w-[400px] hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
            onClick={() => alert('Download Document clicked')}
          >
            <span className="text-3xl">📄</span>
            <span className="font-medium">Download Document</span>
          </button>

          <button
            type="button"
            className="flex items-center justify-between p-4 border border-gray-300 rounded w-full md:w-[400px] hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
            onClick={() => alert('Presentation clicked')}
          >
            <span className="text-3xl">📊</span>
            <span className="font-medium">Presentation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSidebar;
