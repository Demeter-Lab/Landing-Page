import React from "react";

const StatCounter: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:flex items-center justify-center">
      <div className="md:w-1/3 mx-auto my-4 md:my-0 text-center">
        <h3 className="text-white text-large font-semibold mb-2">1000+</h3>
        <p className="text-white">Depolyed Contract</p>
      </div>
      <div className="md:w-1/3 mx-auto my-4 md:my-0 text-center">
        <h3 className="text-white text-large font-semibold mb-2">7000+</h3>
        <p className="text-white">Supported Chain</p>
      </div>
      <div className="md:w-1/3 mx-auto my-4 md:my-0 text-center">
        <h3 className="text-white text-large font-semibold mb-2">1500+</h3>
        <p className="text-white">Project Built</p>
      </div>
    </div>
  );
};

export default StatCounter;
